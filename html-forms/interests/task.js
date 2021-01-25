let checks = document.querySelectorAll('.interest__check')
function isTrue(index){
    if(checks[index].checked) {
        checks[index + 1].checked = true
        checks[index + 2].checked = true
    }
    if(!(checks[index].checked)) {
        checks[index + 1].checked = false
        checks[index + 2].checked = false 
    }
}

checks[0].addEventListener('change', ()=>{
    isTrue(0)
})
checks[3].addEventListener('change', ()=>{
    isTrue(3)
})