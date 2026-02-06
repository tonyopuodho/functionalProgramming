const Person = ({name,age,salary}) => {
    var _name = name
    var _age = age
    var _salary = salary

    return {
        getName: () => _name
    }
}

const me = Person({name:"Tony",age: 12, salary:120000})
console.log(me.getName())