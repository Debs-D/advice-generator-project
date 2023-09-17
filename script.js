// script.js
const apiUrl = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.slip;
    } catch (error) {
        console.log(error);
        return "something went wrong";
    }
}

async function updateAdvice() {
    const quote = document.getElementById("quote");
    quote.textContent = "Fetching advice...";
    const btn = document.querySelector(".btn");
    btn.style.transform = "rotate(180deg)";
    const quoteText = await fetchAdvice();

    quote.textContent = quoteText.advice;
    btn.style.transform = "rotate(0deg)";
}

const dice = document.getElementById("dice");
dice.addEventListener("click", updateAdvice);
