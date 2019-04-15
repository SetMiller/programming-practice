! function (...args) {
    for (let arg of args) {
      arg()
  }
} 
(
  function consoleClear(){
    console.clear()
  },

  function buttonClick(){
    // Получаем кнопки и интересующие нас картинки
    const btnNext = document.querySelector('#gallery .buttons .next')
    const btnPrev = document.querySelector('#gallery .buttons .prev')
    const images = document.querySelectorAll('#gallery .slider *')
    // Добавляем кнопкам действие
    btnNext.onclick = upChangeClass
    btnPrev.onclick = downChangeClass
    // Переменная для записи текущего состояния
    let counter = 0;
    // Функция перебора вперед
    function upChangeClass(){
      images[counter].classList.remove('show')
      counter == images.length - 1 ? counter = 0 : counter++
      images[counter].classList.add('show')
    }
    // Функция перебора назад
    function downChangeClass(){
      images[counter].classList.remove('show')
      counter == 0 ? counter = images.length - 1 : counter--
      images[counter].classList.add('show')
    }
  },
)


