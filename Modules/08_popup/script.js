import Popup from './lib/Popup.js'

! function (...args) {
  for (let arg of args){
    arg()
  }
}(
  function popupOn(){
  // 1️⃣ Вариант с объектом в качестве параметров
    let popup = new Popup({
                            overlay:    '.popup-overlay',
                            underlay:   '.popup-underlay',
                            title:      '.popup-overlay__title',
                            text:       '.popup-overlay__text',
                            items:      '.items .items__item'
                          })
    // 1️⃣.1️⃣ 
      // popup.on('click', wrapperFunc)
      // function wrapperFunc(){
      //   popup.open()
      // }
      // popup.on('click', popup.open)

    // 1️⃣.2️⃣  
      popup
            .on('click', () => popup.open())
            .toggler()  
            .close()  
    
  // 2️⃣ Вариант упрощенный, без создания классов
    // const overlay = document.querySelector('.popup-overlay')
    // const underlay = document.querySelector('.popup-underlay')
    // const items = document.querySelectorAll('.items')
    // for(let item of items){
    //   item.addEventListener('click',delClass)
    // }
    
    // underlay.addEventListener('click',addClass)

    // function delClass() {
    //   overlay.classList.remove('popup-sleep')
    //   underlay.classList.remove('popup-sleep')
    // }
    
    // function addClass(){
    //   overlay.classList.add('popup-sleep')
    //   underlay.classList.add('popup-sleep')
    // }


  },
)