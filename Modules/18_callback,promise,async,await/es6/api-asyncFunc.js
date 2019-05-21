/* global Promise */

const userReg = async () => {
   return TimeoutPromise(random(500))
      .then(()=> {
         if (random(10) > 0.2) {
            return {
               msg:  '+ registration',
               id:   1
            }
         } else {
            throw new Error('error in registration')
         }
      })  
}

const userAuth = async (id) => {
   return TimeoutPromise(random(500))
      .then(()=> {
         if (random(10) > 0.2) {
            return {
               msg:     '+ auth ' + id,
               token:   randomToken()
            }
         } else {
            throw new Error ('error in Auth')
         }
      })
}

const userData = async (token) => {
   return TimeoutPromise(random(500))
      .then(()=> {
         if (random(10) > 0.2) {
            return {
               msg:     '+ data by token ' + token,
               data: {
                  id: 1,
                  name: 'some'
               }
            }
         } else {
            throw new Error ('error in Data')
         }
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