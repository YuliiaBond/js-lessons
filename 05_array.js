// A R R A Y //
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const people = [
  { name: 'Vladilen', budget: 4200 },
  { name: 'Elena', budget: 3500 },
  { name: 'Victoria', budget: 1700 }
]
const fib = [1, 1, 2, 3, 5, 8, 13]
console.log(cars)

// //добавить в конец новый элемент
// cars.push('Рено')
// console.log(cars)

// //добавить в начало новый элемент
// cars.unshift('Волга')
// console.log(cars)

// //удалить первый элемент и/или с ним поработать
// const firstItem = cars.shift()
// console.log(firstItem)
// console.log(cars)
 
// //удалить последний элемент и/или с ним поработать
// const lastItem = cars.pop()
// console.log(lastItem)
// console.log(cars)

// // возвращает массив с конца
// console.log(cars.reverse())

// // найти индекс элемента в массиве и изменить его
// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)
// // indexOf используется для примитивов, для сложных используется findIndex
// const index = people.findIndex(function (person) {
//   // console.log(person)
//   return person.budget === 3500
// })
// console.log(people[index])
// чтобы индекс не искать, можно сразу значение через find
// const person = people.find(function (person) {
//   return person.budget === 4200
// })
// // упрощенный вариант
// const person = people.find(person => person.budget === 4200)
// console.log(person) 

// // так же можно перебрать массив через цикл
// let findPerson
// for (const person of people) {
//   console.log(person)
//   if (person.budget === 3500) {
//     findPerson = person
//   }
// }
// console.log(findPerson)

// // узнать есть ли такой элемент в массиве
// console.log(cars.includes('Мазда'))

// // перебрать/преобразовать массив
// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
// console.log(upperCaseCars) // map возвращает новый массив 
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// console.log(pow2Fib)
// // фильтр массива
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// обьеденить все значения в массив
// Просуммировать бюджет людей, который больше 2000
const allBudget = people
  .filter(person => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)
console.log(allBudget)


// ЗАДАЧА 1
// Перевернуть строчку
const text = 'Привет! Мы изучаем JavaScript'
const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
// split - делет строчку (по символу что в скобках) и возращает массив
// reverse - переворачивает
// join - делает с массива строку (в мкобках казываем через что соеденяем)