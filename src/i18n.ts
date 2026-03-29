import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      navbar: {
        about: "Sobre mí",
        projectsData: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        title: "Hola, soy ",
        subtitle:
          "Desarrollador Full Stack especializado en React, Node.js y PostgreSQL",
        projectsBtn: "Ver proyectos",
        contactBtn: "Contacto",
      },
      about: {
        title: "Sobre mí",
        text1:
          "Soy desarrollador Full Stack enfocado en crear aplicaciones web modernas y funcionales.",
        text2:
          "Trabajo con tecnologías como React, Node.js y PostgreSQL, construyendo soluciones completas.",
        text3:
          "Actualmente estoy enfocado en mejorar mis habilidades en arquitectura y desarrollo con inteligencia artificial.",
        tech: "Tecnologías",
      },
      projectsData: {
        project1: {
          name: "Sistema de reservas para peluquerías",
          description:
            "Aplicación web para gestionar turnos, empleados y clientes.",
        },
        project2: {
          name: "E-commerce de zapatos",
          description:
            "Tienda online con carrito, usuarios y gestión de productos.",
        },
        project3: {
          name: "Landing page animada",
          description:
            "Landing moderna con animaciones y diseño responsive.",
        },
      },

      contact: {
        title: "Contacto",
        subtitle:
          "¿Te interesa trabajar conmigo o querés saber más sobre mis proyectos?",
        name: "Tu nombre",
        email: "Tu email",
        message: "Tu mensaje",
        button: "Enviar mensaje",
      },
    },
  },

  en: {
    translation: {
      navbar: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        title: "Hi, I'm ",
        subtitle:
          "Full Stack Developer specialized in React, Node.js and PostgreSQL",
        projectsBtn: "View projects",
        contactBtn: "Contact",
      },
      about: {
        title: "About me",
        text1:
          "I am a Full Stack developer focused on building modern and functional web applications.",
        text2:
          "I work with technologies like React, Node.js and PostgreSQL, creating full solutions.",
        text3:
          "Currently focused on improving my skills in architecture and AI development.",
        tech: "Technologies",
      },
      projectsData: {
        project1: {
          name: "Hair salon booking system",
          description:
            "Web app to manage appointments, employees and clients.",
        },
        project2: {
          name: "Shoe e-commerce",
          description:
            "Online store with cart, users and product management.",
        },
        project3: {
          name: "Animated landing page",
          description:
            "Modern landing page with animations and responsive design.",
        },
      },
      contact: {
        title: "Contact",
        subtitle:
          "Interested in working with me or want to know more about my projects?",
        name: "Your name",
        email: "Your email",
        message: "Your message",
        button: "Send message",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;