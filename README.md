## Locapreneur.id FE

### Description

This is a frontend application for Locapreneur.id, part of Internship by BCC FILKOM UB. It is designed following the best practices and recommendations to ensure a clean, maintainable, and scalable codebase. It is also built with security in mind to protect against common security threats.

### Tech Stack

The application is built using [TypeScript](https://www.typescriptlang.org/) for strong typing, [pnpm](https://pnpm.io/) as a fast package manager, and [React](https://reactjs.org/) for building UI. It leverages [Next.js](https://nextjs.org/) to enable server-side rendering and static site generation. For styling, it uses [TailwindCSS](https://tailwindcss.com/).


### Getting started

1. Clone the repository
```
  git clone https://github.com/ahargunyllib/intern-fe-bcc-2025.git
  cd intern-fe-bcc-2025
```

2. Set up the environment variables by copying .env.example
```
  cp .env.example .env
```
Update configuration values as needed.

3. Install the required the dependencies
```
  pnpm install
```

4. Run the development server
```
  pnpm dev
```
5. Open http://localhost:3000 with your browser to see the result.

### Architecture

The project is structured using a feature-based approach to ensure scalability, modularity, and maintainability. The `src` directory is organized into three main sections:

- **`app`**: Contains global application-level components, pages, layouts, and configurations, including the main entry point for pages and global styles.
- **`features`**: Houses feature-specific modules, where each module includes its own actions, services, components, containers, and types to encapsulate functionality and logic for that feature.
- **`shared`**: Includes reusable components, hooks, libraries, and utilities that are shared across different features and pages, promoting consistency and code reusability.
