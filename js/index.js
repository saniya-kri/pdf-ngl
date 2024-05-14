document.addEventListener("DOMContentLoaded", function () {
  var currentDateInput = document.getElementById("currentDate");
  var currentDate = new Date().toLocaleDateString();
  currentDateInput.value = currentDate;
});
document.addEventListener("DOMContentLoaded", function () {
  var currentDateInput = document.getElementById("latestDate");
  var latestDate = new Date().toLocaleDateString();
  currentDateInput.value = latestDate;
});
document.addEventListener("DOMContentLoaded", function () {
  var currentDateInput = document.getElementById("thirdDateBox");
  var thirdDateBox = new Date().toLocaleDateString();
  currentDateInput.value = thirdDateBox;
});

// Get all input fields
const inputFields = document.querySelectorAll("input");

// Function to check if all input fields are filled
function checkFields() {
  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === "") {
      return false;
    }
  }
  return true;
}

// Function to print the page
function printPage() {
  window.print();
}

// Function to show or hide the print button based on input fields
function togglePrintButton() {
  const printBtn = document.getElementById("printBtn");
  printBtn.addEventListener('click', printPage);
}

// Attach event listeners to input fields to check for changes
togglePrintButton();
