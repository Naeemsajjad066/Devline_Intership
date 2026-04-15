import {z} from 'zod'

export const signupSchema=z.object({
    name: z.string().min(3,"must have more than 3 characters"),
    email:z.string().email("Must be a proper email"),
    password:z.string().min(8,"Must be more than 8 characters")
})

export const signinSchema=z.object({
    email:z.string().email("Must be valid Email"),
    password:z.string().min(8,"must be a 8 character password")
}).strict()