import {z} from 'zod'
export const createProjectSchema=z.object({
    title:z.string().min(1,"title is required"),
    userId:z.number().int()
})
export const updateProjectSchema=z.object({
    title:z.string().min(1,"title is required").optional()
})