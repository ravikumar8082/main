// Wait for the DOM to load before attaching the form event listener
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('data-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const data = {
      fullName: document.getElementById('full-name').value.trim(),
      cnic: document.getElementById('cnic').value.trim(),
      degree: document.getElementById('degree').value.trim(),
      email: document.getElementById('email').value.trim(),
      contact: document.getElementById('contact').value.trim(),
    };

    // Validate the form data (basic validation)
    if (!data.fullName || !data.cnic || !data.degree || !data.email || !data.contact) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      // Send data to the server
      const response = await fetch('https://c3b2-144-24-111-34.ngrok-free.app/submit', {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'true', // Bypass ngrok browser warning
          'User-Agent': 'CustomBrowser/1.0', // Set a custom user-agent
          'Content-Type': 'application/json', // Inform the server about JSON content
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
      });

      // Handle the server response
      if (response.ok) {
        const responseText = await response.text();
        alert('Form submitted successfully!\n' + responseText);
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please check the console for details.');
    }
  });
});
