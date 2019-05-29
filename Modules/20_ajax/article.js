/* global fetch FormData*/

import 'babel-polyfill'

// Чтение постов
export const get = async(prop) => {
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
      throw new Error('Property is empty')
   }
   return data
}

function urlForFetch(url, obj){
   let urlForFetch = url
   urlForFetch += '?'
   for (let prop in obj) {
      urlForFetch += `${prop}=${obj[prop]}&`
   }
   return urlForFetch
}

const fetchRequest = (method, obj) => {
   let url = 'http://localhost:3000/'
   let urlResp = urlForFetch(url, obj)
   let response
   switch (method) {
      case 'GET':
         response = fetch(urlResp,{method})      
         break;
      case 'POST':
         response = fetch(url,{method, 
            headers:{
               'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(obj)
         })
         break;
      case 'DELETE':
         response = fetch(urlResp,{method}) 
         break;
      default:
         break;
   }
   
   return response
            .then(response => response.json())
            .then(data => parseResponse(data))
}