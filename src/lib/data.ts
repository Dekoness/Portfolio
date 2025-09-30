import { Github, Linkedin, Twitter, Code, Database, Server, Wind, Paintbrush, Bot, Component } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

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
  name: "Juan Pérez | Desarrollador Full-Stack",
  description: "Portafolio profesional de Juan Pérez, un desarrollador de software apasionado por crear soluciones web modernas y eficientes.",
  url: "https://example.com", // Replace with your domain
  ogImage: "https://example.com/og.jpg", // Replace with your OG image URL
  links: {
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
  author: "Juan Pérez",
  email: "juan.perez@example.com",
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
  { name: 'Twitter', url: siteConfig.links.twitter, icon: Twitter },
];

export const heroData = {
  name: "Juan Pérez",
  title: "Desarrollador Full-Stack",
  avatar: findImage("hero-avatar"),
  bio: "Apasionado por la tecnología y la creación de soluciones web robustas y escalables. Con experiencia en todo el stack de desarrollo, desde el frontend hasta el backend y la infraestructura.",
  cvUrl: "/cv-juan-perez.pdf", // Place your CV in the `public` folder
};

export const aboutData = {
  title: "Sobre mí",
  description: "Soy un desarrollador de software con una sólida formación en ingeniería y un amor por el aprendizaje continuo. Mi objetivo es construir aplicaciones que no solo funcionen a la perfección, sino que también ofrezcan una experiencia de usuario excepcional. Me desenvuelvo cómodamente tanto en equipos como de forma autónoma, siempre buscando la mejor solución para cada desafío."
};

export const skillsData = {
  title: "Habilidades Técnicas",
  categories: [
    {
      name: "Frontend",
      icon: Code,
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ]
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "NestJS", icon: "nestjs" },
      ]
    },
    {
      name: "Bases de Datos & Cloud",
      icon: Database,
      skills: [
        { name: "Firebase", icon: "firebase" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Docker", icon: "docker" },
      ]
    }
  ]
};

export const projectsData = {
  title: "Proyectos Destacados",
  projects: [
    {
      title: "Plataforma de E-commerce",
      description: "Una solución completa de comercio electrónico con pasarela de pagos, gestión de inventario y panel de administración. Construida con Next.js, TypeScript y Firebase.",
      image: findImage("project-1"),
      tags: ["Next.js", "Firebase", "Stripe"],
      links: {
        live: "#",
        github: "#",
      }
    },
    {
      title: "Dashboard de Analíticas",
      description: "Un panel de control interactivo para visualizar métricas de negocio en tiempo real. Utiliza React para el frontend y una API RESTful con Node.js para el backend.",
      image: findImage("project-2"),
      tags: ["React", "Node.js", "Recharts"],
      links: {
        live: "#",
        github: "#",
      }
    },
    {
      title: "Aplicación de Tareas",
      description: "Una aplicación móvil multiplataforma para la gestión de tareas personales, con sincronización en la nube y notificaciones push. Desarrollada con React Native.",
      image: findImage("project-3"),
      tags: ["React Native", "Firebase Auth"],
      links: {
        live: "#",
        github: "#",
      }
    }
  ]
};

export const experienceData = {
  title: "Experiencia Laboral",
  entries: [
    {
      role: "Desarrollador Full-Stack Senior",
      company: "Tech Solutions Inc.",
      date: "Ene 2021 - Presente",
      description: "Lideré el desarrollo de múltiples proyectos web, desde la concepción hasta el despliegue. Mejoré el rendimiento de la aplicación principal en un 30% y mentoré a desarrolladores junior."
    },
    {
      role: "Desarrollador Frontend",
      company: "Innovate Web Co.",
      date: "Jun 2018 - Dic 2020",
      description: "Desarrollé y mantuve interfaces de usuario para clientes de alto perfil utilizando React y Redux. Colaboré estrechamente con diseñadores UI/UX para implementar diseños pixel-perfect."
    }
  ]
};

export const educationData = {
  title: "Formación Académica",
  entries: [
    {
      degree: "Máster en Ingeniería de Software",
      institution: "Universidad Politécnica de Madrid",
      date: "2016 - 2018"
    },
    {
      degree: "Grado en Ingeniería Informática",
      institution: "Universidad Complutense de Madrid",
      date: "2012 - 2016"
    }
  ]
};

export const contactData = {
  title: "Contacto",
  description: "¿Tienes un proyecto en mente o una oportunidad para mí? ¡No dudes en contactarme! Estoy siempre abierto a nuevas colaboraciones y desafíos interesantes."
};
