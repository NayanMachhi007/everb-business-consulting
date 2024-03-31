function videobtn() {
  document.getElementById("videoid").style.display = "block";
}

function closevideo() {
  document.getElementById("videoid").style.display = "none";

  videoStopper("videoid");
}

function videopopfeature() {
  document.getElementById("videopop").style.display = "block";
}

function featurevideoclose() {
  debugger;
  document.getElementById("videopop").style.display = "none";
  videoStopper("videopop");
}

let videoStopper = function (id) {
  debugger;
  let containerElement = document.getElementById(id);
  let iframe_tag = containerElement.querySelector("iframe");
  if (iframe_tag) {
    debugger;
    let iframeSrc = iframe_tag.src;
    iframe_tag.src = iframeSrc;
  }
};
