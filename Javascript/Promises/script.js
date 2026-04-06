let promise=new Promise((resolve,reject)=>{
    let result=true;
    setTimeout(() => {
            if(result){
        resolve("Detected Successfully")
    }else{
        reject("Not founde")
    }
    }, 3000);

})

promise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})