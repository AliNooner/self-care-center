
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];


// VARIABLES GO HERE
var buddha = document.querySelector(".buddha-image");
var receiveButton = document.querySelector(".receive-message-button");
var message = document.querySelector(".random-message");
var radioAffirmation = document.querySelector("#affirmation-choice");
var mantraAffirmation = document.querySelector("#mantra-choice");
var messageText = document.querySelector(".message-text");
var userAffirmation = document.querySelector("#user-aff-choice");
var userMantra = document.querySelector("#user-mantra-choice");
var addYourOwnButton = document.querySelector(".add-your-own-button");
var form = document.querySelector(".form");
var userInput = document.querySelector(".user-input");
var submitButton = document.querySelector(".submit-button");
var userMessageLine = document.querySelector(".user-message-line");


// EVENT LISTENERS GO HERE
receiveButton.addEventListener('click', sendMessage);
addYourOwnButton.addEventListener('click', showForm);
submitButton.addEventListener('click', pushNewMessage);


// FUNCTIONS GO HERE
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function sendMessage() {
  displayMessage();
  if (radioAffirmation.checked) {
    messageText.innerText = affirmations[getRandomIndex(affirmations)];
  } else if (mantraAffirmation.checked) {
    messageText.innerText = mantras[getRandomIndex(mantras)];
    }
}


function displayMessage() {
  buddha.classList.add("hidden");
  message.classList.remove("hidden");
}

function pushNewMessage() {
  displayUserMessage()
  if (userAffirmation.checked) {
  affirmations.push(userInput.value);
} else if (userMantra.checked) {
  (mantras).push(userInput.value);
} else {
  userMessageLine.innerText = "Error: Please select message type";
}
}

function displayUserMessage() {
  event.preventDefault();
  form.classList.add("hidden");
  addYourOwnButton.classList.add("hidden");
  userMessageLine.classList.remove("hidden");
  userMessageLine.innerText = userInput.value;
}


function showForm() {
  addYourOwnButton.classList.add("hidden");
  form.classList.remove("hidden");
}
