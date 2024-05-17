var video_container = document.querySelector("#video_container");
var video_tag = document.querySelector("#video");
var scene_name = document.querySelector("#scene_name");
var scene = document.querySelector("#scene");
var audio = document.getElementById("audio");
var html_class = document.querySelector(".html");
var body_class = document.querySelector(".body");

let playing = false
let isVideoReady = false

function launchIntro() {
  if (!playing) {
    playing = true;
    video.play();
    video_container.classList.remove("hidden");
    video.play();
    audio.play();
    setTimeout(() => {
      scene_name.classList.remove("hidden");
      setTimeout(() => {
        scene.classList.add("hidden");
        setTimeout(() => {
          scene.classList.add("display-none");
          html_class.classList.toggle("overflow-hd")
          body_class.classList.toggle("overflow-hd")
        }, 3000);
      }, 3000);
    }, 10000);
  }
}


document.addEventListener("click", function(){
  launchIntro()
})

document.addEventListener("keypress", function(){
  launchIntro()
})

let interval = setInterval(() => {
  if (video_tag.readyState === 4) {
    isVideoReady = true
    clearInterval(interval)
  }
}, 100);
