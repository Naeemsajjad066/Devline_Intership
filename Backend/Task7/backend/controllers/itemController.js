import prisma from "../db/PrismaClient.js";
import { createItemSchema, updateItemSchema } from "../validators/itemValidator.js";


export const createItem=async (req,res)=>{
    try {
        const data=createItemSchema.parse(req.body);
        const item=await prisma.items.create({
            data,
        })
        res.status(201).json({message:"Item Added successfully",item})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const getItems=async (req,res)=>{
    try {
        const items=await prisma.items.findMany({
        });
        res.status(200).json({message:"Items Fetched Successfully",items})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const getItemById=async (req,res)=>{
    try {
        const id=Number(req.params.id);
        const item=await prisma.items.findUnique({
            where:{id}
        })
        if(!item){
           return res.status(404).json("Item not found")
        }
        res.status(200).json({message:"Item fetched successfully",item})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const updateItem=async (req,res)=>{
    try {
        const id =Number(req.params.id);
        const data=updateItemSchema.parse(req.body)
        const updatedItem=await prisma.items.update({

            where:{id},
            data,
        })
        res.status(200).json({message:"Updated Successfully",updatedItem})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const deleteItem=async (req,res)=>{
    try {
        const id =Number(req.params.id);
        await prisma.items.delete({
            where:{id}
        })
        res.json("Item deleted Successfully")
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}

export const getItemsByProjectId=async (req,res)=>{
    try {
        const projectId=Number(req.params.id);
        const projectItems=await prisma.items.findMany({
            where:{projectId},
            select:{
                id:true,
                name:true,
                price:true
            }
        })
        res.status(200).json({
            message:"Data Fetched Successfully",
            projectItems})
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}