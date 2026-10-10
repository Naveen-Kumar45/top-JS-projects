# AI Image Generator

A browser-based image generator that turns text prompts into images with Hugging Face Inference.

Live demo: https://Naveen-Kumar45.github.io/top-JS-projects/AI-image-generator/

## What it does

- Accepts a text prompt.
- Requests an image using the Hugging Face Inference API and displays the result.
- Shows loading status while image generation is running.

## Tech stack

- HTML, CSS, and JavaScript
- Bootstrap 5
- Hugging Face Inference API (`black-forest-labs/FLUX.1-schnell`)

## Run locally

Open `index.html` in a browser to load the static interface.

The frontend currently contains a placeholder token, so image generation will not
work with Hugging Face until requests are sent through a backend. Do not replace
the placeholder with a real token: browser-delivered code is visible to users.
For a deployed app, the backend must read the Hugging Face token from a
server-side environment variable and proxy generation requests.

GitHub Pages can host the static interface, but cannot host that backend or
securely store an API token.

## Usage

1. Enter a descriptive prompt.
2. Press Enter or click the arrow button.
3. Wait for the generated image.

## Security

- The token placeholder in `script.js` is not a working credential.
- Never commit real API tokens, `.env` files, private keys, or other credentials.
- The project `.gitignore` excludes environment files, `node_modules`, and common
  private-key files.

## License

This project is released under the MIT License.
