import {z} from 'zod'

export const userSchema=z.object({
    name:z.string().min(3,"name must contain atleast 3 characters"),
    email:z.string().email("invalid email")
})

export const updateUserSchema=userSchema.partial()