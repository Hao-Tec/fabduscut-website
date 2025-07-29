// Add event listener to document for mousemove event
document.addEventListener('mousemove', handleMouseMove);

// Function to handle mousemove event
function handleMouseMove(e) {
    const rect = document.body.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    document.body.style.setProperty('--mouse-x', `${x}px`);
    document.body.style.setProperty('--mouse-y', `${y}px`);
}

// Add event listener to document for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    // Add event listener to document for mousemove event
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        // Move the cursor to the mouse position
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        // Scale up when hovering over elements (optional)
        if (e.target !== document.body) {
            cursor.style.transform = 'scale(5)'; // Scale factor can be adjusted
        } else {
            cursor.style.transform = 'scale(1)';
        }
    });
});

// Initialize EmailJS with your public key
(function() {
    emailjs.init("JYQ-MHONteQJo0yZp"); // ← Your EmailJS public key

    // Add event listener to contact form for submit event
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Prepare the template parameters
        const templateParams = {
            from_name: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
            phone: document.getElementById('phone').value,
            appointment_time: document.getElementById('appointment').value,
            hairstyle: document.getElementById('hairstyle').value,
            location: document.getElementById('location').value,
            message: document.getElementById('message').value,
            to_email: 'abdussalamonafowokan@gmail.com'
        };

        // Send the email using EmailJS
        emailjs.send('service_xk6bwhd', 'template_uelkwuq', templateParams)
            .then(function() {
                // Show success message
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
                // Reset the form
                document.getElementById('contact-form').reset();
            }, function(error) {
                // Show error message
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('success-message').style.display = 'none';
                console.log('EmailJS error:', error);
            })
            .finally(function() {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = 'Send';
            });
    });
})();

// Initialize Microsoft Clarity
const clarityProjectId = "qc5ijn8dat";
window.clarity("init", clarityProjectId);
