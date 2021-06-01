
const burguerMenuGral = document.querySelector('#menuburguergral');

const menuItemsGral = document.querySelectorAll('.menu-item-gral');



function navResponsiveGral(){
    burguerMenuGral.addEventListener('click', function(){
        document.body.classList.toggle('mobile-menugral-active');
    });


    menuItemsGral.forEach(function(menuItemGral){
    menuItemGral.addEventListener('click', function(){
        document.body.classList.remove('mobile-menugral-active');

        let currentItem = document.querySelector('.activo');
            currentItem.classList.remove('activo');
            
            this.classList.add('activo');
    });
    });

}

navResponsiveGral();

// galeria de imagenes

let modal = document.querySelector('.modal');
let images = document.querySelectorAll('.galeria img');
let modalImg = document.querySelector('#mimodalimg');
let imgBox = document.querySelectorAll('.listaimg img');
let caption = document.querySelector('.caption-text');
let closeImg = document.querySelector('.closeimg');

images.forEach((images) => {
    images.addEventListener('click', () => {
        modal.style.display='block'; // modifico el display de la clase .modal
        modalImg.src = images.src; // modifico el src de mi modal para que coincida con la img que clickee
        caption.innerHTML = images.alt; // imprimo el alt de la imagen que clickee
    })
})

imgBox.forEach(img => img.addEventListener('click', imgLightbox));

function imgLightbox (event) {
    modalImg.src = event.target.src; // cambio el src del modal para que coincida con el src de la imagen que clickee de la lista de imagenes que está dentro del modal
}

closeImg.addEventListener('click', () => {
    modal.style.display= 'none';
})

