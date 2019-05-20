/* global */
import 'babel-polyfill'

// Если экспорт без default, то название нужно писать в фигурных скобках 
// import {VueGetters} from './vue-getters'

import {emailParser, watchObj} from './emailParser&proxy'

// Объект должен найти элемент, взять данные и подставить в маску

let obj = 'setmiller@gmail.com'

let str = new emailParser(obj)
console.log(str.name)
console.log(str.domain)
console.log(str.isCorrect);
console.log('--------------------------')

// console.log(str.email)
str.email = 'solomko.r@gmail.com'
console.log(str.name)
console.log(str.domain)
console.log(str.isCorrect);
console.log('--------------------------')

str.email = 'Solomko.R@gmail.net'
console.log(str.name)
console.log(str.domain)
console.log(str.isCorrect);
console.log('--------------------------')
console.log('--------------------------')

let parser = new emailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);
console.log('--------------------------')

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

let div = document.createElement('div');
document.body.appendChild(div);
console.log([div])

let cleverDiv = watchObj(div, function(prop, val){
   console.log(prop, val);
});
cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
cleverDiv.style.color = 'red';
// чтобы можно было обратиться к элементу, добавляем проверку на объект или нет
// если объект, обрабатываем рекурсивно
console.log(cleverDiv.innerHTML)
// чтобы можно было вызвать функцию получения элемента, нужно привязать контекст к элементу
cleverDiv.querySelector('em').style.color = 'green';

cleverDiv.classList.add('some')