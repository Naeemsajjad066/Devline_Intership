//Used array method map

const arr=[1,2,3,4,5,6]
const results=arr.map(x=>x*3)
console.log(results)


//Filter method used

const array=[2,3,4,6,7,8,5,6,4,65,56,34,23,11,22,98];

const even=array.filter(x=>x%2==0)
console.log(even)

//Reduce method

const arr1=[1,2,3,4,5,6]

const newArr=arr1.reduce((acc,curr)=>acc*curr,1)

console.log(newArr)

//Find Method
const arrr = [5, 10, 15];

const result = arrr.find(x => x > 8);
console.log(result); // 10


//includes method
const ar = [1, 2, 3];

console.log(ar.includes(2)); // true
console.log(ar.includes(5)); // false

