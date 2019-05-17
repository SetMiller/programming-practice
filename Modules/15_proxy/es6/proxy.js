/* global Proxy */
let data = {
   a: 1,
   b: 2
}

export default new Proxy(data, {
   // отличается от геттера и сеттера обычных, тем что работают с каждым полем объекта
   // принимает 2 параметра, сам объект и имя его свойства
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

