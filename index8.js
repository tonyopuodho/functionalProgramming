const numbers = [1,2,3,4,56,76]

const sum = numbers.reduce((acc,x) => {
    return acc + x
},0)

console.log(sum)