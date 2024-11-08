<script>
    // Wait for the DOM to be loaded before attaching event listeners
    document.addEventListener("DOMContentLoaded", function() {
        // Attach the form submit event listener
        document.getElementById("edit-profile-form").addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent default form submission

            // Get the values from the form fields
            const username = document.getElementById("username").value;
            const address = document.getElementById("address").value;
            const age = document.getElementById("age").value;
            const phone = document.getElementById("phone").value;
            const profilePicture = document.getElementById("profile-picture").files[0];  // Optional: handle file upload

            // Basic Validation: Check if any fields are empty
            if (!username || !address || !age || !phone) {
                alert("Please fill in all fields.");
                return;  // Stop further execution if validation fails
            }

            // Optionally, handle file upload (profile picture)
            if (profilePicture) {
                console.log("Profile Picture:", profilePicture.name);
            }

            // Show a confirmation message to the user (You can send this data to the server here)
            console.log("Profile Updated:", {
                username,
                address,
                age,
                phone
            });

            // Show a success message after profile update
            alert("Your profile has been updated successfully.");

            // Redirect the user back to the dashboard or another page
            window.location.href = "dashboard.html";  // Redirect to the dashboard after updating profile
        });
    });
</script>
