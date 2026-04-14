import express from 'express'
import { createItem, deleteItem, getItemById, getItems, getItemsByProjectId, updateItem } from '../controllers/itemController.js';

const router=express.Router();

router.get("/",getItems);
router.get("/:id",getItemById);
router.put("/:id",updateItem);
router.delete("/:id",deleteItem);
router.post("/",createItem)
export default router