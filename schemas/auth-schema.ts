import * as z from 'zod'



export const createUserSchema = z.object({
    password: z.string().min(6,'Le mot de passe doit être au moins 6 charactères'),
    email : z.email("Email invalid")
})