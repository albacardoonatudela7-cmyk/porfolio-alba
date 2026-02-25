// src/data/portfolio.ts

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client?: string; // Campo opcional para los nombres de las influencers
}

export interface Service {
  title: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "CREFAD 2026",
    category: "Diseño e Identidad",
    description: "Diseño de la identidad visual y el logotipo oficial del congreso CREFAD 2026. Proyecto ganador del concurso oficial, actualmente en marcha como imagen representativa.",
    image: "/img/proyecto1.jpg",
    tags: ["Illustrator", "After Effects"]
  },
  {
    id: 2,
    title: "Cartel Teatral: Pecados Capitales",
    category: "Diseño Gráfico",
    description: "Diseño disruptivo y conceptual para una obra de teatro. Utilicé técnicas de escaneado para lograr una estética potente y original.",
    image: "/img/proyecto2.jpg",
    tags: ["Técnica Escaneado", "Photoshop", "InDesign"]
  },
  {
    id: 3,
    title: "Lo que nos mueve",
    category: "Branding e Identidad",
    description: "Identidad visual completa para programa de intercambio cultural: logo, carteles, mupis y campaña en redes sociales incluyendo video-anuncio.",
    image: "/img/proyecto3.jpg",
    tags: ["Illustrator", "InDesign", "After Effects", "Premiere"]
  },
  {
    id: 4,
    title: "KAOKA Chocolate",
    category: "Branding y Packaging",
    description: "Desarrollo de packaging para tableta de chocolate puro y estrategia visual para redes sociales.",
    image: "/img/proyecto4.jpg",
    tags: ["Illustrator", "After Effects", "Procreate"]
  },
  {
    id: 5,
    title: "Edición Creativa para Creadores",
    category: "Edición de Video",
    description: "Edición de contenido dinámico para TikTok y YouTube, optimizando la retención y la experiencia visual según el estilo de cada creador.",
    image: "/img/proyecto5.jpg",
    tags: ["CapCut", "Premiere", "After Effects"],
    client: "Mery Rodríguez, Carmen Baldres, Lucía de Luis, Laura Rouder, Claudia García"
  },
  {
    id: 6,
    title: "Intros Personalizadas YouTube",
    category: "Motion Graphics",
    description: "Creación de intros animadas con estilo propio para reconocidas influencers.",
    image: "/img/proyecto6.jpg",
    tags: ["Procreate", "After Effects", "CapCut"],
    client: "Elena Gortari, Laura Rouder, Carmen Baldres, Marru, Sara Cisneros, Aitana Candelas"
  }
];

export const servicesData: Service[] = [
  { title: "Diseño y Branding", description: "Construcción de identidades visuales completas y coherentes." },
  { title: "Motion Graphics", description: "Animaciones y efectos visuales que aportan energía al contenido." },
  { title: "Creación de Contenido", description: "Edición con ritmo y narrativa visual para mantener la atención." },
  { title: "YouTube Assets", description: "Miniaturas, intros y banners optimizados para retención." }
];

export const educationData = {
  degree: "Grado en Diseño y Tecnologías Creativas",
  institution: "UPV Valencia",
  year: "Segundo curso (Actualidad)",
  age: 19
};

export const skillsSoftware: string[] = ["Illustrator", "After Effects", "CapCut", "InDesign", "Premiere", "Photoshop", "Blender", "Procreate", "Canva"];