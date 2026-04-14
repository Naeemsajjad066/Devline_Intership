import prisma from "../db/PrismaClient.js";
import { createUserSchema, updateUserSchema } from "../validators/userValidator.js";


export const createUser = async (req, res) => {
    try {
        const data = createUserSchema.parse(req.body)

        const user = await prisma.user.create({
            data,
        })

        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                projects: {
                    include: {
                        Items: true
                    }
                }
            }
        });
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await prisma.user.findUnique({
            where: { id }
        })

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = updateUserSchema.parse(req.body);

        const updatedUser = await prisma.user.update({
            where: { id },
            data
        })

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }

}

export const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id)

        await prisma.user.delete({
            where: { id }
        })
        res.status(200).json("User deleted successfully")
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const getAllData=async (req,res)=>{
    try {
        const data=await prisma.user.findMany({
            select:{
                name:true,
                age:true,
                projects:{
                    select:{
                        title:true,
                        Items:{
                            select:{
                                name:true,
                                price:true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json({message:"Data fetched successfully",data})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}