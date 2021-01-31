const list = Array.from(document.querySelectorAll('.has-tooltip'))
list.forEach(item => {
    let title = item.title
    item.insertAdjacentHTML('afterEnd', '<div class="tooltip">' + `${title}` + '</div>')
    item.href = '#'
    item.addEventListener('click', ()=> {
        if(item.nextElementSibling.classList.contains('tooltip_active')) {
            item.nextElementSibling.classList.remove('tooltip_active')
            return false
        } else if(document.querySelector('.tooltip_active')) {  
            document.querySelector('.tooltip_active').classList.remove('tooltip_active')
            item.nextElementSibling.style=`left: ${item.getBoundingClientRect().left + 20}px; top: ${item.getBoundingClientRect().top + 20}px; position:absolute`
            item.nextElementSibling.classList.add('tooltip_active')
    
         
        } else {
            item.nextElementSibling.style=`left: ${item.getBoundingClientRect().left +20}px; top: ${item.getBoundingClientRect().top + 20}px; position:absolute`
            item.nextElementSibling.classList.add('tooltip_active')
        return false
        }
    })
})