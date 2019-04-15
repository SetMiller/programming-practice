! function (...args) {
    for (let func of args) {
      func();
    }
} 
(
  function linksCancel(){
    console.clear()
    // Получаем все ссылка
    const links = document.querySelectorAll('a[target=_blank]')
    for (let link of links){
      // Вызываем всплывающее окно
      link.onclick = confirmAway    
    }
    // Выводим окно для подтверждения действия
    function confirmAway(){
      return !confirm('на свой страх и риск 😈') ? false : true
    }
    
  },
  function imagesBlock(){
    // Получаем все картинки
    const images = document.querySelectorAll('.gallery img')
    for (let img of images){
      // Вызываем функцию блокировки строки
      img.onmousedown = cancelMove
      img.oncontextmenu = cancelMove
    }
    // Блокируем возможность перетаскивания мышкой
    function cancelMove(){
      return false
    }
  }
)