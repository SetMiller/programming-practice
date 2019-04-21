# Создание всплывающего popup
За основу взят модуль [02_item data price sum calc](https://github.com/SetMiller/programming-practice/tree/master/Modules/02_item%20data%20price%20sum%20calc)

Цели и задачи:
- 
- Создание автономного модуля `popup`
- Для нового модуля передаем только `items` для которых он будет выполняться

Интересные моменты:
-  
- Для создания структура `popup` используется массив с объектами
- Построение разметки:
  * Создаем массив разметки (*родительский элемент для вставки прописан заранее*)
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
  * Функция конструктор для итогового построения разметки
    ```javascript
    insertElem(classAddElem, elem){
      document.querySelector(classAddElem).insertAdjacentHTML('beforeend', elem);
    }
    ```

Примечание:
-
- Посмотреть позже на предмет улучшения кода