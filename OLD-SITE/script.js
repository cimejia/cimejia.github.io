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

// Btn explorer
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('exploreBtn');
    const portfolioSection = document.getElementById('portfolioSection');
    
    if(exploreBtn && portfolioSection) {
        exploreBtn.addEventListener('click', function() {
            if(portfolioSection.style.display === 'none') {
                portfolioSection.style.display = 'block';
                this.textContent = 'Hide My Work ↑';
                // Desplazamiento suave
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                portfolioSection.style.display = 'none';
                this.textContent = 'Explore My Work ↓';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('exploreWorkBtn');
    const portfolioContent = document.getElementById('portfolioContent');
    const arrow = document.querySelector('.arrow');
    
    if (exploreBtn && portfolioContent) {
        exploreBtn.addEventListener('click', function() {
            // Alternar visibilidad
            portfolioContent.classList.toggle('hidden');
            
            // Cambiar texto y flecha
            if (portfolioContent.classList.contains('hidden')) {
                exploreBtn.innerHTML = 'Explore My Work <span class="arrow">↓</span>';
            } else {
                exploreBtn.innerHTML = 'Hide My Work <span class="arrow">↑</span>';
                // Desplazamiento suave
                portfolioContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Cargar proyectos dinámicamente (opcional)
        loadProjects();
    }
    
    function loadProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        // Ejemplo de proyectos (puedes reemplazar con tus datos reales)
        const projects = [
            {
                title: "Machine Learning Research",
                description: "Advanced algorithms for healthcare applications",
                tags: ["Python", "TensorFlow"]
            },
            {
                title: "NLP for Indigenous Languages",
                description: "Language processing for Kichwa preservation",
                tags: ["NLP", "Python"]
            }
        ];
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }
});

cargarHome();
