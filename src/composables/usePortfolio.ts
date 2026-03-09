
import { projectsData, servicesData } from '@/data/portfolio'

export function usePortfolio() {
 
  const projects = projectsData


  const services = servicesData


  const getProjectById = (id: string | string[]) => {
    return projects.find(p => String(p.id) === String(id))
  }

 
  return {
    projects,
    services,
    getProjectById
  }
}