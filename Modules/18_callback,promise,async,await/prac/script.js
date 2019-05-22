import 'babel-polyfill'
// import * as callbackApi from './api-callback'
// import * as promiseApi from './api-promise'
import * as asyncApi from './api-async'


// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ callback ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ //
// callbackApi.userReg((regResponse) => {
//    console.log(`%c${regResponse.msg}`, 'background: #bada55; color: #222')

//    callbackApi.userAuth(regResponse.id, (authResponse) => {
//       console.log(`%c${authResponse.msg}`, 'background: #bada55; color: #222')
//       // console.log(authResponse)

//       callbackApi.userData(authResponse.token, (dataResponse) => {
//          console.log(`%c${dataResponse.msg}`, 'background: #bada55; color: #222')
//          console.log(dataResponse.data)
//       }, (e) => {
//          console.log(`%c${e.msg}`, 'background: #222; color: #bada55')
//       })
//    }, (e) => {
//       console.log(`%c${e.msg}`, 'background: #222; color: #bada55')
//    })
// }, (e) => {
//    console.log(`%c${e.msg}`, 'background: #222; color: #bada55')
// })

// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ promise ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ //
// asyncApi.userReg()
//    .then((regResponse) => {
//       console.log(`%c${regResponse.msg}`, 'background: #bada55; color: #222')

//       return asyncApi.userAuth(regResponse.id)
//    })
//    .then((authResponse) => {
//       console.log(`%c${authResponse.msg}`, 'background: #bada55; color: #222')

//       return asyncApi.userData(authResponse.token)
//    })
//    .then((dataResponse) => {
//       console.log(`%c${dataResponse.msg}`, 'background: #bada55; color: #222')
//    })
//    .catch((e) => {
//       console.log(`%c${e.msg}`, 'background: #222; color: #bada55')
//    })

// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ async/await ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ //
let res = async() => {
   const regResponse = await asyncApi.userReg()
   console.log(regResponse)

   const authResponse = await asyncApi.userAuth(regResponse.id)
   console.log(authResponse)

   const dataResponse = await asyncApi.userData(regResponse.id, authResponse.token)

   return dataResponse
}

res()
   .then((dataResponse) => {
      console.log(dataResponse)
      console.log(dataResponse.data)
   }, (e) => {
      console.log(`%c${e.message}`, 'background: #222; color: #bada55')
   })
