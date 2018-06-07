const form = document.querySelector("#twitter_form");
const textArea = document.querySelector("#input_tweet");
const button = document.querySelector("#submit");
let counterContainer = document.querySelector("#char_counter");
let count = 0;
const charLimit = 280;
// Increase/decrease count value
function counting(action) {
  if (action === "up") {
    count++;
    return;
  }
  count--;
}
// Counter color update
function counterState(count) {
  if (count > charLimit) {
    counterContainer.style.color = "red";
  } else {
    counterContainer.style.color = "black";
  }
}
// Update counter value
function counterUpdate(count) {
  counterContainer.innerHTML = count;
}

// Textarea listener
// Updating character counter
textArea.addEventListener("keydown", function() {
  if (count > charLimit) {
    button.setAttribute("disabled", true);
  } else {
    if (event.which === 8 && count > 0) {
      counting("down");
      counterUpdate(count);
    }
    if (event.which !== 8) {
      counting("up");
      counterUpdate(count);
    }
    counterState(count);
    button.setAttribute("disabled", false);
  }
});

textArea.addEventListener("change", function(event) {
  counterContainer.innerHTML = event.target.value.length;
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
