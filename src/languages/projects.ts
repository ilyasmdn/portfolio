export const projects = {
  fr: {
    title: "Projets",
    openButton: "Ouvrir le Projet",
    activeButton: "Aperçu",
    notActiveButton: "Indisponible",
    list: [
      {
        name: "Portfolio.tsx",
        type: "tsx",
        description: "Un portfolio personnel moderne construit avec React, TypeScript et Tailwind.",
        details:
          "Ce portfolio met en avant mes compétences et mes projets à travers une interface épurée et dynamique. Il intègre un mode sombre, une navigation fluide et une optimisation SEO avancée. Déployé avec Vercel, il est conçu avec React, TypeScript et Tailwind pour un design réactif.",
        tech: ["React", "TypeScript", "Tailwind", "Vite"],
        link: "https://github.com/ilyasmdn/portfolio",
        isLinkActive: true,
        inProgress: false,
      },
      {
        name: "WeatherApp.jsx",
        type: "jsx",
        description: "Une application météo en temps réel affichant les prévisions par ville.",
        details:
          "Cette application permet aux utilisateurs de rechercher la météo actuelle et les prévisions des prochains jours en fonction de leur localisation. Elle utilise l'API OpenWeather pour récupérer des données précises et offre un affichage visuel moderne avec des animations.",
        tech: ["React", "Tailwind", "OpenWeather API"],
        link: "#",
        isLinkActive: false,
        inProgress: false,
      },
      {
        name: "TaskManager.jsx",
        type: "jsx",
        description: "Un gestionnaire de tâches intuitif avec organisation par catégories.",
        details:
          "Une application web permettant de créer, organiser et suivre ses tâches avec un système de catégories et de priorités. L'interface propose une vue Kanban pour une meilleure gestion des projets et une synchronisation locale pour sauvegarder les tâches.",
        tech: ["React", "Tailwind", "LocalStorage"],
        link: "#",
        isLinkActive: false,
        inProgress: false,
      },
      {
        name: "ChatApp.jsx",
        type: "jsx",
        description: "Une application de messagerie instantanée en temps réel.",
        details:
          "Une application de chat en temps réel permettant des conversations privées et de groupe. Développée avec Firebase, elle offre une authentification sécurisée et une interface moderne avec notifications et statuts en ligne.",
        tech: ["React", "Tailwind", "Firebase"],
        link: "#",
        isLinkActive: false,
        inProgress: true,
      },
    ],
  },
  en: {
    title: "Projects",
    openButton: "Open Project",
    activeButton: "Preview",
    notActiveButton: "Not Available",
    list: [
      {
        name: "Portfolio.tsx",
        type: "tsx",
        description: "A modern personal portfolio built with React, TypeScript, and Tailwind.",
        details:
          "This portfolio showcases my skills and projects through a clean and dynamic interface. It features dark mode, smooth navigation, and advanced SEO optimization. Deployed with Vercel, it is built with React, TypeScript, and Tailwind for a responsive design.",
        tech: ["React", "TypeScript", "Tailwind", "Vite"],
        link: "https://github.com/ilyasmdn/portfolio",
        isLinkActive: true,
        inProgress: false,
      },
      {
        name: "WeatherApp.jsx",
        type: "jsx",
        description: "A real-time weather app displaying forecasts by city.",
        details:
          "This application allows users to check current weather conditions and upcoming forecasts based on their location. It uses the OpenWeather API to fetch accurate data and features a modern visual representation with animations.",
        tech: ["React", "Tailwind", "OpenWeather API"],
        link: "#",
        isLinkActive: false,
        inProgress: false,
      },
      {
        name: "TaskManager.jsx",
        type: "jsx",
        description: "An intuitive task manager with category organization.",
        details:
          "A web application that allows users to create, organize, and track their tasks using categories and priorities. The interface includes a Kanban board for better project management and local synchronization for task saving.",
        tech: ["React", "Tailwind", "LocalStorage"],
        link: "#",
        isLinkActive: false,
        inProgress: false,
      },
      {
        name: "ChatApp.jsx",
        type: "jsx",
        description: "A real-time instant messaging application.",
        details:
          "A real-time chat application for private and group conversations. Built with Firebase, it features secure authentication, a modern UI with notifications, and online status tracking.",
        tech: ["React", "Tailwind", "Firebase"],
        link: "#",
        isLinkActive: false,
        inProgress: true,
      },
    ],
  },
};
