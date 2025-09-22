document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name.length < 3) {
    formMessage.textContent = "Name must be at least 3 characters.";
    formMessage.style.color = "red";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }
  if (message.length < 10) {
    formMessage.textContent = "Message must be at least 10 characters.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully!";
});


document.getElementById("toggleBtn").addEventListener("click", function() {
  let info = document.getElementById("extraInfo");
  if (info.style.display === "none") {
    info.style.display = "block";
    this.textContent = "Hide Info";
  } else {
    info.style.display = "none";
    this.textContent = "Show More Info";
  }
});


document.getElementById("liveInput").addEventListener("input", function() {
  document.getElementById("charCount").textContent = this.value.length;
});


document.getElementById("specialLink").addEventListener("click", function(event) {
  event.preventDefault(); // stop navigation
  document.getElementById("linkMessage").textContent =
    "Link was clicked, but navigation was prevented!";
});
