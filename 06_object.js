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
    console.log('this:', this)
    console.info('Информация про человека по имени:', this.name)
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
// person.info()

const logger = {
  keys() {
    console.log('Object Keys:', Object.keys(this))
  },

  keysAndValues() {
    Object.keys(this).forEach(key => {
      console.log(`"${key}": ${this[key]}`)
    })
  },
  
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('----- Start -----')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('--------------')
      }
    })
    if (bottom) {
      console.log('----- End -----')
    }
  }
}
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(logger)
// logger.keysAndValues.call(person)

// logger.withParams.call(person)
// logger.withParams.call(person, true)
// logger.withParams.call(person, true, true)
// logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])




