/* Caption: form.js — Handles form interaction and submission.
    - Validates individual inputs on blur and on submit.
    - Builds an `application` object and stores submissions in localStorage under `submitData`.
    - Shows a loading spinner and success message on successful submit.
*/

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let age = document.getElementById("age");
let male = document.getElementById("male");
let female = document.getElementById("female");
let phone = document.getElementById("phone");
let topic = document.getElementById("topic");
let formContainer = document.getElementById("formContainer");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let ageError = document.getElementById("ageError");
let phoneError = document.getElementById("phoneError");
let topicError = document.getElementById("topicError");


// `application` holds the current input values before submitting.
let application = {
    name : "",
    email : "",
    age : "",
    gender : "male",
    phone : "",
    topic : "",
}


// Read stored submissions from localStorage; return JSON string or empty array string.
let getDataFromLocalStorage = () => {
    let data = localStorage.getItem("submitData"); // raw string or null
    if (data === null) {
        return "[]"; // no stored data -> represent as empty array string
    }
    else{
        return data; // return stored JSON string
    }
};


// Parse stored JSON into array for in-memory operations.
let submitData = JSON.parse(getDataFromLocalStorage());


// Validate name on blur: show error or save to `application`.
fullName.addEventListener("blur", (event) => {
    if (event.target.value.trim()===""){
        nameError.textContent = "Full Name is required*"; // show error
    }
    else{
        nameError.textContent = ""; // clear error
        application.name = event.target.value; // update application object
    }
});

// Validate email on blur: required check and store value.
email.addEventListener("blur", (event) => {
    if (event.target.value.trim()===""){
        emailError.textContent = "Email is required*";
    }
    else{
        emailError.textContent = "";
        application.email = event.target.value;
    }
});

// Validate age on blur and save.
age.addEventListener("blur", (event) => {
    if (event.target.value.trim()===""){
        ageError.textContent = "Age is required*";
    }
    else{
        ageError.textContent = "";
        application.age = event.target.value;
    }
});

// Validate phone on blur and save.
phone.addEventListener("blur", (event) => {
    if (event.target.value.trim()===""){
        phoneError.textContent = "Phone Number is required*";
    }
    else{
        phoneError.textContent = "";
        application.phone = event.target.value;
    }
});

// Validate topic on blur and save.
topic.addEventListener("blur", (event) => {
    if (event.target.value.trim()===""){
        topicError.textContent = "Topic is required*";
    }
    else{
        topicError.textContent = "";
        application.topic = event.target.value;
    }
});

// Update gender when radio selection changes.
male.addEventListener("change", (event) => {
    application.gender = event.target.value;
});

female.addEventListener("change", (event) => {
    application.gender = event.target.value;
});

// Validate all required fields and set error messages accordingly.
let validateApplicationData = () => {
    let {name, email, age, phone, topic} = application;
    if (name.trim() === ""){
        nameError.textContent = "Full Name is required*";
    }
    if (email.trim() === ""){
        emailError.textContent = "Email is required*";
    }
    if (age.trim() === ""){
        ageError.textContent = "Age is required*";
    }
    if (phone.trim() === ""){
        phoneError.textContent = "Phone Number is required*";
    }
    if (topic.trim() === ""){
        topicError.textContent = "Topic is required*";
    }
};

// UI elements for feedback (spinner and success message).
let spinner = document.getElementById("spinnerContainer");
let successMessage = document.getElementById("successMessage");

// On submit: prevent default, validate, then persist if valid.
formContainer.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form POST
    validateApplicationData(); // ensure required fields are flagged

    let {name, email, age, phone, topic} = application;
    // Only proceed when all required fields are non-empty
    if (name.trim() !== "" && email.trim() !== "" && age.trim() !== "" && phone.trim() !== "" && topic.trim() !== ""){
        spinner.style.display = "flex"; // show loading indicator

        // simulate async save with timeout
        setTimeout(() => {
            submitData.push(application); // add to in-memory array
            localStorage.setItem("submitData", JSON.stringify(submitData)); // persist to localStorage
            formContainer.reset(); // clear UI form
            spinner.style.display = "none"; // hide spinner
            successMessage.style.display = "block"; // show success

            // reset application object to defaults
            application = {
                name: "",
                email: "",
                age: "",
                gender: "male",
                phone: "",
                topic: ""
            };
        },1500);


        // hide success message after short delay
        setTimeout(() => {
            successMessage.style.display = "none";
        },3000);

    }
});