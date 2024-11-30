document.addEventListener('DOMContentLoaded', () => {
    // Example: Fetch profits from API
    fetch('/api/profits')
      .then(response => response.json())
      .then(data => {
        document.querySelector('.card-title').innerText = `$${data.profits}`;
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  