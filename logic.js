// script.js

// Function to dynamically update the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scroll to the target section
                });
            }
        });
    });

    // You can add more JavaScript functionality here
    // Example: Form submission handling (client-side only for static sites)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // In a real application, you'd send this data to a backend server.
            // For a static GitHub Pages site, this form won't actually send emails directly.
            // You might use a third-party service like Formspree.io or Netlify Forms.

            console.log('Form submitted!');
            // You can access form values like:
            // const name = document.getElementById('name').value;
            // const email = document.getElementById('email').value;
            // const message = document.getElementById('message').value;

            // Display a simple message to the user (instead of alert)
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            successMessage.className = 'mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center';
            contactForm.appendChild(successMessage);

            // Optionally, clear the form
            contactForm.reset();

            // Remove the success message after a few seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000); // Remove after 5 seconds
        });
    }
});
