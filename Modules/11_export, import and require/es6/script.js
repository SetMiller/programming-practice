/* global require Symbol*/
// подключаем для реализации отсутствующих в старых браузерах классов
import 'babel-polyfill'

// Вариант №1
   import Timer from './timer.js'

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Фундаментальная разница между require и import
   // Части модуля подключенные с помощью require мы можем менять прямым присваиванием -> some.cnt = 5
   // Части модуля подключенные с помощью import мы менять никак не в состоянии !!!!!!!!!!!!!!!!!!!!!!
      // Uncaught TypeError: Cannot set property cnt of #<Object> which has only a getter
      // Работать можно только по средствам тех методов, которые экспортировали, доп. уровень инкапсуляции

// Вариант №2 -> работает за счет webpack ⭐️⭐️⭐️⭐️
   let some = require('./some.js')
   // let some = require('./some.js').inc                   // если необходимо взять только конкретный ключ

// Вариант №3.1
   // import other from './other.js'                        // испортируем весь модуль целиком
// Вариант №3.2
   import * as other from './other.js'                      // испортируем весь модуль целиком
   // import {cnt} from './other.js'                           // если необходимо взять только конкретный ключ
   import {gen} from './generator.js'

window.onload = function(){
   const element = document.querySelector(".timer")
   let timer = new Timer(element, 20)
   timer.start()
   // console.log(timer)
   some.cnt = 5
   // ----------------------
   // console.log(some.cnt)
   // console.log(some.inc())
   // console.log(some.inc())
   // console.log(some.inc())
   // console.log(some.cnt)
   // ---------------------
   
   // other.cnt = 0

   // console.log(other.cnt)
   // --------------------
   // console.log(other)
   // console.log(other.get())
   // console.log(other.set(8))

   // console.log(other.inc())
   // console.log(other.inc())
   // console.log(other.inc())
   // console.log(other.get())
   // ----------------------
   // console.log(other.cnt)

   // console.log(cnt)                                         // реагирует на вызовы метода при импорте как other

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️

const forPass = Symbol()

// чтобы объект сделать итерируемым через цикл for/of, ему необходимо добавить метод [Symbol.iterator]
const obj = {
   [forPass]: 1321546321,
   maxNumbToCount: 10,
   [Symbol.iterator](){
      let current = 0
      let stop = this.maxNumbToCount
      return {
         next(){
            if (current <= stop) {
               return {
                  done: false,
                  value: current++
               }
            } else {
               return {
                  done: true
               }
            }
         }
      }
   }
}

let arr = [1, 2, 3].map((x)=>x*100)

// console.log(Object.entries(obj))

for(let value of obj) {
   console.log(value)
}


// генераторы !!!!!!!!!!!!!!!!!!!!!
// генерирует итерируемый объект, который возвращает значение итератора
let someGen = gen (1, 5)

for(let value of someGen) {
   console.log(value)
}

}
