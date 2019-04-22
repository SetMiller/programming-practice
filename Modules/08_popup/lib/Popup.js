export default class Popup {
  
  constructor(obj){
    this.underlay = document.querySelector(obj.underlay)
    this.elements = document.querySelectorAll(obj.elements)
    this.items = document.querySelectorAll(obj.items)
    this.title = document.querySelector(obj.title)
    this.text = document.querySelector(obj.text)
  }
  open(){
    for(let item of this.items){
      item.onclick = () => {
        this.title.innerHTML = `Вы выбрали карточку № ${item.getAttribute('data-numb')}`
        this.text.innerHTML = `Цена по карточке ${item.getAttribute('data-price')} руб.`
        for (let elem of this.elements) {
          elem.classList.remove('popup-sleep') 
        }
      }
    }
    return this
  }

  Close(animationTimer = 500, fps = 60, callback){
    const callBackFunc = callback || function(){}
    this.underlay.onclick = () => {
      for (let elem of this.elements) {
        this.fadeTechFunc(elem, fps, animationTimer, callBackFunc) 
      }
    }
    return this
  }

  // f -> fps (частота, с которой будет выполняться анимация)
  // t -> time (время, которое будет выполняться анимация)
  fadeTechFunc(elem, f, t, callback){
    // частота кадров при работе анимации
    const fps = f
    //  время работы анимации
    const time = t
    // скорость работы 1 кадра анимации
    const speed = 1000 / fps
    // общее количество кадров анимации
    let steps = time / speed
    // начальное значение opacity
    let op = 1
    // промежуточное значение opacity
    const d0 = op / steps
    // функция таймер
    let timer = setInterval(function(){
        op -= d0
        elem.style.opacity = op
        steps--
        if (steps <= 0) {
          // функция прерывания таймера
          clearInterval(timer)
          elem.classList.add('popup-sleep')
          elem.style.opacity = ''
          // В некоторые моменты callback функция отрабатывает раньше сброса opacity строкой выше 🔥
          callback.call(elem)
        }
      }
    , speed)
  }
}