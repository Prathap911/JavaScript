async function fetchDataWithAsyncAwait() {
    try {
      // Fetch data from JSONPlaceholder API using Async/Await
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Network response was not ok'); // If response is not ok, throw an error
      }
  
      const data = await response.json(); // Await the parsed JSON data
      console.log('Data fetched using Async/Await:', data);
    } catch (error) {
      console.error('There was an error fetching the data (Async/Await):', error);
    }
  }
  
  // Call the function
  fetchDataWithAsyncAwait();
  