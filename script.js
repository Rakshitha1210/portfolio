function showAlert() {
  alert("Hello! Welcome to Priya's Resume.");
}

// Automatically show current date in declaration section
const today = new Date();
document.getElementById("date").innerText = today.toLocaleDateString();
