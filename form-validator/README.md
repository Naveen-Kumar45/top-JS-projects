# Form Validator

A form-based application that collects user input, validates the data, and stores it in localStorage. The stored data is displayed in a dynamic table format.


🔗 **Live Demo:**  
https://Naveen-Kumar45.github.io/top-JS-projects/form-validator/ 


## 🚀 Project Overview

This project provides a basic form with real-time validation, showing how to:

- Input field validation (required fields, formats)
- Store user data in localStorage
- Display entries in a table
- Persistent data even after refresh
- Display success feedback on successful submission

## 📁 Project Structure

- `index.html` – Main demo page that loads the form.
- `form.js` – Validation logic and event handling for the form.
- `form.css` – Styles specific to the form and validation states.
- `applications.html` – The applicants page
- `applications.js` – styling to the applicants page
- `application.css` – Logic and display of Applicants in a table

## ✅ How to Run

1. Clone this repository:
2. Open `index.html` in a browser.

> Tip: Use **Live Server** in VS Code for a better development experience.

## 🧪 How It Works

The validation script (`form.js`) listens for input events and checks fields against rules such as:

- Required fields
On submit, it prevents the default behavior if any field is invalid and shows inline error messages.

## ✅ Features

- Real-time validation feedback
- Clean, minimal styling
- Easy to extend with new fields & rules
- Works entirely in the browser (no framework)

## 🛠️ Customize

To add a new field:
1. Add the field markup to `index.html`.
2. Add corresponding validation logic in `form.js`.
3. Style the field in `form.css` if needed.

## 📄 License

This project is released under the MIT License. See `LICENSE` for details.
