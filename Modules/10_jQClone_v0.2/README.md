# Создание упрощенного аналога jQuery
За основу взят модуль [07_jQClone_v0.1](https://github.com/SetMiller/programming-practice/tree/master/Modules/07_jQClone_v0.1)
Цели и задачи:
-
* Исследовать принципы работы `jQuery`;
* Попробовать написать собственную упрощенного вида библиотеку на примере библиотеки `jQuery`;
* Добавить функционал в части возможности работы с конкретным элементов

Интересные моменты:
-  
- доработанный вариант функции `jQ()`, теперь функция способна отличать работает ли она с `HTMLElement` или с `NodeList`, благодаря чему при отработке по группе элементов продолжить работу с одним из них
  ```javascript
  function jQ(selector){
    let elements
    selector instanceof HTMLElement ? elements = [selector] : elements = document.querySelectorAll(selector)
    return new jQClone(elements)
  }
  ```

Пример работы модуля:
-
  ```javascript
  JQ('.items .item')
          .html('some text')
          .on('click', function(){
            this.style.color = 'red'
          // ключевой момент🔥🔥🔥 
          // теперь мы можем продолжить работу с элементом, который получили
            JQ(this)
                    .html('new text')
          })
  ``` 

