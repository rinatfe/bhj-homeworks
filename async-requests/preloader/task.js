let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.responseType = 'json';

xhr.send();


let timer = setInterval(() => {
    xhr.onload = ()=> alert('Load')
    if(xhr.readyState === 4){
        document.getElementById('loader').classList.remove('loader_active')
        insertItem()
        clearInterval(timer) } 
}, 1000);

function insertItem() {
    for(let i in xhr.response.response.Valute) {
        document.getElementById('items').insertAdjacentHTML('afterBegin', `<div class="item">
            <div class="item__code">
            ${xhr.response.response.Valute[i].CharCode}
            </div>
            <div class="item__value">
            ${xhr.response.response.Valute[i].Value}
            </div>
            <div class="item__currency">
                .руб
            </div>
        </div>`)
    }
}