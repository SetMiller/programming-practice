# Работа с submit и прерывание глобального эвента

Цели и задачи:
-
* работа с `Event`;
* отслеживание и прерывание выполнения используя метод `Event.stopPropagation()`;
* применение чекера возникающих ошибок;

Интересные моменты:
- для того, чтобы иметь возможность вызывать методы `Event` необходимо передать его в качестве аргумента функции
  ```javascript
  document.querySelector('form').onsubmit = function(e){
    eventWatching(e)
  }
  ```
- далее логика проста, смотрим параметр `value` у элемента `input` и при отсутствии параметров регистрируем ошибку, которая вызывает метод `e.preventDefault()` и событие прерывается
  ```javascript
  function eventWatching(e){
    var error = false;
    for (input of inputs) {
      // проверяем параметр value и при необходимости регистрируем ошибку
      if (input.value === '') {
        input.classList.add('err'); 
        error = true
      }
    }
    if(error){
      // в случае наличия ошибки прерываем выполнение события
      e.stopPropagation();
    }
  }
  ```

