let count = document.getElementById('clicker__counter')
let numcount = count.textContent
let image = document.getElementById('cookie')
let countTime = []


image.onclick = function() {
    image.width = 220;
    image.height = 150;
    numcount = Number(numcount) + 1
    if(numcount % 2) {
        image.width = 200;
        image.height = 127; 
    } else {
        image.width = 220;
        image.height = 150; 
    }
    count.textContent = numcount
    
    
    countTime.push(Date.now())
    if(countTime.length > 2)
        countTime.shift()
    let diff = ((countTime[1] - countTime[0])/1000)
    let total = 1/diff

    let tag = document.getElementById('speed')
    tag.textContent = total.toFixed(2) 
     
}