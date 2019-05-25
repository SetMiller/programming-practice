/* global HTMLElement Proxy*/

// скелет, от которого будем отталкиваться
export class MainComponent {
   constructor(property){

      if(typeof property !== 'object') {
         property = {}
      }
      this.main_property = property

      this.main_isMount = false
      this.main_targetNode
   }

   initState(obj){
      this.state = watchObj(obj, this.render.bind(this))
   }

   // Для перерисовки используем привязку
   bindMount(selector){
      this.main_isMount = true
      this.main_targetNode = document.querySelector(selector)
      return this
   }

   setState(newState){
      Object.assign(this.state, newState)
      this.render()
   }

   // генерируем HRML
   render(node){
      if (this.main_isMount){
         this.main_targetNode.innerHTML = ''
         this.main_targetNode.appendChild(node)
      }
      return node
   }
}

export const MainComponentDom = (tag, property, ...childrens) => {

   if (typeof tag === 'function'){
      return (new tag(property)).render()
   }
   // console.log([...childrens])
   const node = document.createElement(tag)

   // Функция для рекурсивного обхода приходящих в children массивов элементов
   const addChildren = (child) => {
      if (child instanceof HTMLElement) {
         node.appendChild(child)
      } else if (child instanceof Array) {
         child.forEach(elem => 
            addChildren(elem)
         )
         // for (let elem of child) {
         //    addChildren(elem)
         // }
      } else {
         const textNode = document.createTextNode(child)
         node.appendChild(textNode)
      }
   }

   // рекрсивно обходим children
   childrens.forEach(addChildren)

   Object.assign(node, property)

   return node
}

function watchObj(node, callback){
   const reactiveFunction = {
      push: true,
      pop: true,
      splice: true,
      slice: true,
      shift: true,
      unsift: true,
      sort: true
   }
   return new Proxy(node, {
      set(target, name, value){
         target[name] = value
         callback(name, value)
         return true                                  //согласие с изменениями
      },
      get(target, name){
         switch (typeof target[name]){
            case 'object':
               return watchObj(target[name], callback)
            case 'function':
               if (name in reactiveFunction) {
                  return function(...args){
                     const res = target[name].apply(target, args)
                     callback()
                     return res
                  }
               } else {
                  return target[name].bind(target)
               }
            default:
               return target[name]
         }
         
      }
   })
}