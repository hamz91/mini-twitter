const form = document.querySelector("#twitter_form");
const textArea = document.querySelector("#input_tweet");
let counter = document.querySelector("#char_counter");
let count = 0;

// Textarea listener
// Updating character counter
textArea.addEventListener("keydown", function() {
  count++;
  counter.innerHTML = count;
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

  // Sorting tweets in ascending order
  if (timeline.children.length > 0) {
    const tweetHolder = document.createElement("li");
    timeline.insertBefore(tweetHolder, timeline.children[0]);
    tweetHolder.innerHTML = tweet;
  } else {
    const tweetHolder = document.createElement("li");
    timeline.appendChild(tweetHolder);
    tweetHolder.innerHTML = tweet;
  }

  // Reset counter
  count = 0;
  counter.innerHTML = count;
});
