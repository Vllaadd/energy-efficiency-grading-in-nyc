## Code breakdown by file 

# App.js 

In a React project, App.js file servers as the central hub, acting as the main entry point for the application. This file plays a crucial role in orchestrating the structure of our React application by integrating various components and managing the overall flow. 

# BuildingsAPI.js

In the lines 7 to 10 we are using `useState` hook to initialize state variables. 
`buildings` is a state variable that will hold an array of building data
`search` is a state variable that will hold the user's input 
'currentPage' is a state variable that will keep track of the current page number
`buildingsPerPage` is a constant representing the number of buildings you want to display per page. 

By using state, we ensure that React can track changes to these values, and when they update, the component will re-render appropriately. 

