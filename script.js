// script.js
// Wait for the DOM (HTML document) to fully load and become ready for manipulation.
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the HTML element with the ID "playButton."
  let playButton = document.getElementById("playButton");
  // Get a reference to the HTML5 audio element with the ID "music."
  let music = document.getElementById("music");

  // Attach a click event listener to the "playButton" element.
  playButton.addEventListener("click", function () {
    // Check if the "music" element is currently paused.
    if (music.paused) {
      // If it's paused, play the audio.
      music.play();
      // now change "playButton" to say "Pause Music."
      playButton.textContent = "Pause Music";
    } else {
      // If it's playing music, we now want it to pause the music.
      music.pause();
      // now make it say play music
      playButton.textContent = "Play Music";
    }
  });
});
