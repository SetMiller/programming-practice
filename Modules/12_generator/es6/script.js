/* global */
import 'babel-polyfill'
import {getWords, wordsCount} from './generator.js'

window.onload = function(){
   const sentence = '  Всем  привет! Ура ура! привет! Ура ура! Ура Ура!'
   wordsCount(sentence)
   let words = getWords(sentence)
   for(let word of words) {
      console.log(word)
   }
}
