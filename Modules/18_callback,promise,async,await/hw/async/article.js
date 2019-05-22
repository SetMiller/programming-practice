/* global Promise, */

import 'babel-polyfill'

import * as serverApi from './db'

const all = async() => {
   return serverApi.all()
         .then((allResponse) => {
            const info = JSON.parse(allResponse)
            if (info.code == 200) {
               return info
            }
         })
         .catch((e) => {
            throw new Error(e)
         })
}

const one = async(id) => {
   return serverApi.get(id)
         .then((getResponse) => {
            const info = JSON.parse(getResponse)
            if (info.code == 200) {
               return info
            }
         })
         .catch((e) => {
            throw new Error(e)
         })
}

const remove = (id) => {
   return serverApi.remove(id)
         .then((removeResponse) => {
            const info = JSON.parse(removeResponse)
            return info
         })
         .catch((e) => {
            throw new Error(e)
         })
}


export {
   all,
   one,
   remove
}