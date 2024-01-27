# Technology used per file``
# Project name: Energy Efficiency Grading In New York City 

# App.js 

In a React project, App.js file servers as the central hub, acting as the main entry point for the application. This file plays a crucial role in orchestrating the structure of our React application by integrating various components and managing the overall flow. 

# BuildingsAPI.js 

1. **React.js:**
   - A JavaScript library for building user interfaces.
   - Used for creating reusable UI components and managing the application's state.

2. **useState:**
   - A React Hook used for adding state to functional components.
   - Enables the component to maintain and update its state.

3. **useEffect:**
   - A React Hook used for handling side effects in functional components.
   - Used to perform asynchronous tasks, such as fetching data, after the component has rendered.

4. **axios:**
   - A JavaScript library used for making HTTP requests.
   - Used here to fetch data from an external API.

5. **CSS:**
   - Cascading Style Sheets are used to style the components.
   - The styles are applied using a separate CSS file (`buildingsAPI.css`).

6. **Environment Variables:**
   - The `apiToken` is imported from a configuration file (`.config`).
   - Environment variables help in keeping sensitive information, like API tokens, private.

7. **Functional Components:**
   - React components are written as functional components.
   - They make use of React Hooks for managing state and side effects.

8. **Event Handling:**
   - Event handling is implemented with functions like `handleInput`, `handleFishClick`, `handlePreviousPage`, and `handleNextPage`.

9. **Array Methods:**
   - JavaScript array methods like `filter` and `sort` are used to manipulate and filter data.
   - `Object.values` is used to get an array of the building's property values.

10. **Pagination:**
    - Pagination logic is implemented to display a subset of buildings per page.

11. **Promises and Async/Await:**
    - The `axios.get` method returns a promise, and `async/await` is used to handle the asynchronous response.

12. **ES6 Features:**
    - Arrow functions, destructuring, and template literals are used, showcasing features introduced in ECMAScript 6 (ES6).
