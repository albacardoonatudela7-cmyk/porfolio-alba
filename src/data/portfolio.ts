

export interface Influencer {
  name: string;
  cover: string;
  videoUrl: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[]; 
  tags: string[];
  client?: string;
  influencers?: Influencer[];
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
    images: [
      "/img/crefad.cartel.jpg", 
      "/img/crefad.logo.jpg"
    ], 
    tags: ["Illustrator", "After Effects"]
  },
  {
    id: 2,
    title: "Cartel Teatral: Pecados Capitales",
    category: "Diseño Gráfico",
    description: "Diseño disruptivo y conceptual para una obra de teatro. Utilicé técnicas de escaneado para lograr una estética potente y original.",
    images: [
      "/img/avaricia.1.jpg",
      "/img/avaricia.2.jpg"
    ],
    tags: ["Técnica Escaneado", "Photoshop", "InDesign"]
  },
  {
    id: 3,
    title: "Lo que nos mueve",
    category: "Branding e Identidad",
    description: "Identidad visual completa para programa de intercambio cultural: logo, carteles, mupis y campaña en redes sociales incluyendo video-anuncio.",
    images: [
      "/img/LQNM-CartelN.JPG",
      "/img/LQNM-CartelR.jpg"
    ],
    tags: ["Illustrator", "InDesign", "After Effects", "Premiere"]
  },
  {
    id: 4,
    title: "KAOKA Chocolate",
    category: "Branding y Packaging",
    description: "Desarrollo de packaging para tableta de chocolate puro y estrategia visual para redes sociales.",
    images: [
      "/img/K4.png",
      "/img/K5.jpg",
      "/img/K6.png"
    ],
    tags: ["Illustrator", "After Effects", "Procreate"]
  },
  {
    id: 5,
    title: "Edición Creativa para Creadores",
    category: "Edición de Video",
    description: "Edición de contenido dinámico para TikTok y YouTube, optimizando la retención y la experiencia visual según el estilo de cada creador.",
    images: ["/img/proyecto5.jpg"],
    tags: ["CapCut", "Premiere", "After Effects"],
    client: "Mery Rodríguez, Carmen Baldres, Lucía de Luis, Laura Rouder, Claudia García"
  },
  {
    id: 6,
    title: "Intros Personalizadas YouTube",
    category: "Motion Graphics",
    description: "Galería de introducciones animadas diseñadas a medida para reconocidas creadoras de contenido del panorama actual.",
    images: ["/img/portada-intros.jpg"],
    tags: ["Procreate", "After Effects", "CapCut"],
    influencers: [
      { name: "Elena Gortari", cover: "/img/elena.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Laura Rouder", cover: "/img/laura.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Carmen Baldres", cover: "/img/carmen.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Marru", cover: "/img/marru.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Lucía de Luis", cover: "/img/lucia.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Sara Cisneros", cover: "/img/sara.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Aitana Candela", cover: "/img/aitana.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Mery Rodríguez", cover: "/img/mery.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" },
      { name: "Carla Baquedano", cover: "/img/carla.jpg", videoUrl: "https://www.youtube.com/embed/ID_VIDEO" }
    ]
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