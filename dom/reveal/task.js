const card = document.querySelectorAll('.reveal')
window.addEventListener('scroll', () => card.forEach(item => {
    if(item.getBoundingClientRect().top < window.innerHeight) 
        item.classList.add('reveal_active') 
    }))