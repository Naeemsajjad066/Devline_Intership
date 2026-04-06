function outer(){
    let x=0
    function inner(){
        x++
        return x
    }
    return inner
}

const counter=outer();
counter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
