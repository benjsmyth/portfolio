# portfolio
A full stack web application designed to present myself and my portfolio of work.

## SDAV-T Stack
- **S**QLite
- **D**jango
- **A**xios
- **V**ue
- **T**ailwind
### Benefits
- Single-page application (SPA).
- Extremely lightweight, fast, and responsive.
- Harnesses **Vue**'s provide/inject functionality.
- Consistent and uniform CSS using **Tailwind**.
### Design
1. Information to be displayed is stored in an **SQLite** database.
2. Before the **Vue** application mounts, API calls are made via **Axios**.
3. **Django** responds by reading from **SQLite**, returning the data as JSON.
4. **Vue.js** _provides_ the returned JSON at the global application level.
5. Components _inject_ the JSON so that it can render anywhere on the page.

## Features
- Interactive components
- Tagging system

## Todo
- Contact form
- Add projects with text, code snippets, images, and links
- Searching / sorting
  - Searching will use the provided tags
  - Sorting will apply computed properties to the provided data
  - Results will return a dedicated SearchView
 
