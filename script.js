function filterActivities(type) {
  const activities = document.querySelectorAll('.activity');
  activities.forEach(activity => {
    if (type === 'all') {
      activity.style.display = 'block';
    } else if (activity.classList.contains(type)) {
      activity.style.display = 'block';
    } else {
      activity.style.display = 'none';
    }
  });
}
const form = document.getElementById('bookingForm');
const modal = document.getElementById('confirmationModal');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  modal.style.display = 'flex'; // Show the modal
});

function closeModal() {
  modal.style.display = 'none'; // Hide the modal
}

