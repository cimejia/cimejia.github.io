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
        console.error('Error cargando datos:', error);
        document.querySelectorAll('.loading').forEach(el => {
            el.textContent = 'Error cargando los datos. Por favor, intenta de nuevo.';
        });
    }
}

// Parser de CSV (punto y coma como delimitador)
async function fetchCSV(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`No se pudo cargar ${path}`);
    const text = await response.text();
    
    const lines = text.split('\n').filter(line => line.trim() !== '');
    // Delimitador cambiado a punto y coma
    const headers = lines[0].split(';').map(h => h.trim());
    
    return lines.slice(1).map(line => {
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let char of line) {
            if (char === '"') inQuotes = !inQuotes;
            else if (char === ';' && !inQuotes) { // Delimitador cambiado a punto y coma
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        const obj = {};
        headers.forEach((header, i) => {
            if (header) {
                obj[header] = values[i] ? values[i].replace(/^"|"$/g, '') : '';
            }
        });
        return obj;
    });
}

// --- Renderizado ---

function renderPublications(filtered = state.publications) {
    const container = document.getElementById('publicationsList');
    container.innerHTML = filtered.map(pub => {
        const keys = Object.keys(pub);
        return `
            <div class="card publication-card">
                <div class="pub-year">${pub[keys[3]] || ''}</div>
                <div class="pub-content">
                    <h3>${pub[keys[0]] || ''}</h3>
                    <p class="pub-authors"> ${pub[keys[1]] || ''}</p>
                    <p class="pub-keywords"> ${pub[keys[5]] || ''}, ${pub[keys[6]] || ''}</p>
                    <div class="pub-meta">
                        ${pub[keys[11]] ? `<a href="${pub[keys[11]]}" target="_blank" class="pub-link">Ver publicación <i data-lucide="external-link" style="width:14px;height:14px"></i></a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function renderCourses(filtered = state.courses) {
    const container = document.getElementById('coursesList');
    container.innerHTML = filtered.map(course => {
        const keys = Object.keys(course);
        return `
            <div class="card course-card">
                <div class="card-header">
                    <span class="course-year">${course[keys[1]] || ''}</span>
                    <!--
                    ${course[keys[3]] ? `<a href="${course[keys[3]]}" target="_blank" class="icon-btn" title="Syllabus"><i data-lucide="file-text"></i></a>` : ''}
                   -->
                </div>
                <h3>${course[keys[3]] || ''}</h3>
                <p class="course-program">${course[keys[5]] || ''}</p>
                <p class="course-desc">${course[keys[7]] || ''}</p>
                <p class="course-date">${course[keys[8]] || ''} to ${course[keys[9]] || ''}</p>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function renderTheses(filtered = state.theses) {
    const container = document.getElementById('thesesList');
    container.innerHTML = filtered.map(thesis => {
        const keys = Object.keys(thesis);
        return `
            <div class="card thesis-card">
                <div class="thesis-year">${thesis[keys[5]] || ''}</div>
                <div class="thesis-info">
                    <h4 class="font-bold">${thesis[keys[0]] || ''}</h4>
                    <p class="pub-authors">${thesis[keys[1]] || ''}</p>
                    <p class="text-sm">${thesis[keys[2]] || ''}, ${thesis[keys[3]] || ''}</p>
                    <p class="course-program">${thesis[keys[4]] || ''}, ${thesis[keys[6]] || ''}</p>
                </div>
                <div class="thesis-actions">
                    ${thesis[keys[7]] ? `<a href="${thesis[keys[11]]}" target="_blank" class="pub-link">View <i data-lucide="external-link" style="width:14px;height:14px"></i></a>` : ''}
                </div>
            </div>
        `;
    }).join('');
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
