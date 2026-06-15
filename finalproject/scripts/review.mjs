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

/////////////////
let formCount = localStorage.getItem("formcount");

if (formCount === null) {
    formCount = 0;
}
else {
    formCount = parseInt(formCount) + 1;
}

localStorage.setItem("formcount", formCount);
document.getElementById("formcount").innerHTML = `You are form number: ${formCount}`;