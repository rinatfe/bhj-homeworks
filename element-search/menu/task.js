const menu = document.querySelectorAll('.menu__link')

for(let i = 0; i < menu.length; i++) {
    menu[i].onclick = () => {
        if(document.querySelector('.menu_active')) {
            let clear = document.querySelector('.menu_active');
            clear.className = 'menu menu_sub'
        } 
        
        if(menu[i].parentElement.querySelector('.menu_sub')) {
            menu[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub menu_active"
            return false
        }
           
    }
}
