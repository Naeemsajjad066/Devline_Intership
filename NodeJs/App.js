// import express from 'express';

// const app = express();


// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });


// app.use(express.json());


// function auth(req, res, next) {
//   const isLoggedIn = false;

//   if (!isLoggedIn) {
//     return res.status(401).send("Access Denied");
//   }

//   next();
// }


// app.get('/', (req, res) => {
//   res.send("Welcome to Home Page");
// });

// app.get('/admin', auth, (req, res) => {
//   res.send("Welcome to Admin Panel");
// });

// app.post('/data', (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "Data received successfully",
//     data: req.body
//   });
// });


// app.get('/error', (req, res, next) => {
//   next(new Error("Test error"));
// });


// app.use((err, req, res) => {
//   console.error(err.message);

//   res.status(500).json({
//     success: false,
//     message: err.message
//   });
// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


import express from 'express'

const app=express()
app.use(express.json())


let users=[]
app.get('/users',(req,res)=>{
    res.send(users)
})

app.post("/users",(req,res)=>{
    const user=req.body;
    users.push(user)
    res.send({message:"User added successfully",user})
})
app.put("/users/:id",(req,res)=>{
    const id=req.params.id;
    users[id]=req.body;
    res.send({message:"User updated successfully"})
})

app.delete("/users/:id",(req,res)=>{
    const id=req.params.id
    users.splice(id,1);
    res.send({message:"user deleted successfully"})
})

// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.url}`)
//     next()
// })

// app.get('/',(req,res)=>{
//     res.send("Hy naeem")
// })

 
// function auth((req,res,next)=>{
    
// })

// app.post('/data',(req,res)=>{
//     console.log(req.body)
//     res.send({
//         message:"Data Received",
//         data:req.body,
//     })
// })


app.listen('3000',()=>{
    console.log("app is listening at port 3000")
})