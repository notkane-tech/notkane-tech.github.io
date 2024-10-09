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

function createTranslucentClouds() {
    for (let i = 0; i < 8; i++) { // Create 5 clouds (adjust number as needed)
        let cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.top = Math.random() * window.innerHeight + 'px'; // Random vertical position
        cloud.style.animationDuration = (20 + Math.random() * 10) + 's'; // Random speed
        document.body.appendChild(cloud);
    }
}

// Call the function to generate translucent clouds on all pages
createTranslucentClouds();