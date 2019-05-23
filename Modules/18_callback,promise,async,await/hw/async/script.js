import 'babel-polyfill'

import * as asyncArticleModel from './article'


const articleModel = async () => {
   let allRes = await asyncArticleModel.all()
   console.log(allRes.length)
   const index = Math.floor(Math.random() * allRes.length);
   console.log('select index ' + index + ', id = ' + allRes[index].id)

   const oneRes = await asyncArticleModel.one(allRes[index].id)
   console.log(oneRes)

   const removeRes = await asyncArticleModel.remove(oneRes.id)
   console.log('что с удалением? - ' + removeRes);

   allRes = await asyncArticleModel.all()
   console.log(allRes.length)
}

articleModel()
   .then(() => {
   }, () => {
      console.log('bad JSON ERROR')
   })



