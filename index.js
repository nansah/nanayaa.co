document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    var formData = new FormData(this); // Capture form data

    // Send form data to server-side script using Fetch API
    fetch("submit.php", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                document.getElementById("contactForm").reset(); // Reset the form after successful submission
            } else {
                alert("Form submission failed.");
            }
        })
        .catch(error => console.error("Error:", error));
});
