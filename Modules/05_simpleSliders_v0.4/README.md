# Работа с классами на примере слайдера

Цели и задачи:
-
* создание класса `Slider` для последующего многократного использования со следующими характеристиками
   - передача параметров ввиде объекта;
   - работа в автоматическом режиме;
   - метод блокировки картинок для перетаскивания и вызова контекстного меню;

Интересные моменты:
-
- для экспорта класса `Slider` используются параметры `export default class`
- использование переменной `this.counter = 0` в замыкании
- использование стрелочных функций с сохранением контекста вызова
- проверяем правильность указания параметров получения доступа к кнопкам, в противном случае запускаем принудительную карусель:
  ```javascript
  this.btnNext && this.btnPrev ? this.autoCheck(obj.auto) : this.autoChange()

  autoCheck(objAutoParam){
    objAutoParam ? this.autoChange() : ''
  }
  ```

- устанавливаем параметрам `auto` и `autoInterval` параметры по-умолчанию, поэтому строгой необходимости в их указании нет
  ```javascript
  defAutoParam = true
  defSliderInterval = 1000
  ```
- передаем настройки `Slider` ввиде объекта:
  ```javascript
  {
    btnNext: '.gallery-3 .buttons .next',
    btnPrev: '.gallery-3 .buttons .prev',
    images: '.gallery-3 .slider img',
    auto: true,
    autoInterval: 2000,
    mouseBlock: true,
  }
  ```

- 

