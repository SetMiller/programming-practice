import 'babel-polyfill'

import * as asyncArticleModel from './article'


const articleModel = async () => {
   // const reqObj = {
   //    title: 'Set',
   // }
   // let allRes = await asyncArticleModel.get(reqObj)
   // console.log(allRes)

   const reqListObj = {
      list: '',
   }
   let listRes = await asyncArticleModel.getList(reqListObj)
   console.log(listRes)

   // const addObj = {
   //    title: 'Set3',
   //    author: 'Miller3'
   // }
   // const addRes = await asyncArticleModel.add(addObj)
   // console.log(addRes)

   const titleToDelete = listRes[Math.floor(Math.random() * listRes.length)]
   const delObj = {
      title: `${titleToDelete}`,
   }
   const removeRes = await asyncArticleModel.remove(delObj)
   console.log(removeRes)

}

articleModel()
   .then(() => {
   }, (e) => {
      console.log(e)
   })



