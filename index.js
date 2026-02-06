//first order functions

const addOne = number => number + 1
const subractOne = number => number - 1
const tripple = number => number * 2
const addFive = number => number + 5

const functionArray = [addOne,subractOne,tripple,addFive]
var number = 71

functionArray.forEach(func => number = func(number))
console.log(number)