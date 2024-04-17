const quotes = [
    {
        quote: "In this world nothing can be said to be certain, except death and taxes.",
        author: "Benjamin Franklin"
    },
    {
        quote: "We have a system that increasingly taxes work and subsidizes nonwork.",
        author: "Milton Friedman"
    },
    {
        quote: "The larger the island of knowledge, the longer the shoreline of wonder.",
        author: "Ralph W. Sockman"
    },
    {
        quote: "The first money I ever earned was for drawing stone tools.",
        author: "Mary Leakey"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//0~9 까지의 랜덤 숫자
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//텍스트 설정
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;