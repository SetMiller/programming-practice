# Создание упрощенного аналога jQuery
За основу взят модуль [06_empty input highlighting](https://github.com/SetMiller/programming-practice/tree/master/Modules/06_empty%20input%20highlighting)

Цели и задачи:
-
* Исследовать принципы работы `jQuery`;
* Попробовать написать собственную упрощенного вида библиотеку на примере библиотеки `jQuery`;
* Использовать `export default class` для экспорта единого модуля;

Интересные моменты:
-  
- функция `jQ()` , которая возвращает объект `jQClone`, содержащий `NodeList DOM` элементов выбранных по селектору  
  ```javascript
  function jQ(selector){
    let elements = document.querySelectorAll(selector)
    return new jQClone(elements)
  }
  ```
- функция конструктора `on()` , которая для каждого элемента `NodeList` вызывает метод `.addEventListener` и передает ему событие и функцию обработчик, а потом возвращает объект `jQClone` для дальнейшей работы с ним по принципу `цепочек вызовов`
  ```javascript
    on(eventName, f){
      for(let element of this.elements){
        element.addEventListener(eventName, f)
      }
      return this
    }
  ```
Пример работы модуля:
-
  ```javascript
  jQ('.items .item')
                    .html('Some text')
                    .on('click', function(){
                      this.style.color = 'red'
                    })
  ```

