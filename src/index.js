const form = document.querySelector("#twitter_form");

form.addEventListener("submit", function(event) {
  // Prevent form submission to server
  event.preventDefault();

  // Get new tweet and send to timeline
  const textArea = document.querySelector("#input_tweet");
  const timeline = document.querySelector("#tweet_timeline");

  let tweet = textArea.value;
  textArea.value = "";

  const tweetHolder = document.createElement("li");
  timeline.appendChild(tweetHolder);
  tweetHolder.innerHTML = tweet;
});
