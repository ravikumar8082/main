// Add an event listener to the form submission
document.getElementById('data-form').addEventListener('submit', async (e) => {
  e.preventDefault();  // Prevent the form from submitting the traditional way

  // Collect form data
  const data = {
    fullName: document.getElementById('full-name').value,
    cnic: document.getElementById('cnic').value,
    degree: document.getElementById('degree').value,
    email: document.getElementById('email').value,
    contact: document.getElementById('contact').value,
  };

  console.log('Form Data:', data);  // Log the data to check if it's correctly captured

  // Prepare the data for submission
  const requestData = JSON.stringify(data);

  // Set up the custom headers for the request
  const headers = {
    'ngrok-skip-browser-warning': 'true',  // Skip ngrok browser warning
    'User-Agent': 'CustomBrowser/1.0',      // Custom User-Agent string
    'Content-Type': 'application/json',    // Ensure the content is sent as JSON
  };

  // Send the request with the custom headers and data
  try {
    const response = await fetch('https://ffaa-144-24-111-34.ngrok-free.app/submit', {
      method: 'POST',
      headers: headers,
      body: requestData,
    });

    if (response.ok) {
      alert('Data submitted successfully!');
    } else {
      alert('Failed to submit data');
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    alert('Error submitting data');
  }
});
