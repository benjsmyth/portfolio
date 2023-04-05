# portfolio
**Built with Django, Axios, Vue.js, and Tailwind CSS.**

## Design
1. Information to be displayed is stored within an SQLite database.
2. Before the Vue application mounts, API calls are made via Axios.
3. Django responds by reading from the database, returning the data as JSON.
4. Vue provides the returned JSON at the application-level.
5. Components inject the JSON so it can render anywhere on the website.
6. For a logical and uniform look, the website is styled using Tailwind CSS.

## Working
- Interactive components
- API calling
- Database retrieval
- List rendering w/ HTML content
- Tag system

# Todo
- Implement searching
- Implement sorting
- Build contact form
- Populate projects with text, code snippets, images, and links
- Sorting will apply computed properties to the provided data
- Searching will use the provided tags
- Search results will return a dedicated SearchView
    - But the data from the initial call is what gets displayed on the webpages
