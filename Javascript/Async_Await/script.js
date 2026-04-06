// //using the promises and async await to make asyncronus and synchronus function

// function getData(){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve("Data Received")
//         }, 2000);
//     })
// }

// async function run(){
//     console.log("Start")
//     let data=await getData()
//     console.log(data);
//     console.log("End")
// }

// run()



function newdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("yes received")
        }, 3000);
    })
}

async function running(){
    console.log("start of the game")
    let ndata= await newdata()
    console.log(ndata);
    setTimeout(() => {
        console.log("Game ends here")

    }, 500);

}

running()