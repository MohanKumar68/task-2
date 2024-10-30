// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required.';
        formMessage.style.color = 'red';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    }
}

// Image Slideshow for Amenities Section
let currentAmenity = 0;
function showNextAmenity() {
    const amenities = document.querySelectorAll('#slideshow .amenity-item');
    amenities[currentAmenity].style.display = 'none';
    currentAmenity = (currentAmenity + 1) % amenities.length;
    amenities[currentAmenity].style.display = 'block';
}

// Automatically cycle slideshow every 5 seconds
setInterval(showNextAmenity, 5000);
