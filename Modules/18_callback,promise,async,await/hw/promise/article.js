/* global Promise, */

import 'babel-polyfill'

import * as serverApi from './db'

const all = () => {
   return serverApi.all()
            .then((allResponse) => {
               return serverResponse(allResponse)
            })
}

const one = (id) => {
   return serverApi.get(id)
            .then((getResponse) => {
               return serverResponse(getResponse)
            })
}

const remove = (id) => {
   return serverApi.remove(id)
         .then((removeResponse) => {
            return serverResponse(removeResponse)
         })
}

const serverResponse = (response) => {
   try {
      const info = JSON.parse(response)
      if (info.code == 200) {
         return info
      }
   } catch (error) {
      throw new Error('bad JSON ERROR')
   }
   throw new Error('bad data #100500')
}

export {
   all,
   one,
   remove
}