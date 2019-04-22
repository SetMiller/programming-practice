export default class Popup {
  constructor(obj){
    
    // объект добавляемой разметки
      const arrElemProp = [
        {'.wrapper': '<div class="popup popup-overlay popup-sleep"></div>'},
          {'.popup-overlay': '<div class="popup-overlay__title"> title </div>'},
          {'.popup-overlay': '<div class="popup-overlay__text"> text </div>'},
        {'.wrapper': '<div class="popup popup-underlay popup-sleep"></div>'},
      ]

    // построение разметки 🔥🔥🔥
      this.createElem(arrElemProp)

    this.elements = document.querySelectorAll('.popup')
    this.underlay = document.querySelector('.popup-underlay')
    this.items = document.querySelectorAll(obj.items)
    this.title = document.querySelector('.popup-overlay__title')
    this.text = document.querySelector('.popup-overlay__text')
  }

  // функция для добавления элемента в разметку
  insertElem(classAddElem, elem){
    document.querySelector(classAddElem).insertAdjacentHTML('beforeend', elem);
  }

  // функция для построения разметки по данным из объекта разметки
  createElem(arr){
    for(let prop of arr){
    Object.keys(prop).map((value) => {
      this.insertElem(value, prop[value])
      })
    }
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

  close(animationTimer = 500, fps = 60, callback){
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
