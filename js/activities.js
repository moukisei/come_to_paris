document.addEventListener('DOMContentLoaded', function() {
const inputs = document.querySelectorAll('input[type="number"]');
const continueButton = document.getElementById('continueButton');

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
document.getElementById("continueButton").addEventListener('click', function() {
  saveInputValues();
  // Redirect to the food page
  window.location.href = 'food.html';
});

// Load saved values when the page loads
loadInputValues();
});