import Popup from './lib/Popup.js'

! function (...args) {
  for (let arg of args){
    arg()
  }
}(
  function popupOn(){
    let popup = new Popup({
                            underlay:   '.popup-underlay',
                            elements:   '.popup',
                            title:      '.popup-overlay__title',
                            text:       '.popup-overlay__text',
                            items:      '.items .items__item'
                          })
    popup
            .open()
            .Close(1000, 100, callBackFunc)

  // Callback функция для последующего получения доступа к элементам, с которыми уже отработали действие
    function callBackFunc(){
      console.log(this)
    }
  },
)