function helloWorld() {
    let message: string = 'Hello, World!';
    console.log(message);
}


function hello(name: string) {
    return `Hello, ${name}!`;
}

export { helloWorld, hello };