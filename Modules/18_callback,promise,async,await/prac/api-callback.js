// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ //

const userReg = (onSuccess, onError) => {
   window.setTimeout(function(){
      if(randomNumb(5) > 0.5) {
         onSuccess({
            msg: 'registration complete',
            id: idNumb(10)
         })
      } else {
         onError({
            msg: 'registration error'
         })
      }
   }, randomNumb(500))
}

const userAuth = (id, onSuccess, onError) => {
   window.setTimeout(function(){
      if(randomNumb(5) > 0.5) {
         onSuccess({
            msg: `User: ${id} authentication complete`,
            token: idNumb(20)
         })
      } else {
         onError({
            msg: 'authentication error'
         })
      }
   }, randomNumb(500))
}

const userData = (token, onSuccess, onError) => {
   window.setTimeout(function(){
      if(randomNumb(5) > 0.5) {
         onSuccess({
            msg:     '+ data by token ' + token,
            data: {
               id: 1,
               name: 'some'
            }
         })
      } else {
         onError({
            msg: 'data error'
         })
      }
   }, randomNumb(500))
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

export {
   userReg,
   userAuth,
   userData
}