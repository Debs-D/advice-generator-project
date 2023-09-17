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
    const quoteText = await fetchAdvice();

    quote.textContent = quoteText.advice;
    console.log(quoteText);
}

const dice = document.getElementById("dice");
dice.addEventListener("click", updateAdvice);
