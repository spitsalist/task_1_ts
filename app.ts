//      1

const gretUser =(name: string): string => {
    return `Hello ${name}`
}
console.log(gretUser('Bob'))

//      2

interface Person{
    name: string,
    age: number,
    city: string
}
const person: Person = {
    name: 'Bob',
    age: 22,
    city: 'New York'
}
const printPersonInfo=(person: Person): string  => {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
}
console.log(printPersonInfo(person))

//      3

const squareNumber =(a: number):number =>{
    return a ** 2
}
console.log(squareNumber(2))

//      4

const isEven =(a: number): boolean =>{
    if(a % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(isEven(2))

//      5

interface Student {
    name: string,
    grade: number
}

const student: Student = {
    name: 'bob',
    grade: 3
}
const printStudentInfo=(student: Student): string => {
    return `Name: ${student.name}, Grade: ${student.grade}`
}

console.log(printStudentInfo(student))

//      6

const logMessage =(a: string):void => {
console.log(a)
}
logMessage('abc')