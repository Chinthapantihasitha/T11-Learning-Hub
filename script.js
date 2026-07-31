document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation Logic (Example for Contact Form)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent to T11 Learning Hub.");
            contactForm.reset();
        });
    }

    // Dynamic Progress Bar Animation for Dashboard
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        let width = bar.getAttribute('aria-valuenow');
        bar.style.width = width + '%';
    });
});