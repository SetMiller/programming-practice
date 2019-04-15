import Slider from './script_classes.js'

! function (...args) {
    for (let arg of args) {
      arg()
  }
} 
(
  function consoleClear(){
    console.clear()
  },
  function slider1(){
    new Slider({
      btnNext: '.gallery-1 .buttons .next',
      btnPrev: '.gallery-1 .buttons .prev',
      images: '.gallery-1 .slider img',
      auto: false,
      mouseBlock: true,
    })
  },
  function slider2() {
    new Slider({
      btnNext: '.gallery-2 .buttons .next',
      btnPrev: '.gallery-2 .buttons .prev',
      images: '.gallery-2 .slider img',
      auto: false,
      mouseBlock: false,
    })
  },
  function slider3() {
    new Slider({
      btnNext: '.gallery-3 .buttons .next',
      btnPrev: '.gallery-3 .buttons .prev',
      images: '.gallery-3 .slider img',
      auto: true,
      mouseBlock: true,
    })
  },
)


