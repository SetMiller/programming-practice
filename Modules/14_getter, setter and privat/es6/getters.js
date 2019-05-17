
// этап 1 ---------------------------------
// в данном случае при прямим экспорте, есть возможность менять параметр объекта
const some = {
   _private: {
      cnt: 3,
   },
   min: 1,
   max: 10
}

Object.defineProperty(some, 'cnt', {
   // будет работать когда напишем obj.cnt
   get(){
      console.log('getter')
      return this._private.cnt
   },
   // будет работать когда напишем obj.cnt
   set(value){
      if (value <= this.min) {
         // console.log(value, 'setter min', this.min)
         this._private.cnt = this.min
      } else if (value >= this. max) {
         // console.log(value, 'setter max', this.max)
         this._private.cnt = this.max
      } else {
         // console.log(value, 'setter norm')
         this._private.cnt = value
      }
   }
})

export default some