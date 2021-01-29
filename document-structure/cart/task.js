let item = Array.from(document.querySelectorAll('.product__quantity-value'))
let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
let add = Array.from(document.querySelectorAll('.product__add'))
let cart = document.querySelector('.cart__products')
let product = Array.from(document.querySelectorAll('.product'))


plus.forEach(e => {
    e.addEventListener('click', ()=> {
    item[plus.indexOf(e)].innerText= Number(item[plus.indexOf(e)].innerText) + 1})})

minus.forEach(e => {
    e.addEventListener('click', ()=> {
        if(item[minus.indexOf(e)].innerText == 1)
            return false
        item[minus.indexOf(e)].innerText = Number(item[minus.indexOf(e)].innerText) - 1

    })
})

add.forEach(e => {
    let ind = add.indexOf(e)
    
    e.addEventListener('click', ()=> {
        let cartItems = Array.from(document.querySelectorAll('.cart__product'))
        if(cartItems.some(i => i.dataset.id == product[ind].dataset.id)){
            let num = Number(document.querySelector('.cart__product-count').innerHTML)
            document.querySelector('.cart__product-count').innerHTML = num + Number(item[ind].innerHTML)
        } else {    
        cart.insertAdjacentHTML('afterBegin', `
            <div class="cart__product" data-id="${document.querySelectorAll('.product')[ind].dataset.id}">
                <div class="cart__product-count">${item[ind].innerText}</div>
                <img class="cart__product-image" src="${document.querySelectorAll('.product__image')[ind].src}">
            </div>`)
        }    
    })
})
