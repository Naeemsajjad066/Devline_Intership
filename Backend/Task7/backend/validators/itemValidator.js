import {z} from 'zod'

export const createItemSchema=z.object({
    name:z.string().min(1,"Must be String"),
    price:z.number().int().optional(),
    projectId:z.number().int()
})

export const updateItemSchema=z.object({
    name:z.string().min(1,"Must be a string").optional(),
    price:z.number().int().optional("")
})