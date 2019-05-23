export class Parody{
   constructor(props){
      // принимаем параметры
      if (typeof(props) !== 'object') {
         props = {}
      }

      this.props = props
      this.isMount = false
      this.targetNode
   }

   bindMount(selector){
      this.isMount = true
      this.targetNode = document.querySelector(selector)
      return this
   }

   render(node){
      if (this.isMount){
         this.targetNode.innerHTML = ''
         this.targetNode.appendChild(node)
      }
      return node
   }
}

export const createNode = (tabName, props) => {
   let node = document.createElement(tabName)

   for(let name in props) {
      node[name] = props[name]
   }

   return node
}

export const ParodyDom = (tag, props, ...children) => {
   // console.log(`tag: ${tag}`)
   // console.log(`props: ${props}`)
   // console.log(`children: ${children}`)
   
   // console.log(Object.prototype.toString.call(children).slice(8, -1))
   // console.log('----------------------------')
   if (typeof(tag) === "function"){
      return (new tag(props)).render()
   }
   
   const node = document.createElement(tag)
   // пустой NodeList
   // const fragment = document.createDocumentFragment()

   children.forEach(elem => {
      // console.log(elem)
      if (elem instanceof HTMLElement) {
         node.appendChild(elem)
      // } else if () {} 
      } else {
         // делаем проверку для простого текста
         const textnode = document.createTextNode(elem)
         node.appendChild(textnode)
      }
   });
   
   // аналог for/in по ключам
   Object.assign(node, props)

   
   return node
}