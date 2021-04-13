
const fetchToDoFromApi = () => fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
  .then(response => response.json())
  .then(json => console.log(json))

export default fetchToDoFromApi