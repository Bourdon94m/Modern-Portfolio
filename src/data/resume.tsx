import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

function getAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const DATA = {
  name: "Matthieu Poulard",
  initials: "MP",
  url: "https://google.com",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/paris",
  description: "Etudiant, autodidacte et surtout passionné",
  summary: `Je suis un étudiant développeur passionné de ${getAge(
    "2005-07-26"
  )} ans par la création de solutions logicielles créatives et efficaces. Avec des projets condition réel en développement full-stack et logiciel, j'apprécie relever des défis, coder des interfaces intuitives et élargir continuellement mes connaissances techniques.`,

  avatarUrl: "/coffee.jpg",
  skills: [
    "React",
    "Python",
    "Postgres",
    "TailwindCSS",
    "Docker",
    "Django",
    "Postman",
    "Nginx",
    "Gunicorn",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Bourdon94m",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthieu-poulard-221550250/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ceciaa",
      href: "https://www.ceciaa.com/",
      badges: [],
      location: "France",
      title: "Technicien support",
      logoUrl: "/ceciaa.png",
      start: "October 2023",
      end: "July 2025",
      description:
        "J'ai été apprenti en support helpdesk pour notre équipe et nos collaborateurs, en résolvant des problèmes à l'aide d'outils comme TeamViewer, et en préparant des ordinateurs portables pour les clients et les équipes. J'ai également travaillé avec des logiciels spécialisés pour les utilisateurs aveugles et malvoyants, et j'ai apporté des solutions de programmation pour notre équipe technique.",
    },
    {
      company: "PC en forme",
      badges: [],
      href: "https://pcenforme.com/",
      location: "France, Paris",
      title: "Technicien informatique",
      logoUrl: "/pcEnForme.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Pendant cette expérience, j'ai construit et configuré des PC haute performance destinés à un usage professionnel. Mon rôle consistait à sélectionner les composants adaptés, assembler les systèmes, et assurer l'optimisation des performances pour répondre aux besoins spécifiques des utilisateurs. J'ai également résolu divers problèmes matériels, en apportant des solutions personnalisées, tout en veillant à offrir une performance fiable et de qualité. Chaque projet m'a permis de répondre aux attentes des clients avec efficacité",
    },
  ],
  education: [
    {
      school: "Aurlom",
      href: "https://aurlom.com",
      degree: "BTS SIO",
      logoUrl: "/aurlom_logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Lycée Professionnel Paul Bert",
      href: "https://lyceepaulbert94.fr/",
      degree: "Baccalauréat Système Numérique",
      logoUrl: "",
      start: "2020",
      end: "2023",
    },
    {
      school: "Collège Molière",
      href: "http://www.clg-moliere-ivry.fr/",
      degree: "Brevet des collèges",
      logoUrl: "/collége_Moliere.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "TechTools",
      dates: "August 2024 - Now",
      active: true,
      description:
        "Innovative web application providing integrated solutions for remote IT support and efficient management of support requests. Designed to optimize IT service operations by improving responsiveness and intervention tracking.",
      technologies: [
        "Django",
        "Javascript",
        "PostgreSQL",
        "Django Rest Framework",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Bourdon94m/TechTools",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TechTools.png",
    },
  ],
} as const;
