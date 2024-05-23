// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target.id === 'contact') {
            document.getElementById('contact-form').style.display = 'block';
        } else {
            document.getElementById('contact-form').style.display = 'none';
        }

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // You can add additional validation logic here, e.g., for email format

    // If all fields are valid, you can submit the form or perform any other actions
    alert('Form submitted successfully!');
    contactForm.reset();
});
