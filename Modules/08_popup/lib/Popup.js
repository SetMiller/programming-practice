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
    console.log(this)
    this.overlay.classList.remove('popup-sleep')
    this.underlay.classList.remove('popup-sleep')
  }

  close(){
    // при нажатии на underlay возвращаем классы дивами для попапа для скрытия
    this.underlay.addEventListener('click', () => {
      this.overlay.classList.add('popup-sleep')
      this.underlay.classList.add('popup-sleep')
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
}
