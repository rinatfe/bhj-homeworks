const list = Array.from(document.querySelectorAll('.rotator__case'))

setInterval(()=> { 
    let index = list.findIndex(item => item == document.querySelector('.rotator__case_active')) 
    list[index].classList.remove('rotator__case_active')
    if(index === list.length - 1) {
        list[0].classList.add('rotator__case_active')
    } else{
        list[index + 1].classList.add('rotator__case_active')
    }
}, 1000) 