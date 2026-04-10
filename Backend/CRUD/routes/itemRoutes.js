import { validate } from "../../MVC/middleware/validate.js"
import express from 'express'
import { itemSchema, updateItemSchema } from "../validators/itemValidator.js"
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/itemController.js"

const router=express.Router()

router.get('/items',getItems);
router.get('/items/:id',getItem)
router.post('/items',validate(itemSchema),addItem)
router.put('/items/:id',validate(updateItemSchema),updateItem)
router.delete('/items/:id',deleteItem)

export default router;