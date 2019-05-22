/* global Promise */

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ //

const userReg = async () => {
   return timeOutPromiseWrap(500)
      .then(()=> {
         if (randomNumb(10) > 0.2) {
            return {
               msg:  '+ registration',
               id:   idNumb(10)
            }
         } else {
            throw new Error('error in registration')
         }
      })  
}

const userAuth = (id) => {
   return timeOutPromiseWrap(500)
         .then(() => {
            if(randomNumb(5) > 0.5) {
               return {
                  msg: `User: ${id} authentication complete`,
                  token: idNumb(20)
               }
            } else {
               throw new Error('authentication error')
            }
         })
}

const userData = (id, token) => {
   return timeOutPromiseWrap(500)
         .then(() => {
            if(randomNumb(5) > 0.5) {
               return {
                  msg:     '+ data by token ' + token,
                  data: {
                     id: id,
                     name: 'some'
                  }
               }
            } else {
               throw new Error('data error')
            }
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

export {
   userReg,
   userAuth,
   userData,
}