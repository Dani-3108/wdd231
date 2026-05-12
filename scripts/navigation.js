const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


////////////Hamburger Button Section/////////////////////
const hamButton = document.querySelector("#nav-button");
//Event listener
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    navBar.classList.toggle("show");
});

////////////Navigation Bar Section/////////////////////
const navBar = document.querySelector("#nav-bar");
