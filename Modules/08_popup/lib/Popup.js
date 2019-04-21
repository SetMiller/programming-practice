export default class Popup {
  
  constructor(obj){
    // передаем 2 нод листа с дивами для попапа
    this.overlay = document.querySelector(obj.overlay)
    this.underlay = document.querySelector(obj.underlay)
    // передаем нод лист с дивами для эвента
    this.items = document.querySelectorAll(obj.items)
    // получаем доступ к дивам для отображения в них информации из выбранных карточек
    this.title = document.querySelector(obj.title)
    this.text = document.querySelector(obj.text)
    // this.overlay.style.opacity = 1
    // this.overlayOpacity = this.overlay.style.opacity
    // console.log(this.overlayOpacity)
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
