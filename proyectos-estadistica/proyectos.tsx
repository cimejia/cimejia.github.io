/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Define the structure for project data for type safety
interface Project {
  title: string;
  description: string;
  image: string;
}

interface CategoryData {
  title: string;
  description: string;
  projects: Project[];
}

interface ProjectData {
  [key: string]: CategoryData;
}

// Mock data for projects in each category
const projectData: ProjectData = {
  geologia: {
    title: 'Geología',
    description: 'Proyectos dedicados al estudio y exploración del subsuelo para comprender la composición, estructura e historia de nuestro planeta.',
    projects: [
      {
        title: 'Análisis Geotécnico Andino',
        description: 'Estudio de estabilidad de taludes y cimentaciones en la desafiante geografía de la cordillera de los Andes.',
        image: 'https://images.unsplash.com/photo-1551493725-781f336faf3e?q=80&w=870&auto=format&fit=crop'
      },
      {
        title: 'Exploración de Yacimientos',
        description: 'Prospección geofísica y geoquímica para la detección de nuevos depósitos minerales y recursos energéticos.',
        image: 'https://images.unsplash.com/photo-1576487248805-cf40f934503a?q=80&w=870&auto=format&fit=crop'
      },
      {
        title: 'Cartografía Geológica Digital',
        description: 'Mapeo detallado de formaciones rocosas y fallas utilizando tecnología LIDAR y sistemas de información geográfica (SIG).',
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=774&auto=format&fit=crop'
      }
    ]
  },
  minas: {
    title: 'Minas',
    description: 'Desarrollo de proyectos de extracción y procesamiento de minerales, enfocados en la eficiencia, seguridad y sostenibilidad ambiental.',
    projects: [
      {
        title: 'Mina de Cobre "El Gigante"',
        description: 'Optimización de procesos de voladura y carguío mediante el uso de modelado 3D y equipos autónomos.',
        image: 'https://images.unsplash.com/photo-1621282635327-511da4546571?q=80&w=870&auto=format&fit=crop'
      },
      {
        title: 'Seguridad en Minería Subterránea',
        description: 'Implementación de sistemas de monitoreo de gases en tiempo real y protocolos de ventilación inteligente.',
        image: 'https://images.unsplash.com/photo-1549921297-c247c43b35f2?q=80&w=870&auto=format&fit=crop'
      }
    ]
  },
  petroleos: {
    title: 'Petróleos',
    description: 'Proyectos de exploración, extracción y refinación de hidrocarburos, aplicando tecnologías avanzadas para maximizar la producción de forma segura.',
    projects: [
      {
        title: 'Plataforma "Mar Profundo"',
        description: 'Perforación exploratoria en aguas ultra profundas, superando desafíos técnicos y logísticos de alta complejidad.',
        image: 'https://images.unsplash.com/photo-1506528362522-b1536a42c3df?q=80&w=870&auto=format&fit=crop'
      },
      {
        title: 'Refinería del Pacífico',
        description: 'Modernización de la unidad de craqueo catalítico para producir combustibles más limpios y eficientes.',
        image: 'https://images.unsplash.com/photo-1619522294299-47865c6361a4?q=80&w=774&auto=format&fit=crop'
      },
      {
        title: 'Recuperación Mejorada de Petróleo',
        description: 'Inyección de polímeros y CO2 para aumentar el factor de recobro en campos maduros.',
        image: 'https://images.unsplash.com/photo-1563233309-724d2703a385?q=80&w=870&auto=format&fit=crop'
      }
    ]
  },
  ambiente: {
    title: 'Ambiente',
    description: 'Desarrollo de soluciones innovadoras para la gestión ambiental, la mitigación del impacto ecológico y la promoción de un futuro sostenible.',
    projects: [
      {
        title: 'Restauración de Bosque Nativo',
        description: 'Proyecto de reforestación a gran escala en zonas degradadas por actividades industriales, recuperando la biodiversidad.',
        image: 'https://images.unsplash.com/photo-1518623380242-d992d13967d3?q=80&w=870&auto=format&fit=crop'
      },
      {
        title: 'Gestión de Recursos Hídricos',
        description: 'Estudio de cuencas y optimización del uso del agua para comunidades y agricultura, mediante sensores y análisis de datos.',
        image: 'https://images.unsplash.com/photo-1598104432227-537b01b52587?q=80&w=774&auto=format&fit=crop'
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const categoryKey = params.get('categoria');

  const categoryTitleElement = document.getElementById('category-title');
  const categoryDescriptionElement = document.getElementById('category-description');
  const projectGalleryElement = document.getElementById('project-gallery');
  const pageTitleElement = document.querySelector('title');

  if (categoryKey && projectData[categoryKey] && categoryTitleElement && projectGalleryElement && pageTitleElement && categoryDescriptionElement) {
    const data = projectData[categoryKey];
    
    // Update header and page title
    categoryTitleElement.textContent = `Proyectos de ${data.title}`;
    categoryDescriptionElement.textContent = data.description;
    pageTitleElement.textContent = `Proyectos de ${data.title} | Galería`;
    
    // Clear gallery before populating
    projectGalleryElement.innerHTML = '';
    
    // Populate projects
    if (data.projects.length > 0) {
      data.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        const projectId = `${project.title.replace(/\s+/g, '-').toLowerCase()}-title`;
        card.setAttribute('aria-labelledby', projectId);

        card.innerHTML = `
          <img src="${project.image}" alt="Imagen representativa del proyecto: ${project.title}">
          <div class="card-content">
            <h2 id="${projectId}">${project.title}</h2>
            <p>${project.description}</p>
          </div>
        `;
        projectGalleryElement.appendChild(card);
      });
    } else {
      projectGalleryElement.innerHTML = '<p>No hay proyectos en esta categoría por el momento.</p>';
    }

  } else {
    // Handle error case where category is not found
    if (categoryTitleElement) categoryTitleElement.textContent = 'Categoría no encontrada';
    if (categoryDescriptionElement) categoryDescriptionElement.innerHTML = '';
    if (projectGalleryElement) projectGalleryElement.innerHTML = '<p>La categoría que buscas no existe. Por favor, <a href="index.html" class="back-link" style="text-decoration: underline;">vuelve a la galería</a> y selecciona una opción válida.</p>';
  }
});