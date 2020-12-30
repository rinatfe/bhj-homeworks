const left = document.querySelector('.slider__arrow_prev')
const right = document.querySelector('.slider__arrow_next')
const image = document.querySelectorAll('.slider__item')
const arr = Array.from(image)

left.onclick = () => {
    let forget = document.querySelector('.slider__item_active')
    let num = arr.indexOf(forget)
    forget.className = 'slider__item'
    if(num === 0) {
        arr[arr.length - 1].className = 'slider__item slider__item_active'
    } else{
        arr[num - 1].className = 'slider__item slider__item_active'
    }       
}

right.onclick = () => {
    let forget = document.querySelector('.slider__item_active')
    let num = arr.indexOf(forget)
    forget.className = 'slider__item'
    if(num === arr.length - 1) {
        arr[0].className = 'slider__item slider__item_active'
    } else{
        arr[num + 1].className = 'slider__item slider__item_active'
    }       
}