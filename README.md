# portfolio
Built with Django, Axios, Vue.js, and Tailwind CSS.

Design:
    1. Information to be displayed is stored within an SQLite database.
    2. Before the Vue application mounts, API calls are made via Axios.
    3. Django responds by reading from the database, returning the data as JSON.
    4. Vue provides the returned JSON at the application-level.
        * This means only one API call is needed, unless searching is used.
    5. Components inject the JSON so it can render anywhere on the website.
    7. For a logical and uniform look, the website is styled using Tailwind CSS.

    - Sorting will simply apply Vue to the provided data
    - Searching justifies making an API call to utilize database filtering
        * Search results will return a dedicated SearchView
        * But the data from the initial call is what gets displayed on the webpages

Working:
    - Interactive components
    - API calling
    - Database retrieval
    - List rendering
    - HTML rendering

To-do:
    - Refactor project directory to {portfolio/client, portfolio/server}
    - Implement searching
    - Implement sorting
    - Add date, tags to `projects` model
    - Create `about` model
    - Build contact form
    - Populate projects with text, code snippets, images, and links
