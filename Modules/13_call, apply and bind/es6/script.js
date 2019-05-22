/* global */
import 'babel-polyfill'

import Timer from './timer.js'

const element = document.querySelector('.timer')
const timer = new Timer (element, 200)
timer.start()

// контекст -----------------------------------------------------------------
   const some = {
      i: 1,
      double(){
         return this.i * this.i;
      }
   }

   console.log(some.double())

// --------------------------------------------------------------------------
   const other = {
      i: 1,
   }

   function double(n, m){
      return this.i * this.i * n * m;
   }

// double(3, 2) - this -> some ----------------------------------------------
   console.log(double.call(other, 2, 3))
   console.log(double.apply(other, [2, 3]))

// function.bind(context) -> new_function context = const --------------------
   // суть bind в том, что он намертво прикрепляет контекст вызова к указанной функции
   const doubleBind = double.bind(some)
   console.log(doubleBind)

// аналог стрелочной функции
   const another = (m, n) => {return n + m}
   console.log(another(2, 3))

   const another2 = (function(m,n){return m + n}).bind(this)
   console.log(another2(2, 3))


// карринг -> привязка константных значений для вызова функции
   const doubleBindCarring = double.bind(some, 3, 2)
   const doubleBindCarring2 = double.bind(some, 3)
   // больше нет необходимости передавать дополнительные аргументы, все жестко привязано
      // либо можно жестко привязать только один аргумент
      console.log(doubleBindCarring(1, 2))
      console.log(doubleBindCarring2(1, 2))

// for (let i = 0; i < 5; i++) {
//    window.setInterval(function(i){
//       console.log(i)
//    }).bind(null, i), i * 100);
// }
