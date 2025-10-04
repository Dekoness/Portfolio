import {
  Code,
  Github,
  Linkedin,
  Twitter,
  Server,
  Briefcase,
  GraduationCap,
  Mail,
  User,
  Cuboid,
  BrainCircuit,
  Users,
  type LucideIcon,
} from "lucide-react";import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or handle the error
    return {
      imageUrl: "https://picsum.photos/seed/default/200/300",
      imageHint: "placeholder image",
    }
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

export const siteConfig = {
  name: "Federico Zoppi | Desarrollador Full-Stack",
  description: "Portafolio profesional de Federico Zoppi, un desarrollador de software apasionado por crear soluciones web modernas y eficientes.",
  url: "https://example.com", // Replace with your domain
  ogImage: "https://example.com/og.jpg", // Replace with your OG image URL
  links: {
    // twitter: "https://twitter.com/example",
    github: "https://github.com/Dekoness",
    linkedin: "https://www.linkedin.com/in/federico-zoppi-tech",
  },
  author: "Federico Zoppi",
  email: "federicozoppi.ita@gmail.com",
};

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
];

export const socialLinks = [
  { name: 'GitHub', url: siteConfig.links.github, icon: Github },
  { name: 'LinkedIn', url: siteConfig.links.linkedin, icon: Linkedin },
  // { name: 'Twitter', url: siteConfig.links.twitter, icon: Twitter },
];

export const heroData = {
  name: "Federico Zoppi",
  title: "Desarrollador Full-Stack",
  avatar: findImage("hero-avatar"),
  bio: "Mi superpoder: aprender en tiempo récord lo que tu equipo necesita. En 3 meses dominé React, Node.js, Python, FastAPI, y mas tecnologias y herramienta para el desarrollo. Dime qué necesitas que aprenda ahora.",
  cvUrl: "https://drive.google.com/file/d/1taRqsbK_LAkIat7m_aiSNu06YpRrVN0D/view?usp=drive_link", // Place your CV in the `public` folder
};

export const aboutData = {
  title: "Sobre mí",
  description: "Programador con la determinación de quien elige reinventarse. Domino React, Python y las tecnologías modernas, pero mi verdadero diferencial es mi ética de trabajo: sé lo que cuesta crecer y no doy nada por sentado."
};

export const skillsData = {
  title: "Habilidades Técnicas",
  categories: [
    {
      name: "Frontend",
      icon: Code,
      skills: [
        { name: "React.js", icon: "react" },
        { name: "JavaScript ES6+", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "SASS/SCSS", icon: "sass" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Python", icon: "python" },
        { name: "Flask", icon: "flask" },
        { name: "Node.js", icon: "nodejs" },
        { name: "RESTful APIs", icon: "api" },
        { name: "SQLAlchemy", icon: "sqlalchemy" },
        { name: "JWT", icon: "jwt" },
        { name: "PostgreSQL", icon: "postgresql" },
      ],
    },
    {
      name: "Plataformas y Herramientas",
      icon: Cuboid,
      skills: [
        { name: "Firebase", icon: "firebase" },
        { name: "Git/GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Netlify", icon: "netlify" },
        { name: "Vercel", icon: "vercel" },
      ],
    },
    {
      name: "Inteligencia Artificial",
      icon: BrainCircuit,
      skills: [
        { name: "OpenAI API", icon: "openai" },
        { name: "DeepSeek", icon: "deepseek" },
        { name: "NotebookLM", icon: "notebooklm" },
        { name: "Prompt Engineering", icon: "prompt" },
        { name: "AI Integration", icon: "integration" },
      ],
    },
    {
      name: "Metodologías",
      icon: Users,
      skills: [{ name: "Agile/Scrum", icon: "agile" }],
    },
  ],
};

export const projectsData = {
  title: "Proyectos Destacados",
  projects: [
    {
      title: "Festival de Música con SASS",
      description: "Página web para un festival de música, enfocada en la práctica y dominio de SASS para estilos avanzados y Gulp para la automatización de tareas y optimización de imágenes.",
      image: findImage("project-3"),
      tags: ["HTML", "SASS", "Gulp.js", "JavaScript"],
      links: {
        live: "https://festival-sass-dekoness.netlify.app/",
        github: "https://github.com/Dekoness/Festival-SASS",
      }
    },
    {
      title: "FlaZic - Streaming Musical",
      description: "Aplicación web de streaming musical en desarrollo. Permite explorar, buscar y reproducir música con sistema de playlists y recomendaciones. Desarrollado en colaboración con Fernando Rodriguez Gómez.",
      image: findImage("project-2"),
      tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Vite", "En desarrollo"],
      links: {
        live: "#",
        github: "https://github.com/Dekoness/FlaZic",
      }
    },
    {
      title: "Mi rincón escondido",
      description: "Plataforma completa de reservas de cabañas en España con sistema de búsqueda, gestión de reservas y panel de administración. Desarrollada con React, TypeScript y Node.js.",
      image: findImage("project-1"),
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Python", "JWT"],
      links: {
        live: "#", // Puedes agregar el demo si está desplegado
        github: "https://github.com/Dekoness/sp108-final-project-g1",
      }
    }
  ]
};

export const experienceData = {
  title: "Experiencia Laboral",
  entries: [
    {
      role: "Técnico Instalador Electricista",
      company: "Rugar",
      date: "2022 - 2025",
      description: "Especializado en instalaciones eléctricas cumpliendo normativas REBT. Responsable de interpretación de planos, instalación de sistemas eléctricos, montaje de componentes, pruebas y mediciones, diagnóstico y mantenimiento preventivo."
    },
    {
      role: "Delivery (Trabajo Extra)",
      company: "Doraya Japan",
      date: "2020 - Presente",
      description: "Servicio de reparto de comida para restaurante de cocina japonesa. Desempeño de funciones logísticas y de atención al cliente, gestionando entregas eficientes en la zona de Valencia."
    }
  ]
};

export const educationData = {
  title: "Formación Académica",
  entries: [
    {
      degree: "Full-Stack Developer",
      institution: "4Geeks Academy",
      date: "2025"
    },
    {
      degree: "FP Grado Superior en Sistemas Eléctricos y Automatización Industrial",
      institution: "IES Patacona",
      date: "2021 - 2023"
    }
  ]
};

export const contactData = {
  title: "Contacto",
  description: "¿Tienes un proyecto en mente o una oportunidad para mí? ¡No dudes en contactarme! Estoy siempre abierto a nuevas colaboraciones y desafíos interesantes."
};
