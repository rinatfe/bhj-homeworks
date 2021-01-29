const addButton = document.getElementById('tasks__add')
const template = document.getElementById('tasks__list')
let remove

let handler = () => {
    template.insertAdjacentHTML('afterEnd',`<div class="task">
    <div class="task__title">` +
      `${document.getElementById('task__input').value}` +
    `</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)
}

let removeHandler = ()=> {
    remove.forEach(element => {
      element.addEventListener('click', ()=> {
          element.parentElement.remove()
      })  
    });
}


addButton.addEventListener('click', ()=> {
    if(document.getElementById('task__input').value !== "")
        handler()
        remove = Array.from(document.querySelectorAll('.task__remove'))
        removeHandler()
})

