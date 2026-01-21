function sayHello() {
    alert("Hello! Thanks for visiting my website 😊");
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("darkToggle").onclick = function () {
        document.body.classList.toggle("dark");
    };
});

