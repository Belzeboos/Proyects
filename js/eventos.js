/* ======================================
EVENTOS.JS
Colegio Jean Piaget Ixtapa
====================================== */

const eventos = {

    independencia: {
        titulo: "Día de la Independencia",
        archivos: [
            "img/eventos/independencia/1.jpeg",
            "img/eventos/independencia/2.jpeg",
            "img/eventos/independencia/3.jpeg"
        ]
    },

    revolucion: {
        titulo: "Revolución Mexicana",
        archivos: [
            "img/eventos/revolucion/1.jpeg",
            "img/eventos/revolucion/2.jpeg"
        ]
    },

    muertos: {
        titulo: "Día de Muertos",
        archivos: [
            "img/eventos/muertos/1.jpeg",
            "img/eventos/muertos/2.jpeg",
            "img/eventos/muertos/3.jpeg"
        ]
    },

    posada: {
        titulo: "Posada Navideña",
        archivos: [
            "img/eventos/posada/1.jpeg",
            "img/eventos/posada/2.jpeg"
        ]
    },

    olimpiadas: {
        titulo: "Mini Olimpiadas",
        archivos: [
            "img/eventos/olimpiadas/1.jpeg",
            "img/eventos/olimpiadas/2.jpeg"
        ]
    },

    pascua: {
        titulo: "Pascua",
        archivos: [
            "img/eventos/pascua/1.jpeg",
            "img/eventos/pascua/2.jpeg"
        ]
    },

    madre: {
        titulo: "Día de la Madre",
        archivos: [
            "img/eventos/madre/1.jpeg",
            "img/eventos/madre/2.jpeg"
        ]
    },

    padre: {
        titulo: "Día del Padre",
        archivos: [
            "img/eventos/padre/1.jpeg",
            "img/eventos/padre/2.jpeg"
        ]
    },

    graduacion: {
        titulo: "Graduación",
        archivos: [
            "img/eventos/graduacion/1.jpeg",
            "img/eventos/graduacion/2.jpeg"
        ]
    }

    /* ======================================
    PARA AGREGAR MÁS EVENTOS:

    nombrecarpeta: {
        titulo: "Nuevo Evento",
        archivos: [
            "img/eventos/nombrecarpeta/1.jpg",
            "img/eventos/nombrecarpeta/2.jpg"
        ]
    },
    ====================================== */
};


/* ======================================
FUNCION CAMBIAR EVENTO
====================================== */
function mostrarEvento(nombre, boton){

    /* QUITAR BOTON ACTIVO */
    document.querySelectorAll('.evjp-btn').forEach(btn=>{
        btn.classList.remove('active');
    });

    /* ACTIVAR BOTON SELECCIONADO */
    boton.classList.add('active');

    const data = eventos[nombre];

    /* CAMBIAR TITULO */
    document.getElementById("evjpNombre").innerText = data.titulo;

    /* CREAR IMAGENES */
    let html = "";

    data.archivos.forEach((archivo, index)=>{

        html += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${archivo}" class="d-block w-100 evjp-img" alt="${data.titulo}">
        </div>
        `;
    });

    /* INSERTAR HTML */
    document.getElementById("evjpSlides").innerHTML = html;

    /* REINICIAR CARRUSEL */
    const carousel = document.querySelector('#carouselEventos');
    const instancia = bootstrap.Carousel.getOrCreateInstance(carousel);
    instancia.to(0);
}


/* ======================================
CARGA INICIAL
====================================== */
document.addEventListener("DOMContentLoaded", function(){

    const primerBoton = document.querySelector('.evjp-btn.active');

    if(primerBoton){
        mostrarEvento('independencia', primerBoton);
    }

});
