// Footer
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// Hamburger nav
const hamButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    navBar.classList.toggle("show");
});

// Form data retrieval
const dataRetrieval = new URLSearchParams(window.location.search);
document.querySelector("#results").innerHTML = `
<h3>Your information</h3>
<p>First Name: ${dataRetrieval.get("firstname")}</p>
<p>Last Name: ${dataRetrieval.get("lastname")}</p>
<p>Email: ${dataRetrieval.get("youremail")}</p>
<p>Phone: ${dataRetrieval.get("mobilephone")}</p>
<p>Organization: ${dataRetrieval.get("orgname")}</p>
<p>Membership: ${dataRetrieval.get("membershiplevel")}</p>
<p>Submitted: ${dataRetrieval.get("timestamp")}</p>`;