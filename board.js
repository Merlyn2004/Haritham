// Open the "Add Points" modal
const addButtons = document.querySelectorAll('.add-points-btn');
const modal = document.getElementById('add-points-modal');
const closeBtn = document.querySelector('.close-btn');

// When the "Add Points" button is clicked, show the modal
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
});

// Close the modal when the "X" is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
