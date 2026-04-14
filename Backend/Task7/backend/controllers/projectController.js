import { createProjectSchema, updateProjectSchema } from "../validators/projectValidator.js"
import prisma from "../db/PrismaClient.js";


export const createProject=async (req,res)=>{
    try {
        const data=createProjectSchema.parse(req.body);
        const project =await prisma.projects.create({
            data,
        })
        res.status(201).json(project)
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}

export const getProjects=async (req,res)=>{
    try {
        const projects=await prisma.projects.findMany();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const updateProject=async (req,res)=>{
    try {
        const id=Number(req.params.id);
        const data=updateProjectSchema.parse(req.body)
        const updatedProject=await prisma.projects.update({
            where:{id},
            data,
        })
        res.status(200).json(updatedProject)
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}

export const getProjectById=async (req,res)=>{
    try {
        const id =Number(req.params.id);
        const project= await prisma.projects.findUnique({
            where:{id}
        })
        res.status(200).json(project)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}

export const deleteProject=async (req,res)=>{
    try {
        const id=Number(req.params.id);
        await prisma.projects.delete({
            where:{id}
        })
        res.status(200).json("Project Deleted Successfully")
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const getProjectsByUserID=async (req,res)=>{
    try {
        const userId=Number(req.params.id);
        const userProjects=await prisma.projects.findMany({
            where:{userId},
            select:{
                id:true,
                title:true
            }
        })
        res.status(200).json(userProjects)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}