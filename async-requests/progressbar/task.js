let progress = document.getElementById('progress')

let form = document.getElementById('form')
form.addEventListener('submit', ()=> {
    event.preventDefault()
    let xhr = new XMLHttpRequest();
    let formData = new FormData();
    let file = document.querySelector('input').files[0]
    formData.append('object', file)
    xhr.upload.onprogress = ()=>{
        console.log('Загружено ' + event.loaded + ' байт из ' + event.total)
        progress.value = event.loaded/event.total
        if(event.total === event.loaded)
            alert('Файл загружен')
    }
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData)
})






