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
        } else if (id === 'mywork') {
            cargarMywork();
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

function cargarMywork() {
    fetch('portfolio.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mywork-container').innerHTML = data;
            document.getElementById('home-container').innerHTML = '';
            document.getElementById('publications-container').innerHTML = '';
            document.getElementById('theses-container').innerHTML = '';
            document.getElementById('teaching-container').innerHTML = '';
            document.getElementById('trainings-container').innerHTML = '';
            document.getElementById('contact-container').innerHTML = '';
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

// Portfolio Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.portfolio-card');
    
    cards.forEach(card => {
        // Click effect
        card.addEventListener('click', function() {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
        });
        
        // Touch devices support
        card.addEventListener('touchstart', function() {
            this.classList.add('touched');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touched');
            }, 200);
        });
    });
});

cargarHome();
