let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')

xhr.responseType = 'json'

xhr.send()

let poll = document.getElementById('poll__title')
let answer = document.getElementById('poll__answers')
let button = Array.from(document.querySelectorAll('.poll__answer'))


let timer = setInterval(() => {
    xhr.onload = ()=> alert('Load')
    if(xhr.readyState === 4){
        poll.innerText = xhr.response.data.title
        for(let i=0; i< xhr.response.data.answers.length; i++){
            let button = document.createElement('button')
            button.classList.add('poll__answer')
            button.innerHTML = xhr.response.data.answers[i]
            button.onclick = ()=> alert('Спасибо ваш голос засчитан')
             answer.prepend(button)
        }
        clearInterval(timer) } 
}, 1000);