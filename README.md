# portfolio
A fast, fullstack, lightweight web application. Designed to present myself and my portfolio of work.

## SDAV Stack
- **S**QLite
- **D**jango
- **A**xios
- **V**ue.js
### Benefits
- Single-page application (SPA).
- Extremely lightweight, fast, and responsive.
- Harnesses **Vue**'s provide/inject functionality.
- Consistent and uniform style using **Tailwind**.
### Design
1. Information to be displayed is stored in a **SQLite** database.
2. _Before_ the **Vue** application mounts, API calls are made via **Axios**.
3. **Django** responds by reading from **SQLite**, returning the data as JSON.
4. **Vue** _provides_ the returned JSON at the global application level.
5. Views _inject_ the provided JSON so that it can render anywhere on the page.
## Features
- Interactive components
- Tagging system
## Todo
- (+) Contact form
- (=) Project information (text, code snippets, images, & links)
- Searching / sorting
  - Searching will use the provided tags
  - Sorting will apply computed properties to the provided data
  - Results will return a dedicated SearchView
