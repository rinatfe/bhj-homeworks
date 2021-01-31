const addButton = document.getElementById('tasks__add')
const template = document.getElementById('tasks__list')


let handler = () => {
    template.insertAdjacentHTML('afterEnd',`<div class="task">
    <div class="task__title">` +
      `${document.getElementById('task__input').value}` +
    `</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)
}

let removeHandler = ()=> {
    document.querySelector('.task__remove').addEventListener('click', ()=> { 
      document.querySelector('.task__remove').parentElement.remove()
    })
}


addButton.addEventListener('click', ()=> {
    if(document.getElementById('task__input').value.trim() !== "") {
        event.preventDefault() 
        handler() 
        removeHandler()}
})

