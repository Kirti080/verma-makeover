# Kirti080/verma-makeover reviewer notes

## Architecture
This codebase is a React-based web application scaffolded with Vite, focusing on simplicity and minimal reliance on external libraries. The file structure organizes components and pages clearly under `src/pages`, with routing handled by React Router. The application structure promotes a flat hierarchy, making it accessible for quick edits.

## Conventions
- **File Structure**: Each page is a separate file under the `src/pages` directory, as noted in `src/pages/About.jsx`. This simplifies navigation and understanding of the project structure.
- **Component Naming**: React components are named using PascalCase (e.g., `Blog`, `Gallery`, `Pricing`), aligning with common React conventions, which aids in maintaining clarity and consistency in component usage.
- **Styling**: The project exclusively utilizes a single CSS file (`src/index.css`), avoiding external CSS frameworks to ensure simplicity. Readability and ease of modification are prioritized over style complexity, as stated in `src/pages/About.jsx`.
- **Data Handling**: Data for the blog is kept in a simple array structure in `src/data/posts.js`, with utility functions (e.g., `findPost`) to facilitate data access throughout the application.

## Intentional non-standard choices
- **Single CSS File**: The deliberate choice to use plain CSS without any CSS frameworks (e.g., Bootstrap, Tailwind) is intentional. This choice reduces complexity for new developers, as mentioned in `src/pages/About.jsx`.
- **No State Management Library**: The absence of a state management library (like Redux) is purposeful, as the project aims to remain simple and easy to understand, focusing instead on local state management for components like `Contact` and `Faq`.
- **Direct Import of JSX**: The project imports components directly using `.jsx` extensions (e.g., `import Home from './pages/Home.jsx'`), which is a deviation from default practices where `.jsx` may be omitted in module resolution.

## Watch out for
- **Usage of `useEffect` without Dependency Array**: Ensure that `useEffect` hooks have appropriate dependency arrays to prevent unintentional infinite loops or performance issues. An example can be seen in `src/pages/Gallery.jsx`.
- **Key Prop Warnings**: When rendering lists, ensure that each element has a unique `key` prop. In `src/pages/Blog.jsx`, the keys are set to `post.slug`, which is good, but be cautious in other areas to maintain this consistency.
- **Local Storage for Contact Form**: The `Contact` component only captures state locally and does not implement an actual backend solution, as noted in `src/pages/Contact.jsx`. This may lead to missed data if not wired to a backend in production.

This playbook serves as a guide for understanding the foundational choices and patterns within the Kirti080/verma-makeover codebase, ensuring efficient and informed code reviews.