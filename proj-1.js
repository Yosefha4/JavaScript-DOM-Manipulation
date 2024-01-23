//Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    person: "William Butler Yeats",
  },
  {
    quote: "It is never too late to be what you might have been.",
    person: "George Eliot",
  },
  {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker",
  },
];

btn.addEventListener("click", function () {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;



});
