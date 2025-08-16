document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[name='signup']");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop default refresh

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(() => {
        form.style.display = "none"; // hide form
        thankYouMessage.style.display = "block"; // show message
      })
      .catch((error) => {
        alert("Something went wrong, please try again!");
        console.error("Form submission error:", error);
      });
  });
});
