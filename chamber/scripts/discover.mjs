// import statements
import { places } from "../data/places.mjs";
console.log(places);
//Footer variables section
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
////////////Hamburger Button Section & Navigation bar section//////////////
const hamButton = document.querySelector("#nav-button");
//Navigation bar
const navBar = document.querySelector("#nav-bar");
//Event listener
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    navBar.classList.toggle("show");
});
// discover places cards section 
const placesSection = document.querySelector("#places-section");
// loop through the array and create HTML elements
function displayPlaces(places) {
  places.forEach(place => {
      let div = document.createElement("div");
      //img section and setting attributes
      let figure = document.createElement("figure");
      let picture = document.createElement("img");
      picture.setAttribute("src", `images/${place.photoUrl}`);
      picture.setAttribute("alt", `${place.name}`);
      picture.setAttribute("loading", "lazy");
      figure.appendChild(picture);
      // rest of elements
      let htwo = document.createElement("h2");
      let address = document.createElement("address");
      let description = document.createElement("p");
      // button element
      let button = document.createElement("button");
      button.classList.add("learn-more-btn");
      // populating the elements
      htwo.textContent = `${place.name}`;
      address.textContent = `${place.address}`;
      description.textContent = `${place.description}`;
      button.textContent = "Learn More";
      // appending to div
      div.appendChild(htwo);
      div.appendChild(figure);
      div.appendChild(address);
      div.appendChild(description);
      div.appendChild(button);
      placesSection.appendChild(div);
  });  
}
displayPlaces(places);

// local storage
const lastVisit = localStorage.getItem("lastVisit");
const msToDays = 86400000;
let message = "";
if (lastVisit == null) {
    message = "Welcome! Let us know if you have any questions.";
    localStorage.setItem("lastVisit", Date.now());
}
else {
    let daysDifference = Math.floor((Date.now() - lastVisit) / msToDays);
    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
        localStorage.setItem("lastVisit", Date.now());
    }
    else {
        let dayWord = "";
        if (daysDifference === 1) {
            dayWord = "day";
        } else {
            dayWord = "days";
        }
        message = `You last visited ${daysDifference} ${dayWord} ago`;
        localStorage.setItem("lastVisit", Date.now());
    }
}
document.querySelector("#visit-text").innerHTML = message;
document.querySelector("#close-message").addEventListener("click", () => {
    document.querySelector("#visit-message").style.display = "none";
});
