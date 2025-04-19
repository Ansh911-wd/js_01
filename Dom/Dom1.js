// Select the body element
const body = document.body;

// Create a new div element
const newDiv = document.createElement('div');

// Add some text content to the div
newDiv.textContent = 'Hello, DOM!';

// Add a class to the div
newDiv.classList.add('my-div');
newDiv.classList.delete('my-div');

// Append the div to the body
body.appendChild(newDiv);

// Add some styles to the div
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.padding = '10px';
newDiv.style.borderRadius = '5px';
newDiv.style.textAlign = 'center';