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
///////// time stamp section 
document.getElementById("timestamp").value = today;

////////dialog section
const membershipLinks = document.querySelectorAll(".membership-link");

membershipLinks.forEach(link => {
    link.addEventListener("click", () => {
        const modalID = link.dataset.modal;
        const modal = document.querySelector(`#${modalID}`);
        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll(".closeModal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.close();
    });
});

