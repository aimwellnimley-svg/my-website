function sayHello() {
    alert("Hello! Thanks for visiting my website 😊");
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("darkToggle").onclick = function () {
        document.body.classList.toggle("dark");
    };
});

(function () {
  emailjs.init("kSXjwbBY0XgkSELjb");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qcm79ai",
    "template_qhog4hk",
    this
  ).then(
    function () {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("❌ Failed to send message. Try again.");
      console.error(error);
    }
  );
});

function selectService(serviceName) {
  document.getElementById("selected-service").value = serviceName;
}

document.getElementById("service-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qcm79ai",
    "template_qhog4hk",
    this
  ).then(
    function () {
      alert("✅ Service request sent successfully!");
      document.getElementById("service-form").reset();
    },
    function (error) {
      alert("❌ Failed to send request.");
      console.error(error);
    }
  );
});

// Make sure EmailJS is initialized
(function () {
  emailjs.init("kSXjwbBY0XgkSELjb");
})();

// Auto-fill service + scroll
function selectService(serviceName) {
  document.getElementById("selected-service").value = serviceName;
  document.getElementById("offer").scrollIntoView({ behavior: "smooth" });
}

// Handle service request submission
document.getElementById("service-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qcm79ai",
    "template_qhog4hk",
    this
  ).then(
    function () {
      alert("✅ Service request sent successfully!");
      document.getElementById("service-form").reset();
    },
    function (error) {
      alert("❌ Failed to send service request");
      console.error(error);
    }
  );
});
