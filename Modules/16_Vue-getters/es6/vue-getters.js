// default используется когда экпортируется только одно значение,
// чтобы люди не искали, что еще можно экспортировать
export default class VueGetters {
   constructor(settings) {
      this.$el = document.querySelector(settings.el)
      this.$template = settings.template
      this.$data = settings.data
      this.data = {}
    
      // чтобы можно было налету менять данные, нужны getter и setter
      for(let name in this.$data){
         Object.defineProperty(this.data, name, {
            // чтобы сохранить контекст, нужно применить стрелочные функции
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