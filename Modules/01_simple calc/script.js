
! function(...args){
    for(let value of args){
      value()
    }
}(
  function calcInputValue(){
    const btn = document.querySelectorAll('[name="calc"]')
    const span = document.querySelector('.res')
    const inputs = document.querySelectorAll('[name="num1"], [name="num2"]')
    const calc = document.querySelectorAll('.forCalc')
    for(let input of inputs){
      input.onkeydown = function(){
        btn[0].disabled = false
      }
    }
    for (let item of calc){
      item.onclick = function(){
        return calcName = this.name
      }
    }
    for (let btnElement of btn){
      btnElement.onclick = function(){
        try {calcValue(btnElement, calcName)}
        catch (err){console.log('Выберете действие !!!')}
      }
    }
    function calcValue(btnElement, calcName){
      const calc = {
        add: (x, y) => { return x + y },
        substract: (x, y) => { return x - y },
        multiply: (x, y) => { return x * y },
        divide: (x, y) => { return x / y },
      }
      const sum = [...inputs].map(input => parseInt(input.value))
      const res = calc[calcName](sum[0], sum[1])
      !res ? span.innerHTML = 'введите все числа' : span.innerHTML = res 
      span.innerHTML == res ? btnElement.disabled = true : ''
    }
  }
);
  

  