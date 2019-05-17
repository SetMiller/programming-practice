/* global */
import 'babel-polyfill'

import some from './getters'

// этап 1 ---------------------------------
console.log(some.cnt);
some.cnt = 5
console.log(some.cnt);
some.cnt = -10
console.log(some.cnt);
some.cnt = 100
console.log(some.cnt);
console.log([some]);