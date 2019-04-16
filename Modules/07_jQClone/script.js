// Импортируем основную функцию
  import jQ from './lib/jQClone.js'
  // import {jQ, jQClone} from './lib/jQClone.js'
  // import jQClone from './lib/jQClone.js'

! function (...args) {
  for (let arg of args){
    arg()
  }
}(
  function inputHighlighting(){
    // получаем элементы
    const inputs = document.querySelectorAll('.check')
    const form = document.querySelector('form')
    // при отправке формы проверяем условие выполнения функции
    form.onsubmit = function(e){
      eventWatching(e)
    }
    function eventWatching(e){
      let error = false;
      for (let input of inputs) {
        // если инпут пустой, то добавляем класс и чекаем ошибку
        if (input.value === '') {
          input.classList.add('err'); 
          error = true
        }
      }
      // если есть ошибка, то прерываем выполнение эвента
      if(error){
          // прерываем выполнение отправки формы если есть ошибка
          e.preventDefault();
      }
    }
      // управление цветовыми индикаторами input
      // for(let input of inputs){
      //   input.onclick = function(){
      //     this.classList.remove('err')
      //   }
      //   input.onfocus = function(){
      //     this.classList.add('focus')
      //   }
      //   input.onblur = function(){
      //     this.classList.remove('focus')
      //   }
      // }
  },
  function jQCloneOne(){
    // 1️⃣
      // for(let input of inputs){
      //   input.addEventListener('blur', function(){
      //     this.classList.remove('err')
      //   })
      // }

    // 2️⃣
      // let jqInputs = new jQclone(inputs)
      // jqInputs.click(function(){
      //       this.classList.remove('err')
      //   }
      // )
  },
  function jQCloneTwo(){
    // 3️⃣
      // let jqInputs = new jQClone(inputs)
      // jqInputs.on('click', removeErr)
      // jqInputs.on('focus', addFocus)
      // jqInputs.on('blur', removeFocus)

    // 4️⃣  Выбираем необходимые элементы и вешаем на них обработчики
      let jqInputs = jQ('.check')
      jqInputs
              .on('click', removeErr)
              .on('focus', addFocus)
              .on('blur', removeFocus)

      jqInputs
              .addClass('some')
              .removeClass('some')
      
    // Функции обработчики событий у инпутов
      function removeErr(){
        this.classList.remove('err')
      }
      function addFocus(){
        this.classList.add('focus')
      }
      function removeFocus(){
        this.classList.remove('focus')
      }
  },
  function jQCloneThree(){ 
    // 5️⃣ Получаем NodeList elements, добавляем в них текст и вешаем обработчик 
      jQ('.items .item')
                        .html('123')
                        .on('click', function(){
                          this.style.color = 'red'
                        })
  }
)