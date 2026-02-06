const devide = (x,y) => x / y
const secondArgument = func => 
    (...args) => {
        if (args[1] === 0) {
            console.log("Error number cannot be zero")
            return null
        }
        return func(...args)        
    }

// passing functions as an argument

const NameLength = (name) => name.length
const checkNameLength = func =>
     (...arg) => {
        if (arg.length > 10) {
            console.log("The name is too short")
            return null
        }

        return func(...arg)
     }

const nameL = checkNameLength(NameLength)
console.log(nameL("Tony"))