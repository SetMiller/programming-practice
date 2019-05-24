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

   // Для перерисовки используем привязку
   bindMount(selector){
      this.main_isMount = true
      this.main_targetNode = document.querySelector(selector)
      return this
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