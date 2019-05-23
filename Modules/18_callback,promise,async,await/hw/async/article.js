import * as serverApi from './db'

const all = async() => {
   const response = await serverApi.all()
   return errorResponse(response)
}

const one = async(id) => {
   const response = await serverApi.get(id)
   return errorResponse(response)
}

const remove = async(id) => {
   const response = await serverApi.remove(id)
   return errorResponse(response)
}

const errorResponse = (response) => {
   const info = JSON.parse(response)
   if (info.code == 200) {
      return info.data
   }
   throw new Error('bad data #100500')
}

export {
   all,
   one,
   remove
}