import 'babel-polyfill'

import * as articleModel from './article'

articleModel.all()
   .then((allRes) => {
      console.log(allRes.data.length)
      const index = Math.floor(Math.random() * allRes.data.length);
      console.log('select index ' + index + ', id = ' + allRes.data[index].id)

      return articleModel.one(allRes.data[index].id)
   })
   .then((oneRes) => {
      const id = oneRes.data.id
      console.log(oneRes.data)

      return articleModel.remove(id)
   })
   .then((removeRes) => {
      console.log('что с удалением? - ' + removeRes.data);

      return articleModel.all()
   })
   .then((allRes) => {
      console.log('articles count = ' + allRes.data.length);
   })
   .catch((e) => {
      if (typeof(e) === 'string') {
         try{
            const error = JSON.parse(e)
            console.log(error.status)
         }
         catch {
            console.log(e)
         }
      } else {
        console.log(e) 
      }
   })


