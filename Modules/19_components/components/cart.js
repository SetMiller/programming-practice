import {Parody, ParodyDom} from '../parody/index'
import InputNumber from '../components/inputNumb'

export default class Cart extends Parody{
   constructor(props){
      super(props)

      this.state = {
         products: [
            {price: 1000, rest: 10, current:0},
            {price: 2000, rest: 4,  current:0},
            {price: 2000, rest: 4,  current:0}
         ]
      }
   }
   // передаем правильный контекст (либо onChange() => {})
   onChange(id, val){
      // console.log(val + ' in parent')
      // console.log(id)
      this.state.products[id].current = val
      this.render()
      // console.log(this.state)
   }
   render(){
      const total = this.state.products.reduce((total, item) => {
         return total + item.price * item.current
      }, 0)

      this.state.products.forEach((item, i) => {
         return super.render(
            <div>
               <InputNumber min={0} max={item.rest} value={item.current} change={this.onChange.bind(this, i)}/>
            </div>
         )
      })

      // console.log('elem')
      // console.log(elem)

      // return super.render(
      //       <div>
      //          <hr/>
      //          {total}
      //       </div>
      // )
      

      // let div = document.createElement('div')
      // this.state.products.forEach((item, i) => {
      //    let inp = (new InputNumber({
      //       min: 0,
      //       max: item.rest,
      //       value: item.current,
      //       // фиксируем номер элемента и контекст для строки №20
      //       change: this.onChange.bind(this, i)
      //    })).render()
      //    div.appendChild(inp)
      // })

      // let total = document.createElement('div')
      // console.log(this.state.products)
      // total.innerHTML = this.state.products.reduce((total, item) => {
      //    return total + item.price * item.current
      // }, 0)
      // div.appendChild(total)

      // return super.render(div)
   }
}