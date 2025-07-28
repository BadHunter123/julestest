document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name.trim() && email.trim() && message.trim()) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
