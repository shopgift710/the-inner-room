// Populate cities dynamically
const cityList = [
    "Bangalore", "Mumbai", "Delhi", "Other"
];

const cityDropdown = document.getElementById('city');
cityList.forEach(city => {
    let option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityDropdown.appendChild(option);
});

// Form validation and submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const mobile = document.getElementById('MobileNo');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;

    // Email validation
    if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Enter Valid Email");
        email.reportValidity();
        return;
    } else {
        email.setCustomValidity("");
    }

    // Mobile validation (mandatory now)
    if (!mobilePattern.test(mobile.value)) {
        mobile.setCustomValidity("Please enter valid Number");
        mobile.reportValidity();
        return;
    } else {
        mobile.setCustomValidity("");
    }

    // If validation passes
    document.getElementById('signupForm').reset();
    document.getElementById('thankYouMessage').style.display = 'block';
});
