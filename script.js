"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.load();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  video.currentTime = 0;
  video.load();
});
