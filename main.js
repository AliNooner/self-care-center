
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
var userAffirmation = document.querySelector(."affirmation-choice");
var userMantra = document.querySelector(".mantra-choice");
var addYourOwnButton = document.querySelector(".add-own-button");
var form = document.querySelector(".form");

// EVENT LISTENERS GO HERE
receiveButton.addEventListener('click', sendMessage);
addYourOwnButton.addEventListener('click', showForm);


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

// Add an Add Message button in a logical spot
// add Add Message button under box two

// When user clicks button, a form will appear
// There should be two inputs, one to specify aff or mantra (radio button)
// Another to add the text of the message itself (check out code pen for input button)
// Should contain a submit button (add Submit Button under radio button)

// When user clicks on Submit button, the message is added to the appropriate array of messages
// (.push to aff array or .push to mantra array)

function pushNewMessage {
  if (userAffirmation.checked) {
  // push message to affirmation array
  // display user message function
  }
}

function displayUserMessage {
  //hide the button
  // show message
}

function showForm {
  addYourOwnButton.classList.add("hidden");
  form.classList.remove("hidden");
}
// When a message is added, that message should be displayed in the message box (box two), instead of buddha (hide buddha)

// Be sure to match the styling of existing elements
