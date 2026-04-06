fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(data=>{
    console.log(data)

    console.log(data[0].title)
})
.catch(error=>console.log(error))

