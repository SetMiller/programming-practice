/* global */
import 'babel-polyfill'

import data from './proxy.js'

console.log(data.a)
data.a = 5
console.log(data.a)

console.log(data.b)
data.b = 7
console.log(data.b)