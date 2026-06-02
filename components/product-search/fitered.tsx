'use client'
import { Inria_Sans } from "next/font/google";

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"


import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Checkbox } from "../ui/checkbox";




const inria = Inria_Sans({
    weight: '400'
});


const tasks = [
    {
        id: "push",
        label: "Push notifications",
    },
    {
        id: "email",
        label: "Email notifications",
    },
    {
        id: "marque-2",
        label: "Chewy",
    },
] as const



const poids = [
    {
        id: "push",
        label: "moins de 5kg",
    },
    {
        id: "email",
        label: "5kg-10kg",
    },
    {
        id: "10kg-20kg",
        label: "Chewy",
    },
] as const


const steps = [
    {
        id: "push",
        label: "chiot",
    },
    {
        id: "email",
        label: "Adult",
    },
    {
        id: "10kg-20kg",
        label: "Senior",
    },
] as const





const formSchema = z.object({
    responses: z.boolean(),
    tasks: z
        .array(z.string())
        .min(1, "Please select at least one notification type.")
        .refine(
            (value) => value.every((task) => tasks.some((t) => t.id === task)),
            {
                message: "Invalid notification type selected.",
            }
        ),
})


export const Filtered = () => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            responses: true,
            tasks: [],
        },
    })


    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }

    return (
        <form id="form-rhf-checkbox" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="tasks"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <FieldGroup>
                            <FieldSet data-invalid={fieldState.invalid}>
                                <FieldLegend variant="label" className="text-sm md:text-[16px] font-semibold mb-3">Marque</FieldLegend>
                                <FieldGroup data-slot="checkbox-group">
                                    {tasks.map((task) => (
                                        <Field
                                            key={task.id}
                                            orientation="horizontal"
                                            data-invalid={fieldState.invalid}
                                        >
                                            <Checkbox
                                                id={`form-rhf-checkbox-${task.id}`}
                                                name={field.name}
                                                aria-invalid={fieldState.invalid}
                                                checked={field.value.includes(task.id)}
                                                onCheckedChange={(checked) => {
                                                    const newValue = checked
                                                        ? [...field.value, task.id]
                                                        : field.value.filter(
                                                            (value) => value !== task.id
                                                        )
                                                    field.onChange(newValue)
                                                }}
                                            />
                                            <FieldLabel
                                                htmlFor={`form-rhf-checkbox-${task.id}`}
                                                className="font-normal"
                                            >
                                                {task.label}
                                            </FieldLabel>
                                        </Field>
                                    ))}
                                </FieldGroup>
                            </FieldSet>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}


                        </FieldGroup>
                    )}
                />
                <FieldSeparator />
                <Controller
                    name="tasks"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <FieldGroup>
                            <FieldSet data-invalid={fieldState.invalid}>
                                <FieldLegend variant="label" className="text-sm md:text-[16px] font-semibold mb-3">Poids du produit</FieldLegend>
                                <FieldGroup data-slot="checkbox-group">
                                    {poids.map((task) => (
                                        <Field
                                            key={task.id}
                                            orientation="horizontal"
                                            data-invalid={fieldState.invalid}
                                        >
                                            <Checkbox
                                                id={`form-rhf-checkbox-${task.id}`}
                                                name={field.name}
                                                aria-invalid={fieldState.invalid}
                                                checked={field.value.includes(task.id)}
                                                onCheckedChange={(checked) => {
                                                    const newValue = checked
                                                        ? [...field.value, task.id]
                                                        : field.value.filter(
                                                            (value) => value !== task.id
                                                        )
                                                    field.onChange(newValue)
                                                }}
                                            />
                                            <FieldLabel
                                                htmlFor={`form-rhf-checkbox-${task.id}`}
                                                className="font-normal"
                                            >
                                                {task.label}
                                            </FieldLabel>
                                        </Field>
                                    ))}
                                </FieldGroup>
                            </FieldSet>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}


                        </FieldGroup>
                    )}
                />
                <FieldSeparator />
                <Controller
                    name="tasks"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <FieldGroup>
                            <FieldSet data-invalid={fieldState.invalid}>
                                <FieldLegend variant="label" className="text-sm md:text-[16px] font-semibold mb-3">Etape de la vie</FieldLegend>
                                <FieldGroup data-slot="checkbox-group">
                                    {steps.map((task) => (
                                        <Field
                                            key={task.id}
                                            orientation="horizontal"
                                            data-invalid={fieldState.invalid}
                                        >
                                            <Checkbox
                                                id={`form-rhf-checkbox-${task.id}`}
                                                name={field.name}
                                                aria-invalid={fieldState.invalid}
                                                checked={field.value.includes(task.id)}
                                                onCheckedChange={(checked) => {
                                                    const newValue = checked
                                                        ? [...field.value, task.id]
                                                        : field.value.filter(
                                                            (value) => value !== task.id
                                                        )
                                                    field.onChange(newValue)
                                                }}
                                            />
                                            <FieldLabel
                                                htmlFor={`form-rhf-checkbox-${task.id}`}
                                                className="font-normal"
                                            >
                                                {task.label}
                                            </FieldLabel>
                                        </Field>
                                    ))}
                                </FieldGroup>
                            </FieldSet>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}


                        </FieldGroup>
                    )}
                />
            </FieldGroup>

        </form>
    )
}