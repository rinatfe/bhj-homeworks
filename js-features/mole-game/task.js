let kill = document.getElementById('dead')
let fail = document.getElementById('lost')
function getHole(index) {
    return document.getElementById('hole'+ index)
}

for(let i = 1; i < 10; i++) {
    getHole(i).onclick = function(){
        if(getHole(i).className == "hole hole_has-mole"){
            kill.textContent = Number(kill.textContent) + 1
        }else{
            fail.textContent = Number(fail.textContent) + 1
        } 
        
        if(kill.textContent == 10 && fail.textContent < 5) {
            alert('Вы выйграили')
            document.location.reload()
        }
        if(fail.textContent == 5) {
            alert('Вы проиграли')
            document.location.reload()
        }
    }
}



