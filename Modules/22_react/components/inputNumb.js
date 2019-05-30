import React from 'react'

export default class extends React.Component{
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
      // events писать через camelCase
      return   <div className="wrapper__elements">
                  <input type="button" value="-" className="inputNumber__min" onClick={() => {this._normalizeValue(this.props.value - 1)}}/>
                  <input type="text" onChange={(e) => {this._normalizeValue(e.target.value)}} value={this.props.value}/>
                  <input type="button" value="+" className="inputNumber__max" onClick={() => {this._normalizeValue(this.props.value + 1)}}/>
               </div>
   }
}