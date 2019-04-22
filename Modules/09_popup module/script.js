import Popup from './lib/Popup.js'

! function (...args) {
  for (let arg of args){
    arg()
  }
}(
  function popupOn(){
  // Создание разметки с помощью конструктора
    let popup = new Popup({
                            items: '.items .items__item'
                          })
  // Добавляем функционал
    popup
          .on('click', () => popup.open())
          .toggler()  
          .fadeClose(500, 60, callback)  
    function callback(){
      console.log('it works')
      console.log(this)
    }
  },
)