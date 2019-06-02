/* global Proxy */
let data = {
   a: 1,
   b: 2
}

export default new Proxy(data, {
   get(target, name){
      console.log(target)
      console.log(name)
      return target[name]
   },
   set(target, name, value){
      target[name] = value
      // обязан вернуть, как подтверждение изменения
      return true
   }
})

