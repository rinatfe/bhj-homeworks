const left = document.querySelector('.slider__arrow_prev')
const right = document.querySelector('.slider__arrow_next')
const image = document.querySelectorAll('.slider__item')
const collection = Array.from(image)

left.onclick = () => {
    let forget = collection.findIndex(item => item == document.querySelector('.slider__item_active'))
    collection[forget].classList.remove('slider__item_active')
    if(forget === 0) {
        collection[collection.length - 1].classList.add('slider__item_active')
    } else{
        collection[forget - 1].classList.add('slider__item_active')
    }       
}

right.onclick = () => {
    let forget = collection.findIndex(item => item == document.querySelector('.slider__item_active'))
    collection[forget].classList.remove('slider__item_active')
    if(forget === collection.length - 1) {
        collection[0].classList.add('slider__item_active')
    } else{
        collection[forget + 1].classList.add('slider__item_active')
    }       
}