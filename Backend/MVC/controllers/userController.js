import { readData,writeData } from "../models/userModel.js";



export const getUsers=(req,res)=>{
    const users=readData()
    res.json(users)
}


export const addUser=(req,res)=>{
    const users=readData();
    const newUser={
        id:Date.now(),
        ...req.body,
    }
    users.push(newUser);
    writeData(users)
    res.status(201).json({Message:"User added successfully",newUser})
}


export const updateUser=(req,res)=>{
    const users=readData();
    const index=users.findIndex(u=>u.id==req.params.id)
    users[index]={
        ...users[index],
        ...req.body,
    }

    writeData(users);
    res.status(201).json({message:"User Updated Successfully",user:users[index]})
}

export const getUser=(req,res)=>{
    const users=readData();
    const user=users.find(u=>u.id==req.params.id)

    if(!user){
        res.status(404).json({message:"User not found "})
    }

    res.status(201).json(user)
}

export const deleteUser=(req,res)=>{
    const users=readData();
    const filteredUsers=users.filter(u=>u.id!=req.params.id);

    if(users.length===filteredUsers.length){
        res.status(404).json({message:"User not found"})
    }

    writeData(filteredUsers);
    res.status(201).json({
        message:"User deleted successfully"
    })
}