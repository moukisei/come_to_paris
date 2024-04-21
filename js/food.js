document.addEventListener('DOMContentLoaded', function() {
const inputs = document.querySelectorAll('input[type="number"]');

// Function to save input values to localStorage
function saveInputValues() {
  inputs.forEach(function(input) {
    localStorage.setItem(input.id, input.value);
  });
}

// Load saved values when the page loads
function loadInputValues() {
  inputs.forEach(function(input) {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue !== null) {
      input.value = savedValue;
    }
  });
}

// Save input values when continueButton is clicked
document.getElementById("continueButton").addEventListener("click", function() {
   var japaneseInput = document.getElementById("japanese_input");
   if (japaneseInput && japaneseInput.value !== "1") {
      alert("Ooooh fix up yourself and put Japanese first. You were supposed to come to Paris just for ramen, remember?");
      return false;
   }
   else {
     saveInputValues();
     location.href = 'lastpage.html'; // Navigate to lastpage.html
   }
});

// Load saved values when the page loads
loadInputValues();
});