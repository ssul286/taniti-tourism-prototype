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
