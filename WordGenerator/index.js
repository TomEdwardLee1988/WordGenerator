const wordContainer = document.querySelector(".word");
const nextButton = document.querySelector(".next");
import { wordList } from "./data.js";

function random(arr) {
  let rand = Math.floor(Math.random() * arr.length); // Get a random index

  const randWord = arr[rand]; // Get the random word
  console.log(randWord);

  // Remove the selected word from the array
  arr.splice(rand, 1);

  return randWord;
}

// Display a random word when the page loads
wordContainer.textContent = random(wordList);

// Correct the event listener to remove word after being used
nextButton.addEventListener("click", function () {
  // Check if there are still words left in the array
  if (wordList.length > 0) {
    wordContainer.textContent = random(wordList); // Show a new random word
  } else {
    wordContainer.textContent = "No more words!"; // If no words left
  }
});
