/* global */
import 'babel-polyfill'

// Если экспорт без default, то название нужно писать в фигурных скобках 
// import {VueGetters} from './vue-getters'

import VueGetters from './vue-getters'
import Vue2 from './vue-getter2'

// Объект должен найти элемент, взять данные и подставить в маску
let vg = new VueGetters({
   el: '.item',                                       // передаваемый элемент
   data: {                                            // объект с данными
      click: 'нажми',
      number: 555
   },
   template: `<div> {{click}} на {{number}}</div>`    // маска для подстановки данных
})

document.querySelector('.item').addEventListener('click', function(){
   vg.data.number++;
})

let vg2 = new Vue2({
   el: '.element',                                       
   data: {                                            
      info: 'моя почта',
      email: 'setmiller@gmail.com',
      click: 1
   },
   template: `<div> {{info}} по адресу {{email}} {{click}}</div>`
})

document.querySelector('.element').addEventListener('click', function(){
   vg2.data.click++;
})