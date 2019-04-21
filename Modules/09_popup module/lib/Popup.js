export default class Popup {
  constructor(obj){
    
    // объект добавляемой разметки
    const arrElemProp = [
      {'.wrapper': '<div class="popup-overlay popup-sleep"></div>'},
        {'.popup-overlay': '<div class="popup-overlay__title"> title </div>'},
        {'.popup-overlay': '<div class="popup-overlay__text"> text </div>'},
      {'.wrapper': '<div class="popup-underlay popup-sleep"></div>'},
    ]

    // построение разметки 🔥🔥🔥
    this.createElem(arrElemProp)

    // передаем 2 нод листа с дивами для попапа
    this.overlay = document.querySelector('.popup-overlay')
    this.underlay = document.querySelector('.popup-underlay')
    // передаем нод лист с дивами для эвента
    this.items = document.querySelectorAll(obj.items)
    // получаем доступ к дивам для отображения в них информации из выбранных карточек
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

//TODO: найти способ передавать для эвента объект или массив методов, или "...f" для их вызова
  on(eventName, f){
    // вешаем эвент на дивы и отслеживаем нажатия, 
    for(let item of this.items){
      item.addEventListener(eventName, f)
    }
    return this
  }

  open(){
    // при нажатии на итем убираем скрывающий класс
    this.overlay.classList.remove('popup-sleep')
    this.underlay.classList.remove('popup-sleep')
  }

  fadeClose(animationTimer = 500, fps = 60){
    this.underlay.addEventListener('click', () => {
      // либо можно получить NodeList элементов и вызвать функцию в цикле
      this.fade(this.overlay, fps, animationTimer)
      this.fade(this.underlay, fps, animationTimer)
    })
    return this
  }

  toggler(){
    // отслеживаем клик на кнопке и выводим ее информацию
    for(let item of this.items){
      item.onclick = () => {
        this.title.innerHTML = `Вы выбрали карточку № ${item.getAttribute('data-numb')}`
        this.text.innerHTML = `Цена по карточке ${item.getAttribute('data-price')} руб.`
      }
    }
    return this
  }

  // f -> fps (частота, с которой будет выполняться анимация)
  // t -> time (время, которое будет выполняться анимация)
  fade(elem, f, t){
    // console.log([elem, f, t])
    // частота кадров при работе анимации
    let fps = f
    //  время работы анимации
    let time = t
    // скорость работы 1 кадра анимации
    let speed = 1000 / fps
    // общее количество кадров анимации
    let steps = time / speed
    // начальное значение opacity
    let op = 1
    // промежуточное значение opacity
    let d0 = op / steps
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
        }
      }
    , speed)
  }
}
