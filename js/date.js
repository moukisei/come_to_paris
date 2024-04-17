document.getElementById("dateForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var daysValue = document.getElementById("days").value;
  var startDateValue = document.getElementById("startDate").value;

  if (daysValue && startDateValue) {
    // Save the number of days and start date to localStorage
    localStorage.setItem("days", daysValue);
    localStorage.setItem("startDate", startDateValue);

    // Remove the "hidden" class from the image container
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.classList.remove("hidden");

    // Show the "Continue" button
    var continueButton = document.getElementById("continueButton");
    continueButton.classList.remove("hidden");
  }
});

// Continue button click event handler
document.getElementById("continueButton").addEventListener("click", function() {
  // Redirect to the next page
  window.location.href = "itinerary.html";
});
