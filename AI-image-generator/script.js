/*
  script.js - controls the UI and makes the request to the image generation API.
  - Hook DOM elements used by the app
  - Validate prompt input and show inline errors
  - Display a loading spinner and rotating messages while the API runs
  - Insert the returned image blob into the page
*/

// DOM references
let input = document.getElementById("prompt");
let generateBtn = document.getElementById("generateBtn");
let image = document.getElementById("generatedImage");
let error = document.getElementById("errorMsg");
let imageContainer = document.getElementById("imageContainer");

// Listen for Enter key inside the prompt to trigger generation
input.addEventListener("keydown",(event) => {
    let promptValue = input.value;
    if (event.key === "Enter") {
        if (promptValue.trim() === ""){
            errorFunction(); // show validation error if prompt empty
            return;
        }
        fetchImage(promptValue.trim()); // call async generator
    }
});

// Clicking the generate button triggers the same flow
generateBtn.addEventListener("click",() => {
    let promptValue = input.value;
    if (promptValue.trim() === ""){
        errorFunction();
        return;
    }
    fetchImage(promptValue.trim());
});

// Show inline error and highlight input
function errorFunction(){
    error.style.display = "block";
    input.classList.add("input-error");
};

// Remove error state when user types again
input.addEventListener("input", () => {
    error.style.display = "none";
    input.classList.remove("input-error");
});

// UI elements used during loading and success
let spinner = document.getElementById("Spinner");
let placeholder = document.getElementById("placeholder");
let loadingText = document.getElementById("loadingText");
let successImg = document.getElementById("successImg");

/*
  fetchImage(prompt)
  - Hides current image/placeholder
  - Shows spinner with rotating messages
  - Sends POST request to the inference endpoint with the prompt
  - Converts returned blob to an object URL and displays it
*/
async function fetchImage(prompt){
    image.style.display = "none"; // hide any previous image
    successImg.classList.add("d-none");
    placeholder.style.display = "none";
    spinner.classList.remove("d-none"); // show spinner
    loadingText.textContent = "Just a moment, we're getting things ready for you";

    // Request options: POST JSON with the prompt. Authorization token used here.
    let options = {
        method : "POST",
        headers : {
            Authorization : 'Bearer     ',
            "Content-Type" : 'application/json',
        },
        body : JSON.stringify({ inputs : prompt })
    };

    // Rotate small status messages while waiting
    let loadingMsgs = ["Analyzing your request","Generating your image","Finalizing results"];
    let index = 0;
    let intervalId = setInterval(()=>{
        if(index === loadingMsgs.length){
            clearInterval(intervalId);
        }
        loadingText.textContent = loadingMsgs[index];
        index += 1;
    },3000);

    try {
        // Call the inference API (returns image blob on success)
        let response = await fetch("https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0", options);
        console.log(response.status);

        if (!response.ok){
            // If API returns an error, surface text for debugging
            let errorMsg = await response.text();
            console.log(errorMsg);
            throw new Error("API request failed");
        }

        // Read the binary image data and convert to a URL the img element can use
        let data = await response.blob();
        console.log(data);

        clearInterval(intervalId);
        const imageURL = URL.createObjectURL(data);
        image.src = imageURL;

        // Hide spinner and show resulting image + success message
        spinner.classList.add("d-none");
        image.style.display = "block";
        successImg.classList.remove("d-none");

    } catch(error) {
        // Basic error handling: alert user and hide spinner
        alert(error.message);
        spinner.classList.add("d-none");
    }
}


