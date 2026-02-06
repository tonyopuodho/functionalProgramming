const subtract = (a,b) => a - b
const add = (a,b) => a + b

const combineFunction = func => 
    func(7,6)

combineFunction(subtract)
combineFunction(add)