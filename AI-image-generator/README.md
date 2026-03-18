# AI Image Generator

A simple browser-based image generator that turns text prompts into images using the Hugging Face Inference API (Stable Diffusion).


🔗 **Live Demo:**  
https://Naveen-Kumar45.github.io/top-JS-projects/AI-image-generator/

## 🚀 What it does
- Lets users enter a text prompt (e.g., "A futuristic city at sunset")
- Sends the prompt to a Stable Diffusion model via Hugging Face
- Displays the generated image directly in the browser
- Shows loading status with rotating messages while the image generates

## 🔧 Tech Stack
- **HTML/CSS/JavaScript** (no build step)
- **Bootstrap 5** for layout styling
- **Hugging Face Inference API** (`stabilityai/stable-diffusion-xl-base-1.0`)

## ▶️ Run locally
1. Clone this repository.
2. Open `index.html` in your browser.

> ✅ No server is required – this is a static frontend app.

## 🛠 Configuration (API key)
This app uses the Hugging Face Inference API and requires an API key.

1. Get an API key from https://huggingface.co/settings/tokens.
2. Open `script.js` and replace the hardcoded token value with your own:

```js
Authorization: 'Bearer YOUR_TOKEN_HERE',
```

> ⚠️ **Do not commit your API key to a public repository.** In production, proxy requests through a server to keep the key secret.

## 🧪 Usage
1. Enter a descriptive prompt in the input field.
2. Press **Enter** or click the **➜** button.
3. Wait for the generation to complete and the image to appear.

## 📌 Notes
- If you see an error, check your browser console for details.
- The current implementation uses a hardcoded Hugging Face token (for demo purposes).


## 📄 License
This project is released under the MIT License.
