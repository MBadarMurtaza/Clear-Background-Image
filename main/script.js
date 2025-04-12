let imgBox = document.getElementById("imgBox");
let imgWrap = document.getElementById("imgWrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

// Set initial positions
imgWrap.style.width = "50%";
line.style.left = "50%";

imgBox.onmousemove = function (e) {
  let boxLeft = imgBox.getBoundingClientRect().left;
  let newWidth = e.clientX - boxLeft;

  // Clamp the width between 0 and container width
  newWidth = Math.max(0, Math.min(newWidth, imgBox.offsetWidth));

  imgWrap.style.width = newWidth + "px";
  line.style.left = newWidth + "px";
};

// Make the image box draggable
line.onmousedown = function (e) {
  e.preventDefault();

  document.onmousemove = function (e) {
    let boxLeft = imgBox.getBoundingClientRect().left;
    let newWidth = e.clientX - boxLeft;

    // Clamp the width between 0 and container width
    newWidth = Math.max(0, Math.min(newWidth, imgBox.offsetWidth));

    imgWrap.style.width = newWidth + "px";
    line.style.left = newWidth + "px";
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};
