/* global Proxy */

// default используется когда экпортируется только одно значение,
// чтобы люди не искали, что еще можно экспортировать
export default class VueGetters {
   constructor(settings) {
      this.$el = document.querySelector(settings.el)
      this.$template = settings.template
      this.$data = settings.data
      this.data = new Proxy(this.$data, {
         get: (target, name) => {
            return target[name]
         },
         set: (target, name, value) => {
            target[name] = value
            this.render()
            return true
         }
      })
      this.render()
   }
   render(){
      // ищем внутри фигурных скобок любые данные и заменяем их
      // match -> все что внутри /____/g
      // name -> все что внутри (___)
      // чтобы пофиксить жадность, нужно добавить "?" 
      const html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
         let key = name.trim()
         return this.$data[key]
      })

      this.$el.innerHTML = html
   }
}