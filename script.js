(function () {
            emailjs.init("oo0jFrVnXXXmhcVVx"); // Replace YOUR_PUBLIC_KEY with your actual Public Key
        })();

        function sendEmail() {
            // Replace with your Service ID and Template ID
            const serviceID = "service_iioq66r";
            const templateID = "template_ljeu13d";

            // Collect form data
            const templateParams = {
                fullName: document.getElementById('fullName').value,
                cnic: document.getElementById('cnic').value,
                lastDegree: document.getElementById('lastDegree').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
            };

            // Send email via EmailJS
            emailjs.send(serviceID, templateID, templateParams)
                .then(response => {
                    alert("Email sent successfully!");
                })
                .catch(error => {
                    console.error("Error sending email:", error);
                    alert("Failed to send email.");
                });
        }
