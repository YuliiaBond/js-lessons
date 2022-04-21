// F U N C T I O N


// // 1 Function Declaration
// function greet(name) {
//   console.log('Hello,', name)
// }

// // 2 Function Expression
// const greet2 = function greet2(name) {
//   console.log('Hello,', name)
// }

// greet('Yulia')
// greet2('Kostia')

// Function Declaration можно сначала вызвать, а потом создать
// а Function Expression - нет

// console.log(typeof greet)
// console.dir(greet)

// // 3 Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// // 4 Cтрелочные функции
// function greet(name) {
//   console.log('Hello,', name)
// }

// const arrow = (name) => {
//   console.log('Hello,', name)
// }
//  const arrow2 = name => console.log('Hello,', name)

// arrow('Vlad')
// arrow2('Kate')

// const pow2 = num => num ** 2
// // const pow2 = num => {
// //   return num ** 2
// // }

// console.log(pow2(5))

// // 5 Параметры по умолчанию
// // const sum = (a, b) => a + b
// // const sum = (a, b = 1) => a + b
// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41))
// console.log(sum())

// function sumAll(...all) {
//   // console.log(all)
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// // 6 Замыкание
// function creatMember(name) {
//   return function (lastName) {
//     console.log(name + ' ' + lastName)
//   }
// }

// const logWithLastName = creatMember('Yuliia')
// console.log(logWithLastName('Bond'))
// console.log(logWithLastName('Bondarenko'))
