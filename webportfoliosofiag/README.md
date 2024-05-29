# Web Portfolio

This project is a personal web portfolio designed to showcase web development skills and highlighted projects. It utilizes a combination of modern technologies to achieve a responsive and functional design.

## Technologies Used

- **Astro**: Used for efficient static rendering and the integration of various UI frameworks without sacrificing performance.
- **React**: Employed to build interactive components using a declarative design model.
- **Tailwind CSS**: A CSS framework that allows for quick designing directly within the HTML, leveraging its utilities for a responsive and consistent design.
- **CSS**: Used for custom styles where specific adjustments are needed outside of Tailwind.
- **HTML**: Provides the semantic structure of the site.
- **JavaScript**: Scripts to add additional interactivity to the React components.

## Features

- **Responsive Design**: Ensures the portfolio looks good on devices of all sizes.
- **Fast Loading**: Thanks to Astro, the site is pre-rendered on the server, resulting in very fast loading times.
- **Interactivity**: React allows users to interact with the site in a fluid and dynamic manner.


## 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

