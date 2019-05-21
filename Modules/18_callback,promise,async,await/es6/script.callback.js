/* global Promise*/
import 'babel-polyfill'

import mathOp from './mathOp'
import * as badApi from './api-callback'

// // так как деление на 0 вызовет критическую ошибку, которая приостановит выполнение всего кода
// // то желательно выполнять код в try/catch, чтобы можно было перехватить ошибку и продолжить 
// // выполнение кода

// const mathRun = () => {
//    try {
//       const oper = mathOp(1, 2, '+') + mathOp(1, parseInt(Math.random() * 2), '/')
//       console.log(oper)
//       return oper
//    }
//    catch(e) {
//       console.log(e.message)
//       console.log(e.stack)
//    }
//    // отрабатывает независимо от результатов блока try 
//    finally {
//       console.log('math done')
//    }
//    console.log('MESSAGE !!!')
// }
// mathRun()

// // для исключения на данном уровне не удается обработать, то его можно пробросить дальше
// // throw e
// try {
//    // console.log('hello world')
// } catch (error) {
//    throw e
// }


// вызываем функцию и передаем 2 callback, один на успешное выполнение, один на ошибочное
// минусы, не реализовать механизм исключений с помощью try/catch
// повторяющийся код, большая вложенность callback вызовов
badApi.userReg((response) => {
   console.log(response)

   badApi.userAuth(response.id, (res) => {
      console.log(res)

      badApi.userData(res.token, (res) => {
         console.log(res)
         console.log(res.data)
      }, (e) => {
         console.log(e.msg)
      })
   }, (e) => {
      console.log(e.msg)
   })
}, (e) => {
   console.log(e.msg)
})

// Promise -> принимает 2 callback (resolve, reject)
// 3 состояния (1. pending(ожидание), 2. reject(отклонение), 3.resolve(выполнение действия))
// let some = new Promise(function(resolve, reject){
//    window.setTimeout(() => {
//       const numb = badApi.random(2)
//       // то что передается в resolve и reject потом попадает в then
//       numb > 0.5 ? resolve(numb) : reject(`${numb} less than 0.5`)
//    }, badApi.random(500))
// })
// console.log(some)
// // когда код завершиться, подписываемся на 2 ситуации
// some.then((res) => {
//    console.log('it works ' + res)
// }, (err) => {
//    console.log(err)
// })
