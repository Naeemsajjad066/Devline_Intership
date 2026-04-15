import { createUser, findUserByEmail } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/generateToken.js";
import prisma from "../db/prismaClient.js";

export const signup=async(req,res)=>{

    try {
        const {email,name,password}=req.body;
        const existingUser=await findUserByEmail(email)
        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            })
        }

        const hashedPassword=await bcrypt.hash(password,10)
        const user=await createUser({email,name,password:hashedPassword})
        res.status(201).json({
            message:"User signed up Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


export const SignIn=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await findUserByEmail(email);

        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
                        return res.status(400).json({
                message:"Invalid Password"
            })
        }
        const token=generateToken(user)
        res.status(200).json({
            message:"User Logged In successfully",
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


export const getUser=async(req,res)=>{
    try {
        const user=await prisma.user.findUnique({
            where:{
                id:req.user.id
            },
            select:{
                id:true,
                name:true,
                email:true
            }

        })
        res.json({user})
    } catch (error) {
       res.status(500).json({
        message:"Error Fetching User"
       }) 
    }
}