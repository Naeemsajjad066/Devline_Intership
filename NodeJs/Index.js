// import express from 'express'
// import fs from 'fs'
// const app=express()
// const File='Data.json'
// app.use(express.json())

// const readData=()=>{
//     const data=fs.readFileSync(File,"utf-8");
//     return JSON.parse(data)
// }

// const writeData=(data)=>{
//     fs.writeFileSync(File,JSON.stringify(data,null,2))
// }

// app.get('/users',(req,res)=>{
//     const users=readData()
//     res.json(users)
// })

// app.post('/users',(req,res)=>{
//     const users=readData();

//     const newUser={
//         id:Date.now(),
//         ...req.body
//     }

//     users.push(newUser);
//     writeData(users)
//     res.status(201).json(newUser)
// })

// app.listen('3000',()=>{
//     console.log("app is listening at 3000 port")
// })


import express from 'express'
import fs, { write } from 'fs'

const app=express()
const File='Data.json'

app.use(express.json())

const readData=()=>{
const data=fs.readFileSync(File,"utf-8");
return JSON.parse(data)
}

const writeData=(data)=>{
fs.writeFileSync(File,JSON.stringify(data,null,2))
    
}

app.get('/users',(req,res)=>{
    const users=readData();
    res.json(users)
})

app.post('/users',(req,res)=>{
    const users=readData();
    const newUser={
        id:Date.now(),
        ...req.body,
    }
    users.push(newUser)
    writeData(users);
    res.status(201).json(newUser)
})

app.get("/users/:id",(req,res)=>{
    const users=readData();
    const id =parseInt(req.params.id)
    const user=users.find(u=>u.id===id)
    if(!user){
        res.status(404).json({message:"User not found"})
    }else{
        res.json(user)
    }
})

app.put("/users/:id",(req,res)=>{
    const users=readData();
    const id =parseInt(req.params.id)
    const index=users.findIndex(u=>u.id===id);
    if(index<0){
        res.status(404).json({message:"User not found"})
    }
        users[index]={
            ...users[index],
            ...req.body,
        }
        writeData(users);
        res.json({message:"User updated",
            user:users[index]
        })
})


app.delete('/users/:id',(req,res)=>{
    const users=readData();
    const filteredUsers=users.filter(u=>u.id!=req.params.id);
    if(users.length===filteredUsers.length){
        res.status(404).json({message:"user Not found"})
    }
    writeData(filteredUsers);
    res.json({message:"User deleted successfully"},)
})



app.listen('3000',()=>{
    console.log("app is listening at 3000 port")
})