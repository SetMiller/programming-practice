import 'babel-polyfill'

import * as asyncArticleModel from './article'


const articleModel = async () => {
   
   // Чтение списка или отдельной записи
      const reqObj = {
         list: true,
         // title: 'Set',
      }
      let allRes = await asyncArticleModel.get(reqObj)
      console.log(allRes)

   // Добавление записи
      // const addObj = {
      //    title: 'Set',
      //    author: 'Miller'
      // }
      // const addRes = await asyncArticleModel.add(addObj)
      // console.log(addRes)

   // Удаление записи
      // const titleToDelete = allRes[Math.floor(Math.random() * allRes.length)]
      // const delObj = {
      //    title: `${titleToDelete}`,
      // }
      // const removeRes = await asyncArticleModel.remove(delObj)
      // console.log(removeRes)

}

articleModel()
   .then(() => {
   }, (e) => {
      console.log(e)
   })



