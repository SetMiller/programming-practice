/* global Proxy */

class emailParser {
   constructor(email){
      this.email = email  
   }
   get isCorrect() {
      return /\w+@\w+\.(com|ru|org)/.test(this.email)
   }
   get name(){
      return this.isCorrect ? this.email.split('@')[0] : null
   }
   get domain(){
      return this.isCorrect ? this.email.match(/.(com|ru|org)/)[0] : null
   }
}

function watchObj(node, callback){
   return new Proxy (node, {
      set(target, name, value){
         target[name] = value
         callback(name, value)
         return true
      },
      get(target, name){
         console.log(target[name])
         if (typeof(target[name]) === 'object'){
            return watchObj(target[name], callback)
         } else if (typeof(target[name]) === 'function') {
            return target[name].bind(target)
         }
         return target[name]
      }
   })

}

export {emailParser, watchObj}