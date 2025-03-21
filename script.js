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
        } else if (id === 'tesis') {
            cargarTesis();
        } else if (id === 'cursos') {
            cargarTeaching();
        } else if (id === 'capacitaciones') {
            cargarTrainings();
        } else if (id === 'contacto') {
            cargarContacto();
        }
    });
});

function cargarHome() {
    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home-container').innerHTML = data;
            document.getElementById('publications-container').innerHTML = '';
            document.getElementById('theses-container').innerHTML = '';
            document.getElementById('teaching-container').innerHTML = '';
            document.getElementById('trainings-container').innerHTML = '';
            document.getElementById('contact-container').innerHTML = '';
        });
}

function cargarPublicaciones() {
    fetch('publications.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publications-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = '';
            document.getElementById('theses-container').innerHTML = '';
            document.getElementById('teaching-container').innerHTML = '';
            document.getElementById('trainings-container').innerHTML = '';
            document.getElementById('contact-container').innerHTML = '';
        });
}

function cargarTesis() {
    fetch('theses.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('theses-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = '';
            document.getElementById('publications-container').innerHTML = '';
            document.getElementById('teaching-container').innerHTML = '';
            document.getElementById('trainings-container').innerHTML = '';
            document.getElementById('contact-container').innerHTML = '';
        });
}

function cargarTeaching() {
    fetch('teaching.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('teaching-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = '';
            document.getElementById('publications-container').innerHTML = '';
            document.getElementById('theses-container').innerHTML = '';
            document.getElementById('trainings-container').innerHTML = '';
            document.getElementById('contact-container').innerHTML = '';
        });
}

function cargarTrainings() {
    fetch('trainings.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('trainings-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = '';
            document.getElementById('publications-container').innerHTML = '';
            document.getElementById('theses-container').innerHTML = '';
            document.getElementById('teaching-container').innerHTML = '';
            document.getElementById('contact-container').innerHTML = '';
        });
}

function cargarContacto() {
    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = '';
            document.getElementById('publications-container').innerHTML = '';
            document.getElementById('theses-container').innerHTML = '';
            document.getElementById('teaching-container').innerHTML = '';
            document.getElementById('trainings-container').innerHTML = '';
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

cargarHome();
