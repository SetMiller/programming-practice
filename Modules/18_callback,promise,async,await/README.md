# Promise, async/await

Цели и задачи:
-
* Познакомиться на практике с предметом темы

Интересные моменты:
-  
* Так как `promise, async/await` поддерживаются не всеми браузерами, то для их использования стоит применять `babel-polyfill`
* Структура работы с импровизированным сервером делится на 2 части:
   1. Мы формируем и обрабатывает начальный запрос
   2. Мы обрабатываем ответы от сервера

*Необходимость такого подхода **будет видна далее**, что даст понять на сколько удобно такое разделение функционала*

Пример работы модуля:
-
* Вариант с `Promise`
   * Стадия 1: получаем итоговый промис от всех частей средней части
      ```javascript
      articleModel.all()
         .then((allRes) => {
            console.log(allRes.data.length)
            const index = Math.floor(Math.random() * allRes.data.length);
            console.log('select index ' + index + ', id = ' + allRes.data[index].id)

            return articleModel.one(allRes.data[index].id)
         })
      ``` 
   * Стадия 2: перенаправляем запрос на сервер и последующей промежуточной обработкой ответа от него
      ```javascript
      const all = () => {
      return serverApi.all()
         .then((allResponse) => {
            return serverResponse(allResponse)
         })
      }

      const serverResponse = (response) => {
         try {
            const info = JSON.parse(response)
            if (info.code == 200) {
               return info
            }
         } catch (error) {
            throw new Error('bad JSON ERROR')
         }
         throw new Error('bad data #100500')
      }
      ``` 
   *На сколько видно, в данной части функционала мы обрабатывает ответ от сервера на предмет исключений, которые могут быть получены в качестве `Promise.resolve()` ответа, что приведет их к попаданию в `разрещающую (Promise.prototype.then())` часть выполнения обещания, что недопустимо и нам необходимо перенаправить его в `отклонение (Promise.prototype.catch())`.*

**`Из минусов:`** *для получения промиса следующего **по цепочке** запроса, нам необходимо возвращать его в обработчике*.

* Вариант с `async/await`  
*Как будет видно ниже, данный код имеет более короткий синтаксис при обработке положительных ответов, обнако, так как мы используем синтаксис функции, нам необходимо отдельно вызвать ее и обработать полученные исключения*
   * Стадия 1:
      ```javascript
      const testArticlesModel = async() => {
         let articlesAll = await ArticlesModel.all()
         console.log('articles count = ' + articlesAll.length)
      }
      testArticlesModel()
         .catch((e) => {
            console.log(e)
      })
      ```
  * Стадия 2:
      ```javascript
      async function all(){
         let response = await serverApi.all()
         return parseResponse(response)
      }

      function parseResponse(text){
         try {
            let response = JSON.parse(text);
            if(response.code !== 200){
               throw new Error('Error #100500')
            }
            return response.data
         } catch (error) {
            throw new Error('incorrect json')
         }
      }
      ```