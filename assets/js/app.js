var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerClientHeight = header.clientHeight;
var menuItems = document.querySelectorAll('#navigation li a[href*="#"]');

mobileMenu.onclick = function() {
    var isClose = header.clientHeight  === headerClientHeight;
    if(isClose) {
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
   
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling  && this.nextElementSibling.classList.contains('subnav')
        if(!isParentMenu){
            header.style.height = null;
        }else{
            event.preventDefault();
        }
    }
}