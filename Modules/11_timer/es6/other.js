// /* global export*/

// Вариант №3.1 -> экспортируем весь модуль целиком
// export default {
//    cnt: 0,
//    inc() {
//       this.cnt++
//    } 
// }

// Вариант №3.2 -> экспортируем отдельные части модуля
// export let cnt = 0
// export const inc = () => {
//    cnt++
// }

// Создание приватной области в модуле ☀️☀️☀️
let cnt = 0

const inc = () => {
   cnt++
}

const get = () => {
   return cnt
}

const set = (arg) => {
   return cnt = arg
}

export {inc, get, set}