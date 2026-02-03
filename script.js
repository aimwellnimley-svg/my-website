// ===============================
// Google Sheet Form Submission
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const requestForm = document.getElementById("requestForm");

  if (!requestForm) {
    console.error("Form not found");
    return;
  }

  requestForm.addEventListener("submit", function (e) {

    // 🔒 SAFETY CHECK (prevents null.value crash)
    if (
        !document.getElementById("name") ||
        !document.getElementById("email") ||
        !document.getElementById("phone") ||
        !document.getElementById("service") ||
        !document.getElementById("message")
    ) {
        console.error("One or more request form fields not found");
        return;
    }

    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message").value,
      source: "website"
    };

    fetch("https://script.google.com/macros/s/AKfycbxeQ7n94yeAQlxlfPa8GwCXFi9xzpRGusOpkGTgHIZHf14d35W70hA-KWGHGMUYuMK4/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      alert("✅ Request sent successfully!");
      requestForm.reset();
      console.log(result);
    })
    .catch(err => {
      alert("❌ Error sending request");
      console.error(err);
    });
  });

});
