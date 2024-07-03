const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');

const texts = ["Hi, I'm Faahim.", "I'm a Web Developer.", "Welcome to my Portfolio."];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let pauseBetweenTexts = 2000;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, pauseBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingSpeed);
});

// enter key to next-page
