document.addEventListener('DOMContentLoaded', function() {
    // Example function to handle form validation
    function validateForm(event) {
        event.preventDefault(); // Prevent form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (!name || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }

        alert("Form submitted successfully!");
        return true;
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});

function sendAJAXRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/signup", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("AJAX request successful!");
        }
    };
    xhr.send();
}

function subscribeNewsletter() {
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('subscription-feedback');

    // Simple email validation
    if (email === '' || !email.includes('@')) {
        feedback.innerHTML = '<p class="text-danger">Please enter a valid email address.</p>';
        return;
    }

    // Simulate successful subscription (you can replace this with an actual API call)
    feedback.innerHTML = '<p class="text-success">Thank you for subscribing!</p>';
}
