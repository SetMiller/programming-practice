// Основная функция для экспорта
  export default function jQ(selector){
    let elements

    selector instanceof HTMLElement ?
    elements = [selector] :
    elements = document.querySelectorAll(selector)
    
    return new JQClone(elements)
  }

// Второстепенная функция(класс)
  class JQClone {
    constructor(elements) {
      this.elements = elements
    }
    on(eventName, f){
      for(let element of this.elements){
        element.addEventListener(eventName, f)
      }
      return this
    }
    addClass(name){
      for(let element of this.elements){
        element.classList.add(name)
      }
      return this
    }
    removeClass(name){
      for(let element of this.elements){
        element.classList.remove(name)
      }
      return this
    }
    
    html(html){
      for(let element of this.elements){
        element.innerHTML = html
      }
      return this
    }
  }