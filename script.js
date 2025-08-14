// Populate cities dynamically
const cityList = [
    "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", 
    "Pune", "Kolkata", "Other"
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

    const email = document.getElementById('email').value;
    const mobile = document.getElementById('MobileNo').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (mobile && !mobilePattern.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    document.getElementById('signupForm').reset();
    document.getElementById('thankYouMessage').style.display = 'block';
});
