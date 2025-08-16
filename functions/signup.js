document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const popup = document.getElementById("thankYouPopup");
  const closePopup = document.getElementById("closePopup");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop default refresh

    const formData = new FormData(form);

    // Send to Netlify Function
    fetch("/.netlify/functions/signup", {
      method: "POST",
      body: formData // ✅ send FormData directly (supports file upload)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data);

        // Show popup
        popup.style.display = "block";
        form.reset(); // clear form
      })
      .catch((error) => {
        alert("Something went wrong, please try again!");
        console.error("Form submission error:", error);
      });
  });

  // Close popup handler
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Close popup if user clicks outside content
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
