// О С Н О В Ы   J S

// 1 ПЕРЕМЕННЫЕ

// const name = 'Yuliia'
// let lastName = 'Bondarenko' // string
// const age = 18 // number
// const isProgrammer = true // boolean

const _ = 'private'
const $ = 'some value'

// const if = 'mfmkk' // err
const withNum5 = '5'
// const 5withNum = 5 // err

// console.log(name, lastName)
// console.log(isProgrammer)

// 2 МУТИРОВАНИЕ

// console.log('Имя человека: ' + name + ' , а возраст человека: ' + age)
// console.log(age.toString())

// видео просмотра время 48:45

// const firstName = prompt('Введите фамилию')th
// alert(firstName + ' ' + name)

// 3 ОПЕРАТОРЫ
// let currentYear = 2022
// const birthYear = 1989

// const age = currentYear - birthYear
// console.log(age)

const a = 10
const b = 5

let c = 32
// c = c + a
c += a
c -= a
c *= a
c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++) // +1
// console.log(currentYear--) // -1
// console.log(c)

// 4 ТИПЫ ДАННЫХ
// const isProgrammer = true
// const name = 'Yulia'
// const age = 33
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 ПРИОРИТЕТ ОПЕРАТОРОВ

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge
// приоритетность можно посмотреть в табл mdn preority
// console.log(isFullAge)

// 6 УСЛОВНЫЕ ОПЕРАТОРЫ

// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// }
// if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// }

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = false
// if (isReady) { 
//    console.log('Все готово!')
// } else { 
//   console.log('Все не готово!')
// }

// Тернарное выражение:
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

 
// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 == num2)
// console.log(num1 === num2)

// 7 БУЛЕВАЯ ЛОГИКА

// expr1 && expr2 (логическое И) вернет true, если оба будут true

// expr1 || expr2 (оргическое ИЛИ) вернет true, если хоть один из них равен true

// !expr (логическое НЕ) возвращает false если значение можно привести к true

// 8 ФУНКЦИИ

// function calculateAge(year) {
//   return 2022 - year
// }

// const myAge = calculateAge(1989)
// console.log(myAge)

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// }

// logInfoAbout('Yuliia', 1989)
// logInfoAbout('May', 1994)

// 9 МАССИВЫ

const cars = ['Mazda', 'Audi', 'Ford']
// const cars = new Array('Mazda', 'Audi', 'Ford')
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])

// cars[0] = 'Porsche'
// console.log(cars)

// // cars[3] = 'Opel'
// cars[cars.length] = 'Opel'
// console.log(cars)


// 10 ЦИКЛЫ

// for (let i = 0; i < cars.length; i++) {
//   // console.log(i)
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 ОБЪЕКТЫ

const person = {
  firsName: 'Vladlen',
  lastName: 'Minin',
  year: 1993,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function () {
    console.log('greet from person')
  },
}

// console.log(person)
// console.log(person.firsName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// console.log(person)
// person.isProgrammer = true
// console.log(person)
// person.greet()