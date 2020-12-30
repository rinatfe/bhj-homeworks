let active = document.getElementById('modal_main')

active.className = 'modal modal_active';

let exit = document.querySelectorAll('.modal__close')
exit.item(0).onclick = () => active.className = 'modal'

let show = document.querySelector('.show-success')
let good = document.getElementById('modal_success')
show.onclick = () => good.className = 'modal modal_active'

exit.item(2).onclick = () => {
    good.className = 'modal'
    active.className = 'modal'
}