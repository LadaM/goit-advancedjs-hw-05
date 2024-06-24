import { helloWorld, hello } from "./hello-world";

const DEFAULT_NAME = 'World';
const nameInput = document.querySelector('input') as HTMLInputElement;
const greeting = document.querySelector('h1') as HTMLHeadingElement;

nameInput.addEventListener('input', () => {
    if (nameInput.value) {
        greeting.innerText = hello(nameInput.value);
    } else {
        greeting.innerText = hello(DEFAULT_NAME);
    }
})

window.addEventListener("DOMContentLoaded", () => {
    helloWorld();
});