import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import js from "@/assets/js.svg";
import ts from "@/assets/typescript.svg";
import react from "@/assets/react.svg";
import tailwind from "@/assets/tailwindcss.svg";
import shadcn from "@/assets/shadcn.svg";
import nodejs from "@/assets/nodejs.svg";
import express from "@/assets/express.svg";
import postgres from "@/assets/postgres.svg";
import git from "@/assets/git.svg";
import github from "@/assets/github.svg";

import { GraduationCap, BookOpen } from "lucide-react";

export const about = {
  fr: {
    title: "À propos",
    education: {
      title: "Éducation",
      list: [
        {
          id: 1,
          year: "2021 - 2022",
          title: "Baccalauréat en Sciences Mathématiques",
          institution: "Lycée Ihsane, El Jadida",
          description:
            "Formation intensive en mathématiques et sciences physiques, préparant aux études scientifiques et d'ingénierie.",
          achievements: [
            "Mention Très Bien",
            "Classement parmi les meilleurs élèves en mathématiques",
          ],
          skills: [
            "Analyse mathématique",
            "Logique algorithmique",
            "Résolution de problèmes",
          ],
          icon: GraduationCap,
        },
        {
          id: 2,
          year: "2022 - 2024",
          title: "Classes Préparatoires aux Grandes Écoles (MPSI/MP)",
          institution: "CPGE, Lycée Errazi, El Jadida",
          description:
            "Programme rigoureux axé sur les mathématiques, la physique et l'informatique pour préparer les concours des grandes écoles d'ingénieurs.",
          achievements: [
            "Implémentation de la logique du cube à Rubik en Python",
            "Réussite des concours d’entrée aux grandes écoles",
          ],
          skills: [
            "Mathématiques avancées",
            "Programmation en Python",
            "Résolution de problèmes complexes",
          ],
          icon: BookOpen,
        },
        {
          id: 3,
          year: "2024 - 2027",
          title:
            "Cycle d'Ingénieur en Informatique (Ingénierie des Systèmes d'Information et Transformation Digitale)",
          institution: "École des Sciences de l'Information, Rabat",
          description:
            "Formation approfondie en génie logiciel, architecture des systèmes d'information et transformation digitale.",
          achievements: [
            "Développement d’une application web innovante",
            "Participation à des hackathons et compétitions de programmation",
          ],
          skills: [
            "Développement Full-Stack",
            "Gestion de projet",
            "Architecture logicielle",
          ],
          icon: GraduationCap,
        },
      ],
    },
    technologies: {
      title: "Technologies",
      list: [
        {
          name: "HTML",
          iconLink: html,
        },
        {
          name: "CSS",
          iconLink: css,
        },
        {
          name: "JavaScript",
          iconLink: js,
        },
        {
          name: "TypeScript",
          iconLink: ts,
        },
        {
          name: "React",
          iconLink: react,
        },
        {
          name: "Tailwind CSS",
          iconLink: tailwind,
        },
        {
          name: "Shadcn/ui",
          iconLink: shadcn,
        },
        {
          name: "Node.js",
          iconLink: nodejs,
        },
        {
          name: "Express",
          iconLink: express,
        },
        {
          name: "PostgreSQL",
          iconLink: postgres,
        },
        {
          name: "Git",
          iconLink: git,
        },
        {
          name: "GitHub",
          iconLink: github,
        },
      ],
    },
    softSkills: {
      title: "Compétences transversales (Soft Skills)",
      list: [
        "Gestion de projet",
        "Résolution de problèmes",
        "Travail en équipe",
        "Apprentissage et adaptation",
      ],
    },
  },
  en: {
    title: "About me",
    education: {
      title: "Education",
      list: [
        {
          id: 1,
          year: "2021 - 2022",
          title: "Baccalaureate in Mathematical Sciences",
          institution: "Lycée Ihsane, El Jadida",
          description:
            "Intensive training in mathematics and physics, preparing for scientific and engineering studies.",
          achievements: [
            "Graduated with honors",
            "Ranked among the top students in mathematics",
          ],
          skills: [
            "Mathematical analysis",
            "Algorithmic logic",
            "Problem-solving",
          ],
          icon: GraduationCap,
        },
        {
          id: 2,
          year: "2022 - 2024",
          title: "Preparatory Classes for Engineering Schools (MPSI/MP)",
          institution: "CPGE, Lycée Errazi, El Jadida",
          description:
            "Rigorous program focused on mathematics, physics, and computer science, preparing for top engineering school entrance exams.",
          achievements: [
            "Successful completion of competitive engineering schools exams",
            "Implementing Rubik's Cube logic in Python",
          ],
          skills: [
            "Advanced mathematics",
            "Programming in Python",
            "Complex problem-solving",
          ],
          icon: BookOpen,
        },
        {
          id: 3,
          year: "2024 - 2027",
          title:
            "Engineering Degree in Computer Science (Information Systems & Digital Transformation)",
          institution: "School of Information Sciences, Rabat",
          description:
            "Advanced training in software engineering, information systems architecture, and digital transformation.",
          achievements: [
            "Developed an innovative web application",
            "Participation in hackathons and coding competitions",
          ],
          skills: [
            "Full-Stack Development",
            "Project Management",
            "Software Architecture",
          ],
          icon: GraduationCap,
        },
      ],
    },
  },
};
