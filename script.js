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
        }
    });
});

function cargarPublicaciones() {
    fetch('publications-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publications-container').innerHTML = data;
        });
}

function actualizarContador() {
    let visitas = localStorage.getItem('visitas');
    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1;
    }
    localStorage.setItem('visits', visitas);
    document.getElementById('contador-visitas').textContent = `Visitas: ${visitas}`;
}

if (document.getElementById('contador-visitas')) {
    actualizarContador();
}
