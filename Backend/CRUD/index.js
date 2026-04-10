import express from 'express'
import itemRoutes from './routes/itemRoutes.js'

const app=express();
app.use(express.json());
const PORT=3000

app.use('/',itemRoutes)
app.get('/',(req,res)=>{
    res.send("welcome to home")
})

app.listen(PORT,()=>{
    console.log(`App is running on  http://localhost:${PORT}`)
})