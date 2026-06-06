'use client'

import { Input } from "@/components/ui/input";
import { AuthModal } from "./auth-modal";
import { Label } from "@/components/ui/label";
import { useCreateStore } from "@/store/create-account.store";
import { useLogStore } from "@/store/login.store";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { createUserSchema } from "@/schemas/auth-schema";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";
import { createSession } from "@/lib/session";
import { useRouter } from "next/navigation";



export const LoginModal = () => {

    const { onOpen } = useCreateStore()

    const router = useRouter()

    const { isOpen, onClose } = useLogStore()
  

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = () => {
        onClose();

        setTimeout(() => {
            onOpen();
        }, 250);
    };


     const form = useForm<z.infer<typeof createUserSchema>>({
            resolver: zodResolver(createUserSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        })
    
    
        const handleSubmitData = async (data: z.infer<typeof createUserSchema>) => {
        console.log('data', data)
        setIsLoading(true)
        try {

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACK_URL}/api/user/login`,
                data
            );

            const {message, ...payload} = response.data

             

            await createSession(payload)

            console.log('response', response)
            toast.success(response.data.message)

            onClose()
            router.refresh()
            window.location.reload();


        } catch (error:any) {
            console.log(error.response?.data);
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                    "Something went wrong"
                );
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setIsLoading(false)
        }
    }



    return (
        <AuthModal
            title="Se connecter"
            change={handleChange}
            onClose={onClose}
            isOpen={isOpen}
            subtile="Vous n'avez pas encore un compte ?"
            next="Creer un compte">

            <form id="form-login" onSubmit={form.handleSubmit(handleSubmitData)} className="flex flex-col gap-2">

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <div className="gap-4 flex flex-col">
                            <Label className="text-[#005648]">Email:</Label>
                            {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                    {fieldState.error.message}
                                </p>
                            )}
                            <Input
                                {...field}
                                id="email"
                                aria-invalid={fieldState.invalid}
                                placeholder="Entrer votre address email"
                                type="text"
                            // autoComplete="off"
                            />
                            
                        </div>
                    )} />



                <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <div className="gap-4 flex flex-col">
                            <Label className="text-[#005648]">Mot de passe:</Label>
                            {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                    {fieldState.error.message}
                                </p>
                            )}
                            <Input
                                {...field}
                                id="password"
                                aria-invalid={fieldState.invalid}
                                placeholder="Entrer un mot de passe"
                                type="text"
                            // autoComplete="off"
                            />

                        </div>
                    )} />

                <div className="flex items-center justify-center">
                    <Button type="submit" form="form-login" disabled={isLoading}>
                        {isLoading ? <Loader className="animate-spin" /> : "Continuez"}
                    </Button>
                </div>
            </form>
        </AuthModal>
    )
}