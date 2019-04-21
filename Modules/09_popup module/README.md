# Создание всплывающего popup
За основу взят модуль [08_popup](https://github.com/SetMiller/programming-practice/tree/master/Modules/08_popup)

Цели и задачи:
- 
- Создание автономного модуля `popup`
- Для нового модуля передаем только `items` для которых он будет выполняться

Интересные моменты:
-  
- Для создания структура `popup` используется массив с объектами
- Построение разметки:
  * Создаем массив разметки (***родительский элемент для вставки прописан заранее***)
    ```javascript
    const arrElemProp = [
        {'.wrapper': '<div class="popup-overlay popup-sleep"></div>'},
          {'.popup-overlay': '<div class="popup-overlay__title"> title </div>'},
          {'.popup-overlay': '<div class="popup-overlay__text"> text </div>'},
        {'.wrapper': '<div class="popup-underlay popup-sleep"></div>'},
      ]
    ```
  * Функция для добавления элементов в разметку
    ```javascript
    insertElem(classAddElem, elem){
        document.querySelector(classAddElem).insertAdjacentHTML('beforeend', elem);
      }
    ```
  * Функция конструктор для итогового построения разметки (**для правильной передачи контекста используем стрелочную функцию** 🌈)
    ```javascript
    createElem(arr){
      for(let prop of arr){
        Object.keys(prop).map((value) => {
          this.insertElem(value, prop[value])
          })
      }
    }
    ```

Примечание:
-
- Посмотреть позже на предмет улучшения кода