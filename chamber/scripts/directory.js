const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
////////////Hamburger Button Section/////////////////////
const hamButton = document.querySelector("#nav-button");
////////////Navigation Bar Section/////////////////////
const navBar = document.querySelector("#nav-bar");
//Event listener
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    navBar.classList.toggle("show");
});
////////////////////////////////////////
const membersFile = "data/members.json";
const directoryCards = document.querySelector("#directory-cards");
//Function
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let textInfo = document.createElement('div')
        let memberName = document.createElement("h2");
        let memberAddress = document.createElement("p");
        let memberPhone = document.createElement("p");
        let memberWebsite = document.createElement("a");
        let memberPortrait = document.createElement("img");
        //populating the content
        memberName.textContent = `${member.name}`;
        memberAddress.textContent = `${member.address}`;
        memberPhone.textContent = `${member.phone}`;
        //setting webiste attributes
        memberWebsite.setAttribute("href", member.website)
        memberWebsite.textContent = "Visit Website";
        //setting image attributes
        memberPortrait.setAttribute("src", `images/${member.image}`);
        memberPortrait.setAttribute("alt", `${member.name} logo`);
        memberPortrait.setAttribute("loading", "lazy");
        memberPortrait.setAttribute("width",300);
        memberPortrait.setAttribute("height",200);
        //Appending
        textInfo.appendChild(memberName);
        textInfo.appendChild(memberAddress);
        textInfo.appendChild(memberPhone);
        textInfo.appendChild(memberWebsite);
        card.appendChild(textInfo);
        card.appendChild(memberPortrait);
        directoryCards.appendChild(card);
    });
}
async function getMembersData() {
    const response = await fetch(membersFile);
    const data = await response.json();
    displayMembers(data.members);
}
getMembersData();
///////////////// event listeners for directory
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

gridButton.addEventListener("click", () => {
    directoryCards.classList.add("grid");
    directoryCards.classList.remove("list");
});
listButton.addEventListener("click", () => {
    directoryCards.classList.add("list");
    directoryCards.classList.remove("grid");
});
