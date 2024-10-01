function fetchDataWithPromises() {
    // Fetch data from JSONPlaceholder API using Promises
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // If response is not ok, throw an error
        }
        return response.json(); // Return the parsed JSON data
      })
      .then(data => {
        console.log('Data fetched using Promises:', data);
      })
      .catch(error => {
        console.error('There was an error fetching the data (Promises):', error);
      });
  }
  
  // Call the function
  fetchDataWithPromises();
  