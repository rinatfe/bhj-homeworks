document.querySelector('.chat-widget').onclick = ()=> {
    document.querySelector('.chat-widget').classList.add('chat-widget_active') 
}

function convert(item) {
 if(item < 10)
    return '0' + item
 return item   
}
const hour = convert((new Date()).getHours())
const minutes = convert((new Date()).getMinutes())
let time = `${hour}` + ':' + `${minutes}`
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.getElementById('chat-widget__input')
const list = ['Добрый день', 'Москва не сразу строилась', 'И вам того же', 'Где деньги?']

document.addEventListener('keydown', ()=> {
    if(event.key == 'Enter' && input.value !== '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">
                  ${input.value}
                </div>
            </div>`
        input.value = ''
    }
})




document.addEventListener('keyup', ()=> {
    let listItem = list[Math.floor(Math.random() * list.length)]
    if(event.key == 'Enter' && document.querySelector('.message_client')) {
        messages.innerHTML += `
            <div class="message message">
                <div class="message__time">${time}</div>
                <div class="message__text">
                  ${listItem}
                </div>
            </div>`
    }  
})