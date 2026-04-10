import {z} from 'zod'

export const itemSchema=z.object({
    name:z.string({
        required_error:"Name is Required",
        invalid_type_error:"Name must be a string"
    }),
    price:z.number({
        required_error:"Price is required",
        invalid_type_error:"Price must be a number"
    })
}).strict()

export const updateItemSchema=itemSchema.partial()