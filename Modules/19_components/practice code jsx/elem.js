import { MainComponent } from "./main";

export default class ElementComponents extends MainComponent {
   constructor(property){
      super(property)
      this.onChange = ('change' in property)
                           ? this.main_property.change
                           : () => {}
   }

   // проверяем чтобы значение было правильным и в диапазоне 
   // количества имеющихся элементов
   _normalizeValue(value){
      let newValue = parseInt(value)
      if (isNaN(newValue) || newValue < this.main_property.min){
         newValue = this.main_property.min
      } else if (newValue > this.main_property.max) {
         newValue = this.main_property.max
      }
      this.onChange(newValue)
   }
   // переопределяем рендер функцию!!!
   render(){
      const input = document.createElement('input')
      input.className = 'inputNumber__value'
      input.setAttribute = ('type', 'text')
     
      input.value = this.main_property.value
      input.onchange = (e) => {
         this._normalizeValue(e.target.value)
      }

      const buttonP = document.createElement('input')
      const buttonM = document.createElement('input')
      buttonP.value = '+'
      buttonM.value = '-'
      buttonP.setAttribute('type', 'button')
      buttonM.setAttribute('type', 'button')
      buttonP.onclick = () => {
         this._normalizeValue(this.main_property.value + 1)
      }
      buttonM.onclick = () => {
         this._normalizeValue(this.main_property.value - 1)
      }

      const wrapper = document.createElement('div')
      wrapper.className = 'element-wrapper'
      wrapper.appendChild(buttonM)
      wrapper.appendChild(input)
      wrapper.appendChild(buttonP)

      return super.render(wrapper)
   }
}