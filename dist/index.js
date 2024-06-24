import { helloWorld, hello } from "./hello-world";
const DEFAULT_NAME = 'World';
const nameInput = document.querySelector('input');
const greeting = document.querySelector('h1');
nameInput.addEventListener('input', () => {
    if (nameInput.value) {
        greeting.innerText = hello(nameInput.value);
    }
    else {
        greeting.innerText = hello(DEFAULT_NAME);
    }
});
window.addEventListener("DOMContentLoaded", () => {
    helloWorld();
});
//# sourceMappingURL=index.js.map