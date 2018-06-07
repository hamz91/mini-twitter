const form = document.querySelector("#twitter_form");
const textArea = document.querySelector("#input_tweet");
const button = document.querySelector("#submit");
let counterContainer = document.querySelector("#char_counter");
let count = 0;
const charLimit = textArea.getAttribute("maxlength");

// Counter color update
function counterState(count) {
  if (count == charLimit) {
    counterContainer.style.color = "red";
  } else {
    counterContainer.style.color = "black";
  }
}
// Update counter value
function counterUpdate() {
  counterContainer.innerHTML = event.target.value.length;
}

// Textarea listener
// Updating character counter
textArea.addEventListener("input", function() {
  //   if (count > charLimit) {
  //     button.disabled = true;
  //   } else {
  counterUpdate();
  counterState(event.target.value.length);
  button.disabled = false;
  //   }
});

// Form listener
form.addEventListener("submit", function(event) {
  // Prevent form submission to server
  event.preventDefault();

  // Get new tweet and send to timeline
  const timeline = document.querySelector("#tweet_timeline");
  let tweet = textArea.value;

  // clear form
  textArea.value = "";

  // Inserting tweets in ascending order
  const tweetHolder = document.createElement("li");
  tweetHolder.innerHTML = tweet;
  timeline.prepend(tweetHolder);
  // => Old solucion with insertBefore
  //   if (timeline.children.length > 0) {
  //     const tweetHolder = document.createElement("li");
  //     timeline.insertBefore(tweetHolder, timeline.children[0]);
  //     tweetHolder.innerHTML = tweet;
  //   } else {
  //     const tweetHolder = document.createElement("li");
  //     timeline.appendChild(tweetHolder);
  //     tweetHolder.innerHTML = tweet;
  //   }

  // Reset counter
  count = 0;
  counterUpdate(count);
  counterState(count);
});
