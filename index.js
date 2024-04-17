var catImages = [
  { src: "main_pics/angie.jpg", caption: "<b>Ok if not for me, for Angie please!<b>" },
  { src: "main_pics/coco.jpg", caption: "<b>Nooo, for Coco then<b>" },
  { src: "main_pics/baby.jpg", caption: "<b>What about Baby????<b>" },
  { src: "main_pics/mochi.jpg", caption: "<b>Mochi's my last chance!!<b>" },
  { src: "main_pics/becky.jpg", caption: "<b>Don't make me call Becky (haha it's the only Becky I know 😏)<b>" },
];

var currentImageIndex = -1;
var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
var initialCatImage = "main_pics/cat.gif";
var noButtonClicks = 0;

function noButtonClick() {
  noButtonClicks++;
  currentImageIndex = (currentImageIndex + 1) % (catImages.length + 1);
  if (currentImageIndex < catImages.length) {
    var cat = catImages[currentImageIndex];
    document.getElementById("catImage").src = cat.src;
    document.getElementById("catCaption").innerHTML = cat.caption;
  } else {
    document.getElementById("catImage").src = initialCatImage;
    document.getElementById("catCaption").innerHTML = "<b>Ok there's no way out of this, so just say yes...<b>";
  }
  increaseFontSize(yesButton);
}

function yesButtonClick() {
  // Save the number of clicks on the "No" button to localStorage
  localStorage.setItem("noButtonClicks", noButtonClicks);
  // Redirect to the next page
  window.location.href = "html/thankyou.html";
  // Optionally, you can reset the counter if needed
  // noButtonClicks = 0;
}

function increaseFontSize(button) {
  var currentFontSize = parseInt(window.getComputedStyle(button).fontSize);
  button.style.fontSize = currentFontSize + 10 + "px";
}
