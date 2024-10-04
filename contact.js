document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    
    fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Your message has been sent!');
    })
    .catch((error) => {
        alert('There was an error sending your message.');
    });
});
