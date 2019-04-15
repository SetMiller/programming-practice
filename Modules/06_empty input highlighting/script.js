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
      var error = false;
      for (input of inputs) {
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
    for(let input of inputs){
      input.onclick = function(){
        this.classList.remove('err')
      }
      input.onfocus = function(){
        this.classList.add('focus')
      }
      input.onblur = function(){
        this.classList.remove('focus')
      }
    }
  }
)