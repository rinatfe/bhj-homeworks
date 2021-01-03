let active = document.getElementById('modal_main')

//active.className = 'modal modal_active';
active.classList.add('modal_active')

let exit = document.querySelectorAll('.modal__close')
exit.item(0).onclick = () => active.classList.remove('modal_active')

let show = document.querySelector('.show-success')
let good = document.getElementById('modal_success')
show.onclick = () => { 
    good.classList.add('modal_active')
    active.classList.remove('modal_active')
}

exit.item(2).onclick = () => {
    good.classList.remove('modal_active')
    active.classList.remove('modal_active')
}