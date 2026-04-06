//normal function
function normal(a,b){
    return a+b
}

let n=normal(4,6)
console.log(n)

//arrow function

let add=(f,g)=>{
    return f+g
}

console.log(add)
console.log(add(7,8))

//single argument and no return and {}
let mul=x=>x*5

console.log(mul(7))