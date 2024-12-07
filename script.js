// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const suprise = urlParams.get('suprise'); // Get the 'suprise' parameter

// Select the content container
const contentDiv = document.getElementById('content');

// Display content based on the URL parameter
if (suprise === 'true') {
  contentDiv.innerHTML = `
    <h2>Surprise from Charis Full Gospel Centre! 🎉</h2>
    <p>You discovered a hidden message! May you feel God’s blessings today and always.</p>
  `;
} else {
  contentDiv.innerHTML = `
    <h2>Welcome to Charis Full Gospel Centre!</h2>
    <p>Explore our website for more content and stay blessed.</p>
  `;
}
