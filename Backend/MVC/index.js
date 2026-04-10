import express from 'express';
import userRoutes from './routes/userRoutes.js'

const app=express()
app.use(express.json());

app.use('/',userRoutes);


app.listen('3000',()=>{
    console.log("App is listening at 3000 port")
})