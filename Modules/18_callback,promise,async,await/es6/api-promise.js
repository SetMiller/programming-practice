/* global Promise */

import mathOp from './mathOp'

// внутри промиса могут быть try/catch
// однако чтобы обработать исключения, все нужно сводить к reject !!!!!!
const userReg = () => {
   return new Promise(function(resolve, reject){
      TimeoutPromise(random(500))
      .then(()=> {
         // try {
         //    mathOp(1, parseInt(Math.random() * 2), '/')
         // } 
         // catch(e) {
         //    reject({msg: e.message + ' line 11'})              // ловим исключение catch промиса
         // }
         if (random(10) > 0.2) {
            resolve({
               msg:  '+ registration',
               id:   1
            })
         } else {
            reject({
               msg: 'error in registration'
            })
         }
      })  
   })
}

const userAuth = (id) => {
   return new Promise(function(resolve, reject){
      window.setTimeout(()=> {
         if (random(10) > 0.2) {
            resolve({
               msg:     '+ auth ' + id,
               token:   randomToken()
            })
         } else {
            reject({
               msg: 'error in Auth'
            })
         }
      }, random(500))
   })
}

const userData = (token) => {
   return new Promise(function(resolve, reject){
      window.setTimeout(()=> {
         if (random(10) > 0.2) {
            resolve({
               msg:     '+ data by token ' + token,
               data: {
                  id: 1,
                  name: 'some'
               }
            })
         } else {
            reject({
               msg: 'error in Data'
            })
         }
      }, random(500))
   })
}

const random = (time) => {
   return parseInt(Math.random() * time)
}

const randomToken = () => {
   return Array.from({length: 10}, () => parseInt(Math.random() * 9)).join('')
}

// Обертка из промиса с таймаутом
const TimeoutPromise = (time) => {
   return new Promise(function(resolve, rej){
      window.setTimeout(resolve, time)
   })
}

export {userReg, userAuth, userData}