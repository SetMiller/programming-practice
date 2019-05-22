import 'babel-polyfill'

import * as asyncArticleModel from './article'


const articleModel = async () => {
   let allRes = await asyncArticleModel.all()
   console.log(allRes.data.length)
   const index = Math.floor(Math.random() * allRes.data.length);
   console.log('select index ' + index + ', id = ' + allRes.data[index].id)

   const oneRes = await asyncArticleModel.one(allRes.data[index].id)
   const id = oneRes.data.id
   console.log(id)
   console.log(oneRes.data)

   const removeRes = await asyncArticleModel.remove(id)
   console.log('что с удалением? - ' + removeRes.data);

   allRes = await asyncArticleModel.all()
   console.log(allRes.data.length)
}

articleModel()
   .then(() => {}, (e) => {
         console.log(e)
   })



