import 'babel-polyfill'

import * as PromiseApi from './api-promise'

// Используем промисы!!!!!!!

// как не нужно использовать промисы, тк вложенность коллбэков остается 🔥🔥🔥🔥
// Api написан правильно, мы не правильно используем промисы
// PromiseApi.userReg()
//    .then((res) => {
//       console.log(res)

//       PromiseApi.userAuth(res.id)
//          .then((res) => {
//             console.log(res)

//             PromiseApi.userData(res.token)
//                .then((res) => {
//                   console.log(res)
//                }, (e) => {
//                   console.log(e.msg)
//             })
//          }, (e) => {
//             console.log(e.msg)
//       })
//    }, (e) => {
//       console.log(e.msg)
// })

// Правильный вариант !!!!!!!!!!
// Обязательно, успешный колбэк промиса должен возвращать следующий промис
PromiseApi.userReg()
   .then((regRes) => {
      console.log(regRes)
      return PromiseApi.userAuth(regRes.id)
   })
   .then((authRes) => {
      console.log(authRes)
      return PromiseApi.userData(authRes.token)
   })
   .then((dataRes) => {
      console.log(dataRes)
   })
   .catch((e) => {                                       // Отлавливаем ошибки в цепочке промисов
      console.log(e.msg)
   })

   console.log('it works')



   