// Основная функция для экспорта
  // 4️⃣
  export default function jQ(selector){
    let elements = document.querySelectorAll(selector)
    return new jQClone(elements)
  }

// Второстепенная функция(класс)
  class jQClone {
    constructor(elements) {
      this.elements = elements
    }

    // 2️⃣
      // click(f){
      //   for(let element of this.elements){
      //     element.addEventListener('click', f)
      //   }
      // }

    // 3️⃣
      on(eventName, f){
        for(let element of this.elements){
          element.addEventListener(eventName, f)
        }
        // возвращаем контекст для вызова следующей функции и построения цепочек вызовов
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
      
    // 5️⃣
      html(html){
        for(let element of this.elements){
          element.innerHTML = html
        }
        return this
      }
  }

// Вариант экспорта всех необходимых функций
  // export {jQ, jQClone}