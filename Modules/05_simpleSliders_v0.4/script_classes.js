export default class Slider {
  constructor(obj){
    this.btnNext = document.querySelector(obj.btnNext)
    this.btnPrev = document.querySelector(obj.btnPrev)
    this.images = document.querySelectorAll(obj.images)
    this.counter = 0

    // Проверяемм наличие кнопок, если их нет, то принудительно запускаем карусель
    this.btnNext && this.btnPrev ? this.autoCheck(obj.auto) : this.autoChange(obj.autoInterval)

    obj.mouseBlock ? this.mouseBlock() : ''
  }
  upChangeClass(){
    this.images[this.counter].classList.remove('show')
    this.counter == this.images.length - 1 ? this.counter = 0 : this.counter++
    this.images[this.counter].classList.add('show')
  }
  downChangeClass(){
    this.images[this.counter].classList.remove('show')
    this.counter == 0 ? this.counter = this.images.length - 1 : this.counter--
    this.images[this.counter].classList.add('show')
  }
  mouseBlock(){
    for (this.img of this.images){
      this.img.onmousedown = () => {return false}
      this.img.oncontextmenu = () => {return false}
    }
  }
  autoChange(defSliderInterval = 1000){
    setInterval(() => this.upChangeClass(), defSliderInterval)
  }
  autoCheck(defAutoParam = true){
    this.btnNext.onclick = () => this.upChangeClass()
    this.btnPrev.onclick = () => this.downChangeClass()
    defAutoParam ? this.autoChange() : ''
  }
}