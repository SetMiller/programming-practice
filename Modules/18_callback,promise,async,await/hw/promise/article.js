/* global Promise, */

import 'babel-polyfill'

import * as serverApi from './db'

const all = () => {
   return new Promise((resolve, reject) => {
      serverApi.all()
         .then((allResponse) => {
            const info = JSON.parse(allResponse)
            if (info.code == 200) {
               resolve(info)
            }
         })
         .catch((e) => {
            if (typeof(e) === 'string') {
               try{
                  const error = JSON.parse(e)
                  reject(error.status)
               }
               catch {
                  reject(e)
               }
            }
               reject(e)
         })
   })
}

const one = (id) => {
   return new Promise((resolve, reject) => {
      serverApi.get(id)
         .then((getResponse) => {
            const info = JSON.parse(getResponse)
            if (info.code == 200) {
               resolve(info)
            }
         })
         .catch((e) => {
            if (typeof(e) === 'string') {
               try{
                  const error = JSON.parse(e)
                  reject(error.status)
               }
               catch {
                  reject(e)
               }
            }
               reject(e)
         })
   })
}

const remove = (id) => {
   return new Promise((resolve, reject) => {
      serverApi.remove(id)
         .then((removeResponse) => {
            const info = JSON.parse(removeResponse)
            resolve(info)
         })
         .catch((e) => {
            if (typeof(e) === 'string') {
               try{
                  const error = JSON.parse(e)
                  reject(error.status)
               }
               catch {
                  reject(e)
               }
            }
               reject(e)
         })
   })
}


export {
   all,
   one,
   remove
}