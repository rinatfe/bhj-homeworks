const menu = document.querySelector('.dropdown__value')
const list = Array.from(document.querySelectorAll('.dropdown__item'))
let count = 0;
menu.addEventListener('click', ()=> {
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')
    count += 1
    if(!(count % 2))
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
})
 
list.forEach(item => {
 item.onclick = () =>
 {
     document.querySelector('.dropdown__value').textContent = item.textContent
     document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
     count = 0
     return false
 } 
})