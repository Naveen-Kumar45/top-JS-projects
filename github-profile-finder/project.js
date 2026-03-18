// This JavaScript file handles the core functionality of the GitHub Profile Finder application.
// It manages user input events, fetches data from the GitHub API, displays user suggestions,
// shows detailed user profiles, and lists their top repositories with language colors and stats.
// The code uses async/await for API calls and DOM manipulation for dynamic content updates.

// Get references to key DOM elements for input, suggestions, search button, and display areas
const input = document.getElementById("userName");
const suggestions = document.getElementById("suggestions");
const searchBtn = document.getElementById("searchBtn");
const profile = document.getElementById("profile");


// Variable to hold the timeout for debouncing input events
let timeout;
// Event listener for input changes: debounces the search to avoid excessive API calls
input.addEventListener("input", () => {
    clearTimeout(timeout);

    const query = input.value.trim();

    // Only fetch suggestions if query is longer than 2 characters
    if (query.length > 2) {
        timeout = setTimeout(() => {
            fetchSuggestions(query);
        },400); // 400ms delay for debouncing
    }else{
        // Hide suggestions and profile sections if query is too short
        suggestions.style.display = "none";
        profile.style.display = "none";
        reposContainer.style.display = "none";
    }
});

// Asynchronous function to fetch user suggestions from GitHub API based on search query
async function fetchSuggestions(query) {
    let response = await fetch(`https://api.github.com/search/users?q=${query}`);
    let data = await response.json();

    suggestions.innerHTML = "";

    if (data.items && data.items.length > 0) {
        // Limit to top 5 suggestions
        let usersData = data.items.slice(0, 5);

        // Create list items for each suggested user
        usersData.forEach( user => {
            let li = document.createElement("li");

            li.innerHTML = `<img src="${user.avatar_url}">
                            <span> ${user.login}</span>`;
            
            // When a suggestion is clicked, set input value and display profile
            li.addEventListener("click", () => {
                input.value = user.login;
                suggestions.style.display = "none";
                displayProfile(user.login);
            })
            suggestions.appendChild(li);
        });

        suggestions.style.display = "block";
    }
    else{
        // Show message if no users found
        suggestions.innerHTML = "<li>No users found</li>";
        suggestions.style.display = "block";
    }
};

// Event listener for search button: triggers profile display for entered username
searchBtn.addEventListener("click", () => {
    const username = input.value.trim();

    if (username) {
        displayProfile(username);
    }
    else{
        alert("Please enter a Github username");
    }
    suggestions.style.display = "none";
});

// Get references to profile spinner and content area
let spinner1 = document.getElementById("profileSpinner");
let profileContent = document.getElementById("profileContent");

// Asynchronous function to fetch and display user profile information
async function displayProfile(username) {

    profile.style.display = "block";
    spinner1.classList.remove("d-none"); // Show loading spinner
    profileContent.innerHTML=""; // Clear previous content

    let response = await fetch(`https://api.github.com/users/${username}`);
    let user = await response.json();

    spinner1.classList.add("d-none"); // Hide spinner after loading
    
    if (user.login) {
        // Display user profile details
        profileContent.innerHTML = `<img src="${user.avatar_url}" width="120">
                                    <h2>${user.name || user.login}</h2>
                                    <p>${user.bio || "No bio available"}</p>
                                    <p><strong>Followers:</strong> ${user.followers}</p>
                                    <p><strong>Repositories:</strong> ${user.public_repos}</p>
                                    <p><a href="${user.html_url}" target="_blank">View Profile on GitHub</a></p>`;
    
               // Fetch and display repositories
        fetchRepositories(username);

    } else {
        // Show error if user not found
        profileContent.innerHTML = "<p>User not found</p>";
    }

}



// Object mapping programming languages to their display colors
const languageColors = {
    JavaScript: "#fade09",
    Python: "#068efd",
    HTML: "#f43809",
    CSS: "#3c068e",
    Java: "#f59208",
    TypeScript: "#2b7489",
    C: "#353434",
    "C++": "#fa044e"
};

// Get references to repositories container, content, and spinner
let reposContainer = document.getElementById("reposContainer");
let reposContent = document.getElementById("reposContent");
let spinner = document.getElementById("reposSpinner");

// Asynchronous function to fetch and display user's repositories
async function fetchRepositories(username) {

    reposContainer.style.display = "block";
    spinner.classList.remove("d-none"); // Show loading spinner
    reposContent.innerHTML = ""; // Clear previous content

    let response = await fetch(`https://api.github.com/users/${username}/repos`);
    let repos = await response.json();

    spinner.classList.add("d-none"); // Hide spinner after loading

    if (repos.length === 0){
        // Show message if no repositories found
        reposContent.innerHTML = `<p class="text-center">No repositories found for this user.</p>`;
        return;
    }

    // Limit to top 5 repositories
    let reposData = repos.slice(0,5);

    // Create grid container for repositories
    reposContent.innerHTML = `<h3>Top Repositories:</h3>
                              <div id="repoGrid" class="repo-grid"></div>`;
    
    let repoGrid = document.getElementById("repoGrid");
    
    // Create and append repository cards
    reposData.forEach( repo => {

        const updatedDate = new Date(repo.updated_at)
        .toLocaleDateString("en-GB"); // Format date as DD/MM/YYYY
        
        let language = repo.language;
        let color = languageColors[language] || "#999"; // Default color if language not in map

        let  repoElement = document.createElement("div");
        repoElement.classList.add("repo-card");

        // Populate repository card with name, stats, and language
        repoElement.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                <p> ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count} | 🕒 ${updatedDate}</p>
                                <p class="repo-language"><strong>Language: </strong><span class="lang-text" style="color:${color}">${repo.language || "Unknown"}</span></p>`;
        
        repoGrid.appendChild(repoElement);

    });

};