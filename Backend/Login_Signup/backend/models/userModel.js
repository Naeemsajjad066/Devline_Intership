import prisma from "../db/prismaClient.js"

export const createUser=async (data)=>{
    return await prisma.user.create({
        data,
    })
}

export const findUserByEmail=async(email)=>{
    return await prisma.user.findUnique({
        where:{
            email
        }
    })
}


export const getAllUsers=async()=>{
    return await prisma.user.findMany()
}