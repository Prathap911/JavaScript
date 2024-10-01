// Create a function to fetch multiple resources sequentially and then combines the results using Promises.

function fetchMultipleResourcesSequentiallyWithPromises() {
    let combinedResults = {};
  
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch posts');
        return response.json();
      })
      .then(posts => {
        combinedResults.posts = posts;
        return fetch('https://jsonplaceholder.typicode.com/users');
      })
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
      })
      .then(users => {
        combinedResults.users = users;
        return fetch('https://jsonplaceholder.typicode.com/comments');
      })
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch comments');
        return response.json();
      })
      .then(comments => {
        combinedResults.comments = comments;
        console.log('Combined Results:', combinedResults);
        return combinedResults;
      })
      .catch(error => {
        console.error('Error fetching resources:', error);
      });
  }
  
  // Call the function
  fetchMultipleResourcesSequentiallyWithPromises();
  