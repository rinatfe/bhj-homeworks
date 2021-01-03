const menu = document.querySelectorAll('.menu__link')
let count = 0

for(let i = 0; i < menu.length; i++) {
    menu[i].onclick = () => {
        count = count + 1
        console.log(count)
        if(document.querySelector('.menu_active') && !(menu[i].parentElement.querySelector('.menu_active'))) {
            document.querySelector('.menu_active').classList.remove('menu_active') 
            menu[i].parentElement.querySelector('.menu_sub').classList.add('menu_active')
            count = 1 
            return false
        } else if(menu[i].parentElement.querySelector('.menu_sub')) {
            menu[i].parentElement.querySelector('.menu_sub').classList.add("menu_active")
            if(!(count % 2))
                menu[i].parentElement.querySelector('.menu_sub').classList.remove("menu_active")
            return false
            
        }
    }
    
}
