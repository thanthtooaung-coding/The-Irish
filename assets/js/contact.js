function validate() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var subjectInput = document.getElementById('subject');
    var messageInput = document.getElementById('message');

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var subject = subjectInput.value.trim();
    var message = messageInput.value.trim();

    var isValid = true;

    // Validate name
    if (name === '') {
        isValid = false;
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
    }

    // Validate email
    if (email === '') {
        isValid = false;
        emailInput.classList.add('is-invalid');
    } else {
        emailInput.classList.remove('is-invalid');
    }

    // Validate subject
    if (subject === '') {
        isValid = false;
        subjectInput.classList.add('is-invalid');
    } else {
        subjectInput.classList.remove('is-invalid');
    }

    // Validate message
    if (message === '') {
        isValid = false;
        messageInput.classList.add('is-invalid');
    } else {
        messageInput.classList.remove('is-invalid');
    }

    // Display error message if the form is invalid
    var errorElement = document.getElementById('error-message');
    if (!isValid) {
        errorElement.innerText = 'Please fill in all the required fields.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }

    return isValid;
}