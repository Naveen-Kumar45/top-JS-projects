/*
  script.js - controls the UI and makes the request to the image generation API.
  - Hook DOM elements used by the app
  - Validate prompt input and show inline errors
  - Display a loading spinner and rotating messages while the API runs
  - Insert the returned image blob into the page
*/

// Import the InferenceClient from Hugging Face's CDN for making inference requests
import { InferenceClient } from "https://cdn.jsdelivr.net/npm/@huggingface/inference@4.13.30/+esm";

// Placeholder only; real Hugging Face credentials require a server-side backend.
const client = new InferenceClient("your-hf-token-here");


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
async function fetchImage(prompt) {
    image.style.display = "none";
    successImg.classList.add("d-none");
    placeholder.style.display = "none";
    spinner.classList.remove("d-none");

    loadingText.textContent =
        "Just a moment, we're getting things ready for you";

    let loadingMsgs = [
        "Analyzing your request",
        "Generating your image",
        "Finalizing results"
    ];

    let index = 0;

    const intervalId = setInterval(() => {
        if (index >= loadingMsgs.length) {
            clearInterval(intervalId);
            return;
        }

        loadingText.textContent = loadingMsgs[index];
        index++;
    }, 3000);

    try {
        const imageBlob = await client.textToImage({
            model: "black-forest-labs/FLUX.1-schnell",
            inputs: prompt
        });

        console.log(imageBlob);

        clearInterval(intervalId);

        const imageURL = URL.createObjectURL(imageBlob);

        image.src = imageURL;

        spinner.classList.add("d-none");
        image.style.display = "block";
        successImg.classList.remove("d-none");

    } catch (error) {

        clearInterval(intervalId);

        console.error("Hugging Face Error:", error);

        spinner.classList.add("d-none");

        alert("Image generation failed: " + error.message);
    }
}

