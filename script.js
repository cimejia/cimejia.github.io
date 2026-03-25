// --- Configuración de Datos ---
const DATA_PATHS = {
    publications: 'data/publications.csv',
    courses: 'data/courses.csv',
    theses: 'data/theses.csv'
};

// --- Estado de la Aplicación ---
let state = {
    publications: [],
    courses: [],
    theses: [],
    theme: localStorage.getItem('theme') || 'light',
    isMenuOpen: false
};

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMenu();
    loadAllData();
    
    // Inicializar iconos de Lucide
    lucide.createIcons();
});

// --- Manejo del Tema (Oscuro/Claro) ---
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Aplicar tema inicial
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon();
    });
}

function updateThemeIcon() {
    const themeIcon = document.getElementById('themeIcon');
    themeIcon.setAttribute('data-lucide', state.theme === 'light' ? 'moon' : 'sun');
    lucide.createIcons();
}

// --- Menú Móvil ---
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');

    menuToggle.addEventListener('click', () => {
        state.isMenuOpen = !state.isMenuOpen;
        navLinks.classList.toggle('active', state.isMenuOpen);
        menuIcon.setAttribute('data-lucide', state.isMenuOpen ? 'x' : 'menu');
        lucide.createIcons();
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            state.isMenuOpen = false;
            navLinks.classList.remove('active');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

// --- Carga de Datos ---
async function loadAllData() {
    try {
        const [pubs, courses, theses] = await Promise.all([
            fetchCSV(DATA_PATHS.publications),
            fetchCSV(DATA_PATHS.courses),
            fetchCSV(DATA_PATHS.theses)
        ]);

        state.publications = pubs;
        state.courses = courses;
        state.theses = theses;

        renderPublications();
        renderCourses();
        renderTheses();
        initFilters();
    } catch (error) {
        console.error('Error loading data:', error);
        document.querySelectorAll('.loading').forEach(el => {
            el.textContent = 'Error loading data.';
        });
    }
}

// Parser de CSV simple (sin librerías)
async function fetchCSV(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Loading is not possible ${path}`);
    const text = await response.text();
    
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
        // Manejo básico de comas dentro de comillas
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let char of line) {
            if (char === '"') inQuotes = !inQuotes;
            else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = values[i] ? values[i].replace(/^"|"$/g, '') : '';
        });
        return obj;
    });
}

// --- Renderizado ---

function renderPublications(filtered = state.publications) {
    const container = document.getElementById('publicationsList');
    container.innerHTML = filtered.map(pub => `
        <div class="card publication-card">
            <div class="pub-year">${pub.Year}</div>
            <div class="pub-content">
                <h3>${pub.Title}</h3>
                <p class="pub-authors">${pub.Authors}</p>
                <div class="pub-meta">
                    <span class="pub-journal">${pub.Journal}</span>
                    ${pub.DOI ? `<a href="${pub.DOI}" target="_blank" class="pub-link">DOI <i data-lucide="external-link" style="width:14px;height:14px"></i></a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderCourses(filtered = state.courses) {
    const container = document.getElementById('coursesList');
    container.innerHTML = filtered.map(course => `
        <div class="card course-card">
            <div class="card-header">
                <span class="course-year">${course.Year}</span>
                ${course.SyllabusLink ? `<a href="${course.SyllabusLink}" class="icon-btn"><i data-lucide="file-text"></i></a>` : ''}
            </div>
            <h3>${course.CourseName}</h3>
            <p class="course-program">${course.Program}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderTheses(filtered = state.theses) {
    const container = document.getElementById('thesesList');
    container.innerHTML = filtered.map(thesis => `
        <div class="card thesis-card">
            <div class="thesis-year">${thesis.Year}</div>
            <div class="thesis-info">
                <h4 class="font-bold">${thesis.Title}</h4>
                <p class="text-sm text-muted">${thesis.Student}</p>
            </div>
            <div class="thesis-type">${thesis.Type}</div>
        </div>
    `).join('');
    lucide.createIcons();
}

// --- Filtros ---
function initFilters() {
    // Años para el filtro de publicaciones
    const years = [...new Set(state.publications.map(p => p.Year))].sort((a, b) => b - a);
    const yearSelect = document.getElementById('pubYearFilter');
    years.forEach(year => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearSelect.appendChild(opt);
    });

    // Eventos de búsqueda
    document.getElementById('pubSearch').addEventListener('input', filterPublications);
    document.getElementById('pubYearFilter').addEventListener('change', filterPublications);
    document.getElementById('courseSearch').addEventListener('input', filterCourses);
    document.getElementById('thesisSearch').addEventListener('input', filterTheses);
}

function filterPublications() {
    const search = document.getElementById('pubSearch').value.toLowerCase();
    const year = document.getElementById('pubYearFilter').value;
    
    const filtered = state.publications.filter(pub => {
        const matchesSearch = pub.Title.toLowerCase().includes(search) || pub.Authors.toLowerCase().includes(search);
        const matchesYear = year === 'all' || pub.Year === year;
        return matchesSearch && matchesYear;
    });
    
    renderPublications(filtered);
}

function filterCourses() {
    const search = document.getElementById('courseSearch').value.toLowerCase();
    const filtered = state.courses.filter(c => 
        c.CourseName.toLowerCase().includes(search) || c.Program.toLowerCase().includes(search)
    );
    renderCourses(filtered);
}

function filterTheses() {
    const search = document.getElementById('thesisSearch').value.toLowerCase();
    const filtered = state.theses.filter(t => 
        t.Title.toLowerCase().includes(search) || t.Student.toLowerCase().includes(search)
    );
    renderTheses(filtered);
}
