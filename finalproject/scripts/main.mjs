//Footer section that repeats in each page
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
//Hamburger button section for menu in navegation bar
const button = document.querySelector("#hamburger");
const navigation = document.querySelector(".menu");
//listener events for menu button
button.addEventListener("click", function () {
    if (button.classList.contains("open")) {
        button.innerHTML = "&#9776";
    }
    else {
        button.innerHTML = "&#10005";
    }
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

