# App.js 

In a React project, App.js file servers as the central hub, acting as the main entry point for the application. This file plays a crucial role in orchestrating the structure of our React application by integrating various components and managing the overall flow. 

# BuildingsAPI.js

### Line 7
In the lines 7 to 10 we are using `useState` hook to initialize state variables. 
`buildings` is a state variable that will hold an array of building data
`search` is a state variable that will hold the user's input 
'currentPage' is a state variable that will keep track of the current page number
`buildingsPerPage` is a constant representing the number of buildings you want to display per page. 

By using state, we ensure that React can track changes to these values, and when they update, the component will re-render appropriately. 

### Line 13
The `useEffect` hook is used for handling side effects in functinal components. Side effects can include data fetching, subscriptions, or manually changing the DOM. 

The primary purpose here is to fetch data from an external API when the component mounts. 
`const fetchData = async () => {` - this is an asynchronous function responsible for making an API call using Axios to the specified URL 
`const response = await axios.get(` - axios is used to make a GET request to the provided URL, which is the API endpoint for NYC building data. 
`const fetchedData = response.data;` - if the API call is successful, the data is extracted from the response (response.data) and stored in the `fetchedData`
`setBuildings(fetchedData);` - this line updates the `buildings` stte with the fetched data 
`fetchData();` - after we handle any potential error during the API call with `catch` block, we invoke fetchData function immediatelly after the component mounts (thanks to the empty dependency array "[]", ensuring that the API call is made when the component is first rendered)

The use of 'useEffect' is crucial here because making API calls directly in the component body could lead to performance issues or unexpected behavior. useEffect ensures that the API call is made at the appropriate time in the component's lifecycle. 

### Line 41
The `filter` function is used on the `buildings` array to create a new array (`filterBuildings`) with elements that satisfy the provided condition. 
`(building) => {...}` is an arrow function that takes each `building` object from the `building` array. 
`Object.values(building)` returns an array containing all the property values of the `building` object

### Line 49
`[...filterBuildings]` - the spread operator creates a shallow copy of the `filterBuildings` array. This is done to avoid mutating the original array during the sorting process. 
`sort((a, b) => { ... })` - the sort method is used to arrange the buildings in a specific order. The comparison function `(a, b) => ... ` determines the sorting logic. 
'sort' function should return a negative number, zero, or a positive number. The specific values -1, 0, and 1 are commonly used for this purpose. 
So, when you return `-1`, it's telling the sort function that the elements should be rearranged so that the current element `(a)` comes before the next element `(b)`. When you return `1`, it's indicating that the current element `(a)` should come after the next element `(b)`.

### Line 62



