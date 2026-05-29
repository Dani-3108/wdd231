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