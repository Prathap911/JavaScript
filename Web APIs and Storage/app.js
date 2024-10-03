document.getElementById('fetch-users').addEventListener('click',fetchUsers);
document.getElementById('toggle-theme').addEventListener('click',toggleTheme);


function fetchUsers(){
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((users) => {
    displayUsers(users);
})
.catch((error) =>{
    console.error('There has been a problem with your fetch operation:', error);
});

}


function displayUsers(users){
    const userList= document.getElementById('user-list');
    userList.innerHTML='';


    users.forEach((user)=>{
    const userElement= document.createElement('div');
    userElement.classList.add('user');

    userElement.innerHTML=`
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Website: ${user.website}</p>
          `;

          userList.appendChild(userElement);
    });
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
    body.classList.toggle('dark-theme');
  
    // Save the new theme to local storage
    localStorage.setItem('theme', newTheme);
  }
  

// Function to load the saved theme from local storage on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(`${savedTheme}-theme`);
    }
  }
  
  // Load the saved theme on page load
  window.addEventListener('load', loadTheme);
  