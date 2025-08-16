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

// Form validation + submission with popup
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value.trim();
    const insta = document.getElementById('insta').value.trim();
    const mobile = document.getElementById('MobileNo').value.trim();
    const bio = document.getElementById('bio').value.trim();
    const photo = document.getElementById('photo').files.length;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;

    if (!name) {
        alert('Please enter your full name.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Enter a valid email.');
        return;
    }

    if (!city) {
        alert('Please select your city.');
        return;
    }

    if (!insta) {
        alert('Please enter your Instagram ID.');
        return;
    }

    if (!mobilePattern.test(mobile)) {
        alert('Please enter a valid 10-digit number.');
        return;
    }

    if (!bio) {
        alert('Please share why you wish to join The Inner Room.');
        return;
    }

    if (photo === 0) {
        alert('Please upload your profile photo.');
        return;
    }

    // ✅ If everything is valid → show popup
    document.getElementById("thankYouPopup").style.display = "flex";

    // Reset form after showing popup
    document.getElementById("signupForm").reset();
});

// Close popup on X click
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("thankYouPopup").style.display = "none";
});

// Close popup when clicking outside the popup content
window.addEventListener("click", function(event) {
    let popup = document.getElementById("thankYouPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
