import { MainComponent, MainComponentDom } from './main';
import ElementComponents from './elem'

export default class WrapComp extends MainComponent {
   constructor(property){
      super(property)

      // информационное поле
      this.initState({
         products: [
            {price: 1000, rest: 10, current:0},
            {price: 2000, rest: 4,  current:0},
            {price: 2000, rest: 4,  current:0}
         ]
      })
   }

   onChange(id, itemValue){
      this.state.products[id].current = itemValue
      this.render()
   }

   onAdd(){
      // const products = [...this.state.products, {
      //    price: 500, 
      //    rest: 20,  
      //    current:0
      // }]

      // this.setState({
      //    products
      // })
      console.log(this.state)
      this.state.products.push({
         price: 500, 
         rest: 20,  
         current:0
      })

   }

   onRemove(index){
      // const products = [...this.state.products]
      // products.splice(index, 1)
      
      // this.setState({
      //    products
      // })
      this.state.products.splice(index, 1)
   }

   // переопределяем рендер функцию!!!
   render(){

      const summ = document.createElement('div')
      summ.innerHTML = this.state.products.reduce((total, elem) => {
         return total + elem.price * elem.current
      }, 0)

      const wrapper = this.state.products.map((item, index) => {
         // возвращает узел DOM
         return   <div>
                     {item.price}
                     <ElementComponents min={0} max={item.rest} value={item.current} change={this.onChange.bind(this, index)}/>
                     <input type="button" value="X" onclick={this.onRemove.bind(this, index)}/>
                  </div>
      })
      // console.log(wrapper)
      return super.render(
         <div className="wrapper">
            <input type="button" value="add" onclick={this.onAdd.bind(this)}/>
            {wrapper}
            <hr/>
            {summ}
         </div>
      )

      
      
   }
}