
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";



import { Inria_Sans } from "next/font/google";



import { FcGoogle } from "react-icons/fc";




interface AuthModalPros {
    title: string;
    children: React.ReactNode;
    subtile: string;
    next: string;
    onClose: () => void;
    isOpen: boolean;
    change: () => void;
}

const Inria = Inria_Sans({
    weight: "400"
});


export const AuthModal = ({ children, next, subtile, title, isOpen, onClose, change }: AuthModalPros) => {




    return (

        <Dialog onOpenChange={onClose} open={isOpen}>
            <DialogContent className={`flex   flex-col  pt-12 min-h-[60vh] gap-4 bg-[#10B193] ${Inria.className}`} disableOutsideClose>
                <DialogTitle className={`p-4 text-white  text-xl text-center`}>
                    {title}
                </DialogTitle>
                <DialogDescription className="text-center">
                    Connectez-vous pour accéder à votre compte.
                </DialogDescription>
                <div className="flex flex-col gap-2 items-center">


                    <a
                        className="p-2 border items-center justify-center gap-3 flex rounded-2xl cursor-pointer mb-2"
                        href={`${process.env.NEXT_PUBLIC_BACK_URL}/auth/google`}
                    >
                        <FcGoogle className="size-4 " />
                        <p>Continuez avec google</p>
                    </a>



                    <p className="text-xs">ou</p>
                    <p className="text-xs">Connectez vous avec </p>

                </div>
                <div className={` gap-4 flex flex-col  mx-8`}>
                    {children}
                </div>

                <div className="bg-[#10B193] flex justify-between items-center mt-3">
                    <p className="text-xs text-[#21E482]">{subtile}</p>
                    <p className="text-white underline cursor-pointer" onClick={change}>{next}</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}