/* ======================================
EVENTOS.JS
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
            "img/eventos/posada/2.jpeg",
            "img/eventos/posada/3.jpeg",
            "img/eventos/posada/video.mp4"
        ]
    },

    olimpiadas: {
        titulo: "Mini Olimpiadas",
        archivos: [
            "img/eventos/olimpiadas/1.jpeg",
            "img/eventos/olimpiadas/2.jpeg",
            "img/eventos/olimpiadas/3.jpeg",
            "img/eventos/olimpiadas/video1.mp4",
            "img/eventos/olimpiadas/video2.mp4"
        ]
    },

    pascua: {
        titulo: "Pascua",
        archivos: [
            "img/eventos/pascua/1.jpeg",
            "img/eventos/pascua/2.jpeg",
            "img/eventos/pascua/3.jpeg",
            "img/eventos/pascua/video.mp4"
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

    ,nuevoevento: {
        titulo: "Nuevo Evento",
        archivos: [
            "img/eventos/nuevoevento/1.jpeg",
            "img/eventos/nuevoevento/2.jpeg",
            "img/eventos/nuevoevento/video.mp4"
        ]
    }

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

    /* ACTIVAR BOTON */
    if(boton){
        boton.classList.add('active');
    }

    const data = eventos[nombre];

    /* CAMBIAR TITULO */
    document.getElementById("evjpNombre").innerText = data.titulo;

    let html = "";

    data.archivos.forEach((archivo, index)=>{

        const extension = archivo.split('.').pop().toLowerCase();

        /* SI ES VIDEO */
        if(extension === "mp4" || extension === "webm" || extension === "ogg"){

            html += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <video class="d-block w-100 evjp-img" controls autoplay muted loop playsinline>
                    <source src="${archivo}" type="video/mp4">
                    Tu navegador no soporta video.
                </video>
            </div>
            `;

        }else{

            /* SI ES IMAGEN */
            html += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${archivo}" class="d-block w-100 evjp-img" alt="${data.titulo}">
            </div>
            `;

        }

    });

    /* INSERTAR SLIDES */
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
