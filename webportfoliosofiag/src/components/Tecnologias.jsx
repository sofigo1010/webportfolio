import React from "react";
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

import "../styles/Tecnologias.css"; 


const icons = [
  AstroIcon,
  AwsIcon,
  CssIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  MysqlIcon,
  NodejsIcon,
  PostgresqlIcon,
  PythonIcon,
  ReactiIcon,
  TailwindcssIcon,
  VercelIcon,
  ViteIcon,
];

const Tecnologias = () => {
  const count = icons.length;

  return (
    <section id="tecnologias" className="void">
      <ul>
        {icons.map((IconComponent, index) => (
          <li
            key={index}
            style={{
              transform: `translateY(-50%) rotate(${index * (360 / count)}deg)`,
              animationDelay: `calc((20 / ${count}) * -${index}s)`,
            }}
          >
            <div className="card">
              <IconComponent />
            </div>
          </li>
        ))}
      </ul>
      <div className="center-circle" />
      <div className="second-circle" />
      <div className="last-circle" />
    </section>
  );
};

export default Tecnologias;
