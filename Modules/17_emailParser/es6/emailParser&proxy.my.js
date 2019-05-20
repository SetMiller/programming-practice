class emailParser {
   constructor(str) {
      this.string = str
      this.isCorrect = false
      this.name = ''
      this.domain = ''
      Object.defineProperty(this, 'email', {
         get: () => {
            return {
               isCorrect: this.isCorrect,
               name: this.name,
               domain: this.domain,
            }
         },
         set: (value) => {
            this.checkCorrect(value)
         }
      })
      this.checkCorrect(this.string)
   }
   checkCorrect(str){
      const match = str.match(/\w+@\w+\.(com|ru|org|net)/)
      match ? this.isCorrect = true : this.isCorrect = false
      if (this.isCorrect) {
         this.name = `The email name is: ${str.match(/\w+/)[0]}`
         this.domain = `The domain is: ${str.match(/.(com|ru|org|net)/)[0]}`
      } else {
         this.name = null
         this.domain = null
      }
   }
}

function  watchObj(obj, callback){
   const element = document.querySelector(el)

}

export {emailParser, watchObj}