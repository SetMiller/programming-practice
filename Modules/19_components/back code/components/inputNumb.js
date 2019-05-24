import {Parody, ParodyDom} from '../parody/index'

export default class InputNumber extends Parody{
   constructor(props){
      super(props)

      this.onChange = ('change' in props) 
         ? props.change
         : () => {}
   }

   _normalizeValue(val) {
      let newValue = parseInt(val)
      if (isNaN(newValue) || newValue < this.props.min){
         newValue = this.props.min
      } else if (newValue > this.props.max) {
         newValue = this.props.max
      }
      this.onChange(newValue)
   }  

   render(){
      // переменные передаются через фигурные скобки
      return super.render(
         <div className="">
            kzkzkzkzk
            <input type="button" value="-" className="inputNumber__min" onclick={() => {this._normalizeValue(this.props.value - 1)}}/>
            <input type="text" onchange={(e) => {this._normalizeValue(e.target.value)}} value={this.props.value}/>
            <input type="button" value="+" className="inputNumber__max" onclick={() => {this._normalizeValue(this.props.value + 1)}}/>
         </div>
      )


      // const min = createNode('input', {
      //    type: 'button',
      //    className: 'inputNumber__min',
      //    value: '-',
      //    onclick: () => {
      //       this._normalizeValue(this.props.value - 1)
      //    }
      // })

      // const input = document.createElement('input')
      // input.className = 'inputNumber__value'
      // input.setAttribute('type', 'text')
      // input.value = this.props.value
      // input.addEventListener('change', (e) => {
      //    this._normalizeValue(e.target.value)
      // })

      // // const min = document.createElement('input')
      // // min.setAttribute('type', 'button')
      // // min.value = '-'
      // // min.addEventListener('click', () => {
      // //    this._normalizeValue(this.props.value - 1)
      // // })

      // const max = document.createElement('input')
      // max.setAttribute('type', 'button')
      // max.value = '+'
      // max.addEventListener('click', () => {
      //    this._normalizeValue(this.props.value + 1)
      // })

      // const wrap = document.createElement('div')
      // wrap.appendChild(min)
      // wrap.appendChild(input)
      // wrap.appendChild(max)

      // return super.render(wrap)
   }
}