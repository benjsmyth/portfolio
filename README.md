# portfolio
**Built with SQLite, Django, Axios, Vue.js, and Tailwind CSS.**

## Design
1. Information to be displayed is stored within an SQLite database.
2. Before the Vue application mounts, API calls are made via Axios.
3. Django responds by reading from the database, returning the data as JSON.
4. Vue provides the returned JSON at the application-level.
5. Components inject the JSON so it can render anywhere on the website.
6. For a logical and uniform look, the website is styled using Tailwind CSS.

## Working
- API calling
- Database retrieval
- Interactive components
- List rendering
- Tagging system

## Todo
- Contact form
- Add projects with text, code snippets, images, and links
- Searching / sorting
  - Searching will use the provided tags
  - Sorting will apply computed properties to the provided data
  - Results will return a dedicated SearchView
 
