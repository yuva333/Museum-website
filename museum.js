// 2nd page js code
// document.addEventListener("DOMContentLoaded", () => {
//   const containers = document.querySelectorAll(".container");

//   containers.forEach(container => {
//     const link = container.getAttribute("data-link");
//     container.style.cursor = "pointer";

//     container.addEventListener("click", () => {
//       document.body.classList.add("fade-out");

//       setTimeout(() => {
//         window.location.href = link;
//       }, 600); 
//     });
//   });
// });


  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.container[data-link]').forEach(function (div) {
      div.addEventListener('click', function () {
        const url = div.getAttribute('data-link');
        if (url) {
          window.open(url, '_blank'); // opens in new tab
          // or use: window.location.href = url; // for same tab
        }
      });
    });
  });




//egypt video

// egypt.js

window.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-container");

  const video = document.createElement("video");
  video.width = 640;
  video.height = 360;
  video.controls = true;

  const source = document.createElement("source");
  source.src = "egypt-tour.mp4";
  source.type = "video/mp4";

  video.appendChild(source);
  videoContainer.appendChild(video);

video.autoplay = true;
video.loop = true;
video.muted = true; // Required for autoplay in many browsers

});


