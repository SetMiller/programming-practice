const userReg = (onSuccess, onError) => {
   window.setTimeout(()=> {
      if (random(10) > 0.2) {
         onSuccess({
            msg:  '+ registration',
            id:   1
         })
      } else {
         onError({
            msg: 'registration error'
         })
      }
   }, random(500))
}


const userAuth = (id, onSuccess, onError) => {
   window.setTimeout(()=> {
      if (random(10) > 0.2) {
         onSuccess({
            msg:     '+ auth ' + id,
            token:   randomToken()
         })
      } else {
         onError({
            msg: 'error'
         })
      }
   }, random(500))
}

const userData = (token, onSuccess, onError) => {
   window.setTimeout(()=> {
      if (random(10) > 0.2) {
         onSuccess({
            msg:     '+ data by token ' + token,
            data: {
               id: 1,
               name: 'some'
            }
         })
      } else {
         onError({
            msg: 'error'
         })
      }
   }, random(500))
}

const random = (time) => {
   return parseInt(Math.random() * time)
}

const randomToken = () => {
   return Array.from({length: 10}, () => parseInt(Math.random() * 9)).join('')
}

export {userReg, userAuth, userData, random}