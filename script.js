const enlaces = document.querySelectorAll('nav a');
const secciones = document.querySelectorAll('.seccion');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        const id = enlace.getAttribute('href').substring(1);

        secciones.forEach(seccion => {
            seccion.classList.remove('activa');
        });

        document.getElementById(id).classList.add('activa');

        if (id === 'publicaciones') {
            cargarPublicaciones();
        } else if (id === 'inicio') {
            cargarHome();
        }
    });
});

function cargarHome() {
    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home-container').innerHTML = data;
            document.getElementById('publications-container').innerHTML = ''; // Limpiar el contenedor de publicaciones
        });
}

function cargarPublicaciones() {
    fetch('publications.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publications-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = ''; // Limpiar el contenedor de home
        });
}

function actualizarContador() {
    let visitas = localStorage.getItem('visitas');
    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1;
    }
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador-visitas').textContent = `Visits: ${visitas}`;
}

if (document.getElementById('contador-visitas')) {
    actualizarContador();
}

cargarHome(); // Cargar home.html al inicio
