const list = Array.from(document.querySelectorAll('.has-tooltip'))
list.forEach(item => {
    item.addEventListener('click', ()=> {
        item.href = '#'
        let title = item.title
        if(document.querySelector('.tooltip') && document.querySelector('.tooltip').innerText == title) {
            return false
        } else {
            item.insertAdjacentHTML('afterEnd', '<div class="tooltip">' + `${title}` + '</div>')
        }    
        return false
    })
})