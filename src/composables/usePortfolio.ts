// Importamos los datos que ya tienes creados
import { projectsData, servicesData } from '@/data/portfolio'

export function usePortfolio() {
  // Función para obtener todos los proyectos
  const projects = projectsData

  // Función para obtener los servicios
  const services = servicesData

  // Función especial para buscar un proyecto por su ID
  const getProjectById = (id: string | string[]) => {
    return projects.find(p => String(p.id) === String(id))
  }

  // "Exportamos" todo para que las páginas puedan usarlo
  return {
    projects,
    services,
    getProjectById
  }
}