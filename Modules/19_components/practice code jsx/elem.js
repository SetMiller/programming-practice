import { MainComponent, MainComponentDom } from "./main";

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
      return super.render(
         <div className="wrapper-element">
            <input type="button" value="-" className="inputNumber__min" onclick={() => {this._normalizeValue(this.main_property.value - 1)}}/>
            <input type="text" onchange={(e) => {this._normalizeValue(e.target.value)}} value={this.main_property.value}/>
            <input type="button" value="+" className="inputNumber__max" onclick={() => {this._normalizeValue(this.main_property.value + 1)}}/>
         </div>
      )
   }
}