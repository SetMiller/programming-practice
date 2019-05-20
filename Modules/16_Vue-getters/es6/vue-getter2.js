export default class Vue2 {
   constructor(settings){
      this.$el = settings.el
      this.$data = settings.data
      this.$template = settings.template
      this.data = {}
      // console.log(this.data)
      for (let name in this.$data) {
         // console.log(name)
         // this.data пустышка, чтобы работал метод для свойств объекта
         Object.defineProperty(this.data, name, {
            get: () => {
               return this.$data[name]
            },
            set: (value) => {
               this.$data[name] = value
               this.render()
            }
         })
      }
      this.render()
   }
   render(){
      const html = document.querySelector(this.$el)
      const inner = this.$template.replace(/{{(.*?)}}/g,(match, name) => {
         let key = name.trim()
         // console.log(this.$data)
         return this.$data[key]
      })
      html.innerHTML = inner
   }
}