# GitHub Profile Finder

A modern, responsive web application that allows users to search for GitHub profiles and explore user information including repositories, followers, and more. Built with vanilla JavaScript, HTML5, and CSS3, featuring real-time search suggestions and a clean, GitHub-inspired interface.


🔗 **Live Demo:**  
https://Naveen-Kumar45.github.io/top-JS-projects/github-profile-finder/

## 🚀 Features

- **Real-time Search Suggestions**: Get instant username suggestions as you type (minimum 3 characters)
- **User Profile Display**: View detailed user information including:
  - Profile avatar
  - Name and bio
  - Follower count
  - Public repository count
  - Direct link to GitHub profile
- **Repository Showcase**: Display top 5 repositories with:
  - Repository name and link
  - Star and fork counts
  - Last updated date
  - Programming language with color coding
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Loading States**: Visual feedback during API calls with spinners
- **Error Handling**: Graceful handling of invalid usernames and API errors

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
- **Frameworks & Libraries**:
  - Bootstrap 5.3.8 (for responsive design and components)
  - FontAwesome (for icons)
- **APIs**:
  - GitHub REST API v3

## 📋 Prerequisites

- A modern web browser with JavaScript enabled
- Internet connection (for GitHub API calls)
- No additional dependencies or installations required

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/github-profile-finder.git
   cd github-profile-finder
   ```

2. **Open the application**:
   - Open `index.html` in your web browser
   - Or serve the files using a local web server (recommended for better functionality)

3. **Start searching**:
   - Type a GitHub username in the search box
   - Select from suggestions or click the search button
   - Explore the user's profile and repositories

## 📖 Usage

### Searching for Users
1. Enter at least 3 characters in the search input
2. View real-time suggestions with user avatars
3. Click on a suggestion or use the search button to view the profile

### Viewing Profile Information
- **Profile Section**: Displays user avatar, name, bio, followers, and repository count
- **Repositories Section**: Shows the top 5 repositories with detailed statistics

### Repository Information
Each repository card displays:
- Repository name (clickable link to GitHub)
- Star count (⭐)
- Fork count (🍴)
- Last updated date
- Primary programming language with color indicator

## 🔧 API Usage

The application uses the GitHub REST API:

- **User Search**: `GET https://api.github.com/search/users?q={query}`
- **User Profile**: `GET https://api.github.com/users/{username}`
- **User Repositories**: `GET https://api.github.com/users/{username}/repos`

**Note**: The app makes unauthenticated requests to the GitHub API, which has rate limits of 60 requests per hour. For higher usage, consider implementing authentication.

## 🎨 Customization

### Language Colors
Modify the `languageColors` object in `project.js` to add or change programming language color indicators:

```javascript
const languageColors = {
    JavaScript: "#fade09",
    Python: "#068efd",
    // Add more languages...
};
```

### Styling
Customize the appearance by modifying `style.css`:
- Change color scheme
- Adjust layout dimensions
- Modify hover effects and transitions

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Bootstrap's grid system ensures proper layout across all screen sizes.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**Made with ❤️ for the GitHub community**