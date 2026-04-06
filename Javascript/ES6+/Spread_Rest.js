//Spread in the arry

let arr1=[1,2,3]
let arr2=[...arr1,4,5,6]
console.log(...arr1)

console.log(arr2)

let merged=[...arr1,...arr2] //merging array
console.log(merged);

//spread in objects

let obj1={
    name:"naeem",
    city:"hasilpur",
    age:12
}

let obj2={
    ...obj1,
    ph:203,
    uni:"COMSATS",
}

console.log(obj2)



//rest means take the values you want and pack all the others

let restarr=[1,2,3,4,5,6]
let [one,two,...rest]=restarr;
console.log(one,two,rest)