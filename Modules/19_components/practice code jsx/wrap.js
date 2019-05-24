import { MainComponent } from './main';
import ElementComponents from './elem'

export default class WrapComp extends MainComponent {
   constructor(property){
      super(property)

      // информационное поле
      this.state = {
         products: [
            {price: 1000, rest: 10, current:0},
            {price: 2000, rest: 4,  current:0},
            {price: 2000, rest: 4,  current:0}
         ]
      }
   }

   onChange(id, itemValue){
      this.state.products[id].current = itemValue
      this.render()
   }

   // переопределяем рендер функцию!!!
   render(){
      const wrapper = document.createElement('div')
      // генерируем элементы из elem и передаем в них property из this.state.products
      this.state.products.forEach((value, index) => {
         // создаем элемент и сразу вызываем его метод render() чтобы сгенерировать его
         const elem = (new ElementComponents({
            min: 0,
            max: value.rest,
            value: value.current,
            change: this.onChange.bind(this, index)
         })).render()
         // помещаем элемент в обертку
         wrapper.appendChild(elem)
      })

      wrapper.className = 'wrapper'
      return super.render(wrapper)
   }
}