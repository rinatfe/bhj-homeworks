const list = Array.from(document.querySelectorAll('.font-size'))
const big = document.querySelector('.font-size_big')
const small = document.querySelector('.font-size_small')
const book = document.getElementById('book')
let index = list.findIndex(item => item == document.querySelector('.font-size_active'))
big.setAttribute('href', '#')
small.setAttribute('href', '#')

let exchange = function(item) {
    if(item.classList.contains('font-size_big')) {
        if(book.classList.contains('font-size_small'))
            book.classList.remove('font-size_small')
            small.classList.remove('font-size_active')
        list[index].classList.remove('font-size_active')
        big.classList.add('font-size_active')
        book.classList.add('font-size_big')
        book.classList.remove('font-size_small')
        return false
    }    
    if(item.classList.contains('font-size_small')) {
        if(book.classList.contains('font-size_big'))
            book.classList.remove('font-size_big')
            big.classList.remove('font-size_active')  
        list[index].classList.remove('font-size_active')
        small.classList.add('font-size_active')
        book.classList.add('font-size_small')
        return false }
}

list.forEach(item => item.addEventListener('click', ()=> exchange(item)))
