const calculator={
    add:(a,b)=>{
        return a +b
    },
    sub:(a,b)=>{
        return a - b
    },
    multiply:(a,b)=>{
        return a *b
    },
    divide:(a,b)=>{
        return a / b
    }
}
console.log(`Addition : ${calculator.add(10,10)}`)
console.log(`Difference : ${calculator.sub(10,10)}`)
console.log(`Product : ${calculator.multiply(10,10)}`)
console.log(`Quotient : ${calculator.divide(10,10)}`)