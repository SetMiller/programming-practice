  import JQ from './lib/jQClone.js'

! function (...args) {
  for (let arg of args){
    arg()
  }
}(
  function jQClone(){ 
    JQ('.check')
                .on('focus', function(){
                  JQ(this).addClass('focus')
                })
                .on('blur', function(){
                  JQ(this).removeClass('focus')
                })

    JQ('.items .item')
                .html('some text')
                .on('click', function(){
                  this.style.color = 'red'
                  JQ(this)
                          .html('new text')
                })
                  
  }
)