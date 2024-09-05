import * as z from "zod"

export const signupSchema = z.object({
    name:z.string(),
    email:z.string().email({message:"provide a valid email"}),
    password:z.string().min(6,{message:"password should be 6 characters long"})
})