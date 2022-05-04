// O b j e c t
const person = {
  name: 'Vladilen',
  age: 26,
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  'complex key': 'Complex Value',
  ['key_' + (1 + 3)]: 'Computed Key',
  greet() {
    console.log('greet from person')
  },
  info() {
    console.info('Информация про человека по имени:', person.name)
  }
}
// console.log(person)
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()

// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']  //удаляет внутри обьекта

// console.log(person)


// // Деструкторизация
// // const name = person.name
// // const age = person.age
// // const languages = person.languages
// // три верхние строки равны нижней
// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)


// Цикл (перебрать обьект)
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {  // проверяет только свои свойства, без прототипа
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }
// верхний метод опасный, лучше использовать Object.keys()
// Object.keys(person).forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// })


//Контекст
person.info()

// 4:04:44