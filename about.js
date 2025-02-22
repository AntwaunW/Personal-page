/*
OLD CODE THAT DIDNT WORK

const text = text.textContent;
const typingElement = document.getElementById("bio-info");
let index = 0;

function type() {
    if (index < Text.textContent.length)

typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
}
*/

const text = document.getElementById("bio-info").textContent; // Get text content
const typingElement = document.getElementById("bio-info");
let index = 0;

function type() {
    if (index < text.length) {  // Remove incorrect semicolon
        typingElement.textContent = text.substring(0, index + 1); // Display typed text
        index++;
        setTimeout(type, 20); // Continue typing effect
    }
}

typingElement.textContent = ""; // Clear initial text
type();