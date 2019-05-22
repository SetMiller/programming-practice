import 'babel-polyfill'

import * as asyncApi from './api-asyncFunc'
import {addNote} from './notes'

const userProccess = async() => {
   const regRes = await asyncApi.userReg()
   console.log(regRes)
   const authRes = await asyncApi.userAuth(regRes.id)
   console.log(authRes)
   const dataRes = await asyncApi.userData(authRes.token)
   console.log(dataRes)
   return dataRes.data
}

userProccess().then((data) => {
   console.log(data)
}, (e) => {
   console.log(e.message)
})
console.log('it works')



   