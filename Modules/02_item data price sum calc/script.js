
! function(...args){
    for(let value of args){
      value()
    }
}(
  function elemSumm(){
    // Получаем интересующие нас элементы 
    const items = document.querySelectorAll('.items .items__item')
    const divPrice = document.querySelector('.value')
    // Для каждой карточки товара при клике вызываем функцию toggler()
    for (let itemElement of items){
      itemElement.onclick = toggler
    }
    // Для элемента добавляем класс и вызывает функцию суммирования
    function toggler(){
      this.classList.toggle('item-active')
      // передаем контекст карточки для функции, чтобы повторно не перебирать цикл
      calcPrice(this)
    }
    // Проверяем наличие класса item-active у элементов и суммируем значение из атрибута data-price
    function calcPrice(item) {
      let sum = 0
      item.classList.contains('item-active') ? sum += parseInt(item.getAttribute('data-price')) : ''
      // Результат выводим на экран
      divPrice.innerHTML = sum
    }
  },
  // проверяю работоспособность аргументов у функции вызова
  function loger(){
    console.log('it works good enough =P')
  }
);
  

  