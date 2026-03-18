# Task Manager

A simple yet elegant web-based task management application built with vanilla JavaScript, Bootstrap, and Tailwind CSS.

## Overview

Task Manager is a lightweight todo application that allows users to create, track, and manage their daily tasks with ease. All tasks are automatically saved to the browser's local storage, ensuring your data persists even after you close the application.

## Features

✅ **Add Tasks** - Quickly add new tasks with a clean input interface  
✅ **Task Status Toggle** - Mark tasks as complete or incomplete with a checkbox  
✅ **Delete Tasks** - Remove individual tasks with the trash icon  
✅ **Save Tasks** - Persist all tasks to browser's local storage  
✅ **Clear All** - Remove all tasks at once  
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices  
✅ **Modern UI** - Beautiful gradient background with smooth animations and hover effects  
✅ **Input Validation** - Alerts user when attempting to add empty tasks  

## Technologies Used

- **Frontend Framework**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: 
  - Bootstrap 5.3.8
  - Tailwind CSS
  - Custom CSS with gradient animations
- **Icons**: Font Awesome
- **Storage**: Browser's Local Storage API
- **CDN**: jsDelivr

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Open in a browser**
   Simply open the `index.html` file in your web browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

   Or use a live server extension in VSCode for a better development experience.

## Project Structure

```
task-manager/
├── index.html          # Main HTML structure
├── task.js             # JavaScript logic and DOM manipulation
├── task.css            # Custom styling and animations
├── README.md           # This file
```

## How to Use

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Mark Complete**: Click the checkbox next to a task to toggle its completion status (completed tasks appear with strikethrough)
3. **Delete a Task**: Click the trash icon to remove a specific task
4. **Save Tasks**: Click "Save Tasks" to persist your tasks to local storage
5. **Clear All**: Click "Clear All Tasks" to remove all tasks at once

## Code Highlights

### Task Management
- Tasks are stored as JavaScript objects with properties: `taskName`, `id`, and `isChecked`
- Unique IDs are generated using `Date.now()` for reliable task identification
- Local storage retrieval handles persistent data across browser sessions

### DOM Manipulation
- Dynamic task creation using `createElement()` and `appendChild()`
- Event listeners for user interactions (add, toggle, delete)
- Real-time UI updates reflecting task status changes

### Styling
- Gradient background (135deg angle with warm peach tones)
- Smooth CSS transitions on button hover effects
- Bootstrap's flexbox utilities for responsive layout
- Custom task styling with strikethrough effect for completed items


## Browser Compatibility

- Chrome/Chromium ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## License

This project is open source and available under the MIT License.

## Author

Created as part of the JavaScript learning journey in the top-JS-projects collection.

---

**Live Demo**: https://Naveen-Kumar45.github.io/top-JS-projects/task-manager/
