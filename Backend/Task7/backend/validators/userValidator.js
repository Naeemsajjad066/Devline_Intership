import {z} from 'zod'

export const createUserSchema=z.object({
    name:z.string().min(1,"name is required"),
    age:z.number().int().positive("Age must be positive")
})

export const updateUserSchema=z.object({
    name:z.string().min(1).optional(),
    age:z.number().int().positive().optional(),
})