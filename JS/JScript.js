let textotomi = document.getElementById("texto-tomi")
let textotomiarray= textotomi.textContent.split('')
textotomi.textContent= ''

for(var i = 0; i < textotomiarray.length; i++){
    textotomi.innerHTML += '<span style="transform:rotate('+((i+1)*25)+'deg)">' +textotomiarray[i]+'</span>';
}


/* MENU HAMBURGUESA DE MENU HOME */
const burgerMenuBtn = document.querySelector('#menuburguer');

/* En este caso, al ser varios items y seleccionarlos todos, lo que se guarda
en la constante menuItems es una lista de nodos*/
const menuItems = document.querySelectorAll('.menu-item');

function navResponsive() {

    // Agrego o quito una clase al body para cambiar los estilos del menú
    burgerMenuBtn.addEventListener( 'click', function() {
        document.body.classList.toggle('mobile-menu-active');
    });

    //recorro la lista de nodos menuItems
    menuItems.forEach(function(menuItem) {  
        //ejecuto el método addEventListener() en cada uno
        menuItem.addEventListener('click', function() {
            //Al clickear un item del menu mobile, este se cierra 
            document.body.classList.remove('mobile-menu-active');

            /* agrego la clase active para modificar con CSS a los items 
            del menu clickeados */
            let currentItem = document.querySelector('.active');
            currentItem.classList.remove('active');
            //la palabra this hace referencia al item del menu que haya sido clickeado
            this.classList.add('active');

        })

    });

}

navResponsive();







