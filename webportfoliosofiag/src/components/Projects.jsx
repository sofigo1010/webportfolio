import React, { useReducer } from "react";
import "@fontsource-variable/cinzel"; 
import AstroIcon from "./icons/AstroIcon.jsx";
import AwsIcon from "./icons/Aws.jsx";
import CssIcon from "./icons/Css.jsx";
import DockerIcon from "./icons/Docker.jsx";
import ExpressIcon from "./icons/Express.jsx";
import GitIcon from "./icons/Git.jsx";
import GithubIcon from "./icons/Github.jsx";
import HtmlIcon from "./icons/Html.jsx";
import JavaIcon from "./icons/Java.jsx";
import JavaScriptIcon from "./icons/JavaScript.jsx";
import MysqlIcon from "./icons/Mysql.jsx";
import NodejsIcon from "./icons/Nodejs.jsx";
import PostgresqlIcon from "./icons/Postgresql.jsx";
import PythonIcon from "./icons/Python.jsx";
import ReactiIcon from "./icons/Reacti.jsx";
import TailwindcssIcon from "./icons/Tailwindcss.jsx";
import VercelIcon from "./icons/Vercel.jsx";
import ViteIcon from "./icons/Vite.jsx";

const iconMap = {
  React: ReactiIcon,
  JavaScript: JavaScriptIcon,
  CSS: CssIcon,
  HTML: HtmlIcon,
  Nodejs: NodejsIcon,
  Astro: AstroIcon,
  Aws: AwsIcon,
  Docker: DockerIcon,
  Express: ExpressIcon,
  Git: GitIcon,
  Github: GithubIcon,
  Java: JavaIcon,
  Mysql: MysqlIcon,
  Postgresql: PostgresqlIcon,
  Python: PythonIcon,
  Tailwindcss: TailwindcssIcon,
  Vercel: VercelIcon,
  Vite: ViteIcon,
};

const slides = [
  {
    title: "Tv Series Vlog",
    subtitle: "Informational",
    description:
      "This project is an informational vlog about TV series, accessible exclusively through reading, featuring a private /admin route that leads to a dashboard for adding, deleting, editing, and updating posts. The vlog aims to provide detailed insights and discussions on various television series in a user-friendly format.",
    image: "vlog.png",
    technologies: ["HTML", "JavaScript", "CSS", "Docker", "Express", "Vite", "React"],
    href: "http://18.225.11.137:6900",
  },
  {
    title: "Group Chat",
    subtitle: "Leveraging an API for Enhanced Group Chat Interactions",
    description:
      "This project features a group chat interface developed solely with HTML, CSS, and JavaScript, connecting seamlessly with an external API. Anyone can interact within the chat by connecting to the API, enabling real-time communication and collaboration.",
    image: "chat.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: "http://18.225.11.137:1802",
  },
  {
    title: "Calculator with Tests",
    subtitle: "Enhanced Reliability through Integrated Testing",
    description:
      "This calculator operates with keyboard input and is equipped with five integrated tests to ensure functionality and accuracy. It utilizes Storybook for component-based development, allowing for interactive testing and fine-tuning of the UI components.",
    image: "calculator.png",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    href: "http://18.225.11.137:1302",
  },
  {
    title: "Drawing Made using CSS",
    subtitle: "Mastering CSS Through Artistic Expression",
    description:
      "This project showcases a drawing entirely created using CSS, serving as a learning tool to enhance and develop skills in this language. The artistic endeavor in CSS not only demonstrates creative capabilities but also deepens understanding of CSS properties and layout techniques.",
    image: "hijitas.png",
    technologies: ["HTML", "CSS"],
    href: "http://18.225.11.137:3300",
  },
  {
    title: "Story with Progress",
    subtitle: "Dynamic Storytelling Experience",
    description:
      "This web page narrates a story using HTML and CSS, featuring a unique progress indicator that updates as the reader approaches the end. This innovative design enhances engagement by visually displaying how much of the story remains, providing a captivating and interactive reading experience.",
    image: "opciones.png",
    technologies: ["HTML", "CSS"],
    href: "http://18.225.11.137:6969",
  }
];

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex - 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length + 1 : state.slideIndex + 1,
    };
  }
  return state;
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;

  return (
    <a
      href={slide.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`slide ${active ? "active" : ""}`}
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        zIndex: active ? 2 : 1,
      }}
    >
      <div
        className="slideBackground absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
        style={{
          backgroundImage: `url('${slide.image}')`,
          opacity: active ? 0.2 : 0,
        }}
      />
      <div
        className="slideContent relative bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url('${slide.image}')`,
          transform: `perspective(1000px) translateX(calc(100% * var(--offset))) rotateY(calc(-45deg * var(--dir)))`,
        }}
      >
        <div className="slideHoverOverlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out p-4">
          <div className="text-white z-10 w-2/3 text-center">
            <h2 className="text-lg mb-2 font-bold">{slide.title}</h2>
            <p className="text-sm opacity-80 mb-4">{slide.description}</p>
            <div className="flex justify-center space-x-4">
              {slide.technologies.map((tech, index) => {
                const IconComponent = iconMap[tech];
                return IconComponent ? (
                  <IconComponent key={index} className="w-8 h-8 text-white" />
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <section id="projects" className="p-6 flex flex-col items-center">
      <h2 className="text-2xl uppercase mb-6 font-bold">Projects</h2>
      <div className="slides relative overflow-hidden w-full h-96">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-5xl z-10"
          onClick={() => dispatch({ type: "PREV" })}
        >
          ‹
        </button>
        {slides.map((slide, i) => {
          let offset = (state.slideIndex - i + slides.length) % slides.length;
          if (Math.abs(offset) > 1) offset = offset > 0 ? -1 : 1; 
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-5xl z-10"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          ›
        </button>
      </div>
      <style jsx>{`
        .slide {
          position: absolute;
          width: 80%;
          height: 100%;
          top: 0;
          left: 10%;
          transform-style: preserve-3d;
          transition: transform 0.5s ease-in-out;
          z-index: 1;
        }

        .slide.active {
          z-index: 2;
        }

        .slideBackground {
          z-index: -1;
          pointer-events: none;
        }

        .slideContent {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          transform-style: preserve-3d;
          position: relative;
        }

        .slideContent:hover .slideHoverOverlay {
          opacity: 1;
        }

        .slideContent:hover .slideBackground {
          filter: blur(5px);
        }

        .slideHoverOverlay {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .slideHoverOverlay p,
        .slideHoverOverlay h2 {
          font-weight: bold;
        }

        .slideHoverOverlay .flex {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
}

export default Projects;
