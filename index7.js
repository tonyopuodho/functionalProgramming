const numbers = [10,9,8,1,3,7,6,5,4,2]

const ascending = (a,b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
}

const descending = (a,b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

const sortedNumbers = numbers.slice().sort(descending)
console.log(sortedNumbers)