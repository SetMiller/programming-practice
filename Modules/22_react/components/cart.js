import React from 'react'
import InputNumber from '../components/inputNumb'
// import Modal from './modal'               // вместо нашего окна подключаем material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, DialogActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export default class extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         products: [
            {price: 1000, rest: 10, current:0},
            {price: 2000, rest: 5,  current:0},
            {price: 2000, rest: 5,  current:0}
         ],
         modalOpen: false
      }
   }

   onOpen(){
      this.setState({modalOpen: true})
   }

   onClose(){
      this.setState({modalOpen: false})
   }

   onChange(id, val){
      // console.log(id)
      // console.log(val)
      const products = [...this.state.products]
      const product = Object.assign({}, this.state.products[id])
      product.current = val
      products[id] = product
      this.setState({products})
   }
   render(){
      const summ = this.state.products.reduce((total, elem) => {
         return total + elem.price * elem.current
      }, 0)

      const wrapper = this.state.products.map((item, index) => {
         // возвращает узел DOM
         // обязательно присвоить ключ, сожно взять либо номер статьи, либо по номеру в массиве
         return   <InputNumber key={index} min={0} max={item.rest} 
                           // value={item.current} change={this.onChange.bind(this, index)}/>
                           value={item.current} change={(val) => {this.onChange(index, val)}}/>
      })
      return   <div className="wrapper">
                  {/* onClose -> отслеживаем клик по оверлею(област вокруг элемента)  */}
                  <Dialog title="" open={this.state.modalOpen} onClose={this.onClose.bind(this)}>
                     <DialogTitle >Добавьте побольше заказов</DialogTitle>
                        <DialogContent>
                           <p>Список товаров</p>
                           {wrapper}
                        </DialogContent>
                        <DialogActions>
                           <Button color="primary" onClick={this.onClose.bind(this)}>
                              Далее
                           </Button>
                        </DialogActions>
                  </Dialog>
                  <p>Сумма заказа</p>
                  {summ}
                  <Button color="secondary" onClick={this.onOpen.bind(this)}>
                     Пересчитать
                  </Button>
               </div>
   }
}