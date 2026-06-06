const getString = (window.location.search);
console.log(getString);

const myInfo = new URLSearchParams(getString);
//console.log(myInfo);
document.querySelector("#results").innerHTML = `
<p> Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p> Proxy ${myInfo.get("ordinance")} on the ${myInfo.get("date")} at the ${myInfo.get("location")} Temple</p>
<p> Contact information is Phone: ${myInfo.get("phone")} email address: ${myInfo.get("email")}</p>`;
