# Создание всплывающего popup
За основу взят модуль [02_item data price sum calc](https://github.com/SetMiller/programming-practice/tree/master/Modules/02_item%20data%20price%20sum%20calc)

Цели и задачи:
- 
- Повторить возможности использования и импорта классов;
- Передача параметров с помощью свойств объекта;
- Добавление возможности использовать цепочки вызовов;
- Передача информации из выбранного `item` в всплывающий `popup`;
- Скрытие `popup`;
- `Сallback` функция (функция обратного вызова)

Интересные моменты:
-  
- При вызове функции `Close()` есть возможность передать параметры времени анимации (`animationTimer`), частоту кадров (`fps`) и `callback` функцию;
- Функция `fadeTechFunc()` принимает четыре параметра:
  *  `elem` → элемент для которого меняем параметр opacity
  *  `f` → частота кадров 
  *  `t` → время выполнения анимации
  *  `callback` → функция обратного вызова, которая возвращает элементы, с которыми работали ранее
- Функция таймер и условие прерывания таймера
  ```javascript
  let timer = setInterval(function(){
        if (steps <= 0) {
          clearInterval(timer)
        }
      }
    , 1000)
  }
  ```
- Косвенный вызов `callback` функции в контексте элементов с которыми отработали ранее
  ```javascript
  Close(callback){
    const callBackFunc = callback || function(){}
    this.underlay.onclick = () => {
      for (let elem of this.elements) {
        this.fadeTechFunc(callBackFunc) 
      }
    }
    return this
  }

  fadeTechFunc(callback){
    let timer = setInterval(function(){
        if ( /* условие... */ ) {
          clearInterval(timer)
          callback.call(elem)
        }
      }
    , 1000)
  }
  ```

Примечание:
-
- Убрал сумбур в логике вызова функций и удалил мусорные функции
- Добавил callback функцию