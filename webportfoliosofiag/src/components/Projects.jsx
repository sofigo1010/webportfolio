import React, { useReducer } from "react";
import "@fontsource-variable/cinzel"; // Importing Cinzel Variable font
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
};

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    technologies: ["React", "Nodejs", "React"],
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
  return state;
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;

  return (
    <div
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
        <div className="slideHoverOverlay absolute inset-0 bg-black bg-opacity-50 flex justify-between items-start opacity-0 transition-opacity duration-300 ease-in-out p-4">
          <div className="text-left text-white z-10">
            <h2 className="text-4xl mb-2 font-bold">{slide.title}</h2>
            <p className="text-2xl mb-4">{slide.description}</p>
          </div>
          <div className="flex flex-col items-center text-white z-10">
            <p className="text-2xl mb-2">Tecnologías utilizadas:</p>
            <div className="flex mb-4 space-x-4 text-2xl">
              {slide.technologies.map((tech, index) => {
                const IconComponent = iconMap[tech];
                return <IconComponent key={index} className="w-8 h-8 text-white" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <section id="projects" className="p-6 flex flex-col items-center">
      <h2
        className="text-2xl uppercase mb-6"
        style={{ fontFamily: "Cinzel Variable, serif" }}
      >
        Projects
      </h2>
      <div className="slides relative overflow-hidden w-full h-96">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-5xl z-10"
          onClick={() => dispatch({ type: "PREV" })}
        >
          ‹
        </button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
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

        .slideContentInner {
          transform-style: preserve-3d;
          transform: translateZ(2rem);
          text-shadow: 0 0.1rem 1rem #000;
          opacity: 0;
        }

        .slide[data-active] .slideContentInner {
          opacity: 1;
        }

        .slideHoverOverlay {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }

        .slideHoverOverlay p,
        .slideHoverOverlay h2,
        .slideHoverOverlay span {
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

export default Projects;
