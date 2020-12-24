/*const countDown = document.getElementById('timer')
let interval = setInterval(() => { 
    countDown.textContent = Number(countDown.textContent) - 1 
    if(countDown.textContent == 0) {
        alert('Вы победили в конкурсе') 
        clearInterval(interval)
    }
}, 1000)*/

//#1-2
const countDown = document.getElementById('timer')
let hh = '00';
let mm = '00';
let ss = '01';
let time = function (data) {
    if(data < 10)
        return data = '0' + data
    return data    
}


function ex() {
    if(ss == 00 && mm == 00) {
        mm = 59
        ss = 59
        hh = hh - 1
        hh = time(hh)
    } else if(ss == 00) {
        mm = mm - 1
        ss = 59;
        mm = time(mm)
              
    } else {
        ss = ss - 1
        ss = time(ss) 
    } 
    
    if(hh == 00 && mm == 00 && ss == 00)
        return countDown.textContent = `${hh}` + ':' + `${mm}` + ':' + `${ss}`
}
let interval = setInterval(()=> {
    ex()
    if(countDown.textContent == '00:00:00') {
        window.location.href = 'https://netology.ru'
        clearInterval(interval)
    }
}, 1000)




