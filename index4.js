//spread operator

const person = {
    name:"John smith",
    year: 12
}

const jobTitle = {
    job: "Software developer",
    salary: 120000
}

const personDetails = {
    ...person,
    ...jobTitle
}

const update = {
    ...person,
    name: "John Doe"
}


const numbers = [1,2,3,4,5]
const newNumbers = [
    ...numbers,
    6,7,8,9,10
]

console.log(newNumbers)
