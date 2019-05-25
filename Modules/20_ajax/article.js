/* global fetch*/

import 'babel-polyfill'

// Чтение постов
export const get = async(prop) => {
   const method = 'GET'
   const resp = await fetchRequest(method, prop)
   return resp
}

// Получение списка титулов
export const getList = async(prop) => {
   const method = 'GET'
   const resp = await fetchRequest(method, prop)
   return resp
}

// Добавление постов
export const add = async(prop) => {
   const method = 'POST'
   const resp = await fetchRequest(method, prop)
   return resp
}

// Удаление постов
export const remove = async(prop) => {
   const method = 'DELETE'
   const resp = await fetchRequest(method, prop)
   return resp
}

function parseResponse(data){
   if (data.code == 100500) {
      throw new Error('Error #100500')
   }
   return data
}

const fetchRequest = (method, obj) => {
   let url = 'http://localhost:3000/'
   if (obj) {
      url += '?'
      for (let prop in obj) {
         url += `${prop}=${obj[prop]}&`
      }
   }
   return fetch(`${url}`,{method: `${method}`})
                     .then(response => response.json())
                     .then(data => parseResponse(data))
}