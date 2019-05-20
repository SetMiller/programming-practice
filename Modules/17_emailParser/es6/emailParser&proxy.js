import { get } from "http";

/* global Proxy*/

class emailParser {
   constructor(email) {
      this.email = email
   }   
   get isCorrect(){
      return /\w+@\w+\.(com|ru|org)/.test(this.email)
   } 
   get name(){
      return this.isCorrect ? this.email.split('@')[0] : null
   }
   get domain(){
      return this.isCorrect ? this.email.match(/.(com|ru|org|net)/)[0] : null
   }
}

function watchObj(node, callback){
   return new Proxy(node, {
      set(target, name, value){
         target[name] = value
         callback(name, value)
         return true                                  //согласие с изменениями
      },
      get(target, name){
         switch (typeof target[name]){
            case 'object':
               return watchObj(target[name], callback)
            case 'function':
               return target[name].bind(target)
            default:
               return target[name]
         }
         
      }
   })
}

export {emailParser, watchObj}