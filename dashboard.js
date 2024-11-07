// Function to show an alert message
function showAlert(message) {
    const alertBox = document.getElementById('alertMessage');
    alertBox.style.display = 'block';
    alertBox.querySelector('p').textContent = message;
}

// Function to close the alert message
function closeAlert() {
    const alertBox = document.getElementById('alertMessage');
    alertBox.style.display = 'none';
}

// Placeholder function for editing the profile
function editProfile() {
    alert("Profile edit feature coming soon!");
}

// Placeholder function for opening complaint form
function openComplaint() {
    alert("Complaint form feature coming soon!");
}

// Show alert on page load
window.onload = function() {
    showAlert("Plastic collection scheduled for tomorrow!");
};

