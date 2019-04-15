
! function(...args){
    for(let value of args){
      value()
    }
}(
  // Функция для суммирования введенных значений  
  function calcInputValue(){
    // Получаем доступ к NodeList элементов
    const btn = document.querySelectorAll('[name="calc"]')
    const span = document.querySelector('.res')
    const inputs = document.querySelectorAll('[name="num1"], [name="num2"]')
    const calc = document.querySelectorAll('.forCalc')
    // При нажатии на input снимаем блокирование кнопки "="
    for(let input of inputs){
      input.onkeydown = function(){
        btn[0].disabled = false
      }
    }
    // Отслеживаем какое арифметическое действие выбрали
    for (let item of calc){
      item.onclick = function(){
        return calcName = this.name
      }
    }
    // Выполняем арифметическое действие с числами из input
    for (let btnElement of btn){
      btnElement.onclick = function(){
        // Выполняем арифметическое действие при условии что все сделано верно
        try {calcValue(btnElement, calcName)}
        // Выводим информацию в случае, если арифметическое действие не выбрано
        catch (err){console.log('Выберете действие !!!')}
      }
    }
    // Функция отслеживаем какое действие выбрали, высчитываем результат и блокирует кнопку "="
    function calcValue(btnElement, calcName){
      const calc = {
        add: (x, y) => { return x + y },
        substract: (x, y) => { return x - y },
        multiply: (x, y) => { return x * y },
        divide: (x, y) => { return x / y },
      }
      // Через замыкание получаем достук к input.value
      const arr = [...inputs].map(input => parseInt(input.value))
      // Вычисляем арифметическое действие
      const res = calc[calcName](arr[0], arr[1])
      // Проверяем что в оба input ввели числа (без доп. проверок) и заносим результат в span
      !res ? span.innerHTML = 'введите все числа' : span.innerHTML = res 
      // Если результат внесен, то блокируем кнопку
      span.innerHTML == res ? btnElement.disabled = true : ''
    }
  }
);
  

  