# Компонентный подход

Цели и задачи:
-
* Попробовать реализовать компонентный подход на чистом JavaScript

Интересные моменты:
-  
* Данный пример является подводящей частью к началу изучения `React.js`, так как хорошо показывает преимущества использования компонентного подхода при помощи различных `framework` по типу `React.js, Vue.js` и `Angular.js`
* Реализация данного примера на `React.js` находится [тут](https://github.com/SetMiller/React-learning/tree/master/01_lets%20start)


Настройки:
-
1. скачать [плагин](https://www.npmjs.com/package/@babel/plugin-transform-react-jsx)
2. выполнить установку `npm i -D @babel/plugin-transform-react-jsx`
3. в настройках `.babelrc` прописать настроки:
   ```javascript
      "plugins": [
         ["@babel/plugin-transform-react-jsx", {"pragma" : "Parody.dom"}]
      ]
   ```