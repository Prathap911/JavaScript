//Create a function to fetch multiple resources sequentially and then combines the results using Async/Await.

async function fetchMultipleResourcesSequentially() {
    try {
      // Fetch first resource (posts)
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!postsResponse.ok) {
        throw new Error('Failed to fetch posts');
      }
      const posts = await postsResponse.json();
  
      // Fetch second resource (users)
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!usersResponse.ok) {
        throw new Error('Failed to fetch users');
      }
      const users = await usersResponse.json();
  
      // Fetch third resource (comments)
      const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!commentsResponse.ok) {
        throw new Error('Failed to fetch comments');
      }
      const comments = await commentsResponse.json();
  
      // Combine the results
      const combinedResults = {
        posts,
        users,
        comments,
      };
  
      console.log('Combined Results:', combinedResults);
  
      return combinedResults;
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  }
  
  // Call the function
  fetchMultipleResourcesSequentially();
  