const sum = (a, b) => {
   return a + b
}

const dev = (a, b) => {
   if (b == 0) {
      throw new Error('devision by zero !!!')
   } else {
      return a / b
   }
}

export default function mathOp(a, b, op) {
   switch (op) {
      case '+':
         return sum(a, b)
      case '/':
         return dev(a, b)
      default:
         return false
   }
}