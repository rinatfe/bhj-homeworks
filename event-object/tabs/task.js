const list = Array.from(document.querySelectorAll('.tab'))
const content = document.querySelectorAll('.tab__content')
list.forEach(item => {
    item.onclick = ()=> { 
        if(document.querySelector('.tab_active'))
            document.querySelector('.tab_active').classList.remove('tab_active')
            document.querySelector('.tab__content_active').classList.remove('tab__content_active')
        item.classList.add('tab_active') 
        content[list.findIndex(item => item.className == 'tab tab_active')].classList.add('tab__content_active')
    }})
