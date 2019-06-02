# Call, Apply and Bind

Цели и задачи:
-
* Еще раз рассмотреть работу методов для работы с контекстом

Интересные моменты:
-  
В случае потери контекста функцией помимо варианта использования обертки ввиде `bind()`, благодаря `ES6` возможно использовать так же `arrow function`, которая не имеет своего `this`, а использует `this` лексической области видимости

Пример:
-
* использование `bind` для передачи контекста вызова  
  ```javascript
    this.interval = window.setInterval(this.tick.bind(this), 1000)
  ```
* использование `arrow function`
  ```javascript
    this.interval = window.setInterval(() => {this.tick()}, 1000)
  ```
