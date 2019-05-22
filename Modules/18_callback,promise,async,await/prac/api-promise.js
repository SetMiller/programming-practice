/* global Promise */

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ //

const userReg = () => {
   return new Promise(function(resolve, reject){
      timeOutPromiseWrap(500)
      .then(() => {
         if(randomNumb(5) > 0.5) {
            resolve({
               msg: 'registration complete',
               id: idNumb(10)
            })
         } else {
            reject({
               msg: 'registration error'
            })
         }
      })
   })
}

const userAuth = (id) => {
   return new Promise((resolve, reject) => {
      timeOutPromiseWrap(500)
         .then(() => {
            if(randomNumb(5) > 0.5) {
               resolve({
                  msg: `User: ${id} authentication complete`,
                  token: idNumb(20)
               })
            } else {
               reject({
                  msg: 'authentication error'
               })
            }
         })
   })
      
}

const userData = (token) => {
   return new Promise((resolve, reject) => {
      timeOutPromiseWrap(500)
         .then(() => {
            if(randomNumb(5) > 0.5) {
               resolve({
                  msg:     '+ data by token ' + token,
                  data: {
                     id: 1,
                     name: 'some'
                  }
               })
            } else {
               reject({
                  msg: 'data error'
               })
            }
         })
   })
      
}


// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ Вспомогательные функции ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ //
const randomNumb = (max) => {
   return Math.floor(Math.random() * max)
}

const idNumb = (numb) => {
   return Array.from({length: numb}, () => 
      Math.floor(Math.random() * 10)
   ).join('')
}

const timeOutPromiseWrap = (time) => {
   return new Promise((resolve, reject) => {
      window.setTimeout(resolve, randomNumb(time))
   })
}

// const timeOutPromise = (time) => {
//    return new Promise(function(resolve, reject){
//       if (randomNumb(time) > time / 1.5) {
//          window.setTimeout(resolve, randomNumb(time))
//       } else {
//          reject({
//             msg: 'fault'
//          })
//       }
     
//    })
// }

export {
   userReg,
   userAuth,
   userData,
   // timeOutPromise
}