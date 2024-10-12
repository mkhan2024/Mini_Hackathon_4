document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    let valid = true;
    let feedback = '';

    // Full Name Validation
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        feedback += 'Full Name is required.<br>';
        valid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        feedback += 'Please enter a valid email address.<br>';
        valid = false;
    }

    // Phone Number Validation
    const phone = document.getElementById('phoneNumber').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        feedback += 'Phone number must be 10 digits.<br>';
        valid = false;
    }

    // Event Selection Validation
    const eventSelect = document.getElementById('eventSelect').value;
    if (eventSelect === '') {
        feedback += 'Please select an event.<br>';
        valid = false;
    }

    // Display feedback
    const formFeedback = document.getElementById('formFeedback');
    if (valid) {
        formFeedback.innerHTML = 'Form submitted successfully!';
        formFeedback.style.color = 'green';
        // You can submit the form or reset it here
    } else {
        formFeedback.innerHTML = feedback;
        formFeedback.style.color = 'red';
    }
});
