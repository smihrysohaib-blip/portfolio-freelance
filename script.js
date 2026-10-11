
const contactButton = document.getElementById("contact-button");
const contactMessage = document.getElementById("contact-message");

contactButton.addEventListener("click", function () {
  contactMessage.textContent =
    "Merci ! Ajoutez ici l'adresse courriel du restaurant.";
});
