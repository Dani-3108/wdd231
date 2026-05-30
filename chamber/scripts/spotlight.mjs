//************************** Spotlight section ******************//
const spotlightBusiness = document.querySelector("#spotlights");
const membersFile = "data/members.json";
//function
const displayMembers = (members) => {
    const eligibleMembers = members.filter(member => member.membershipLevel >= 2);
    eligibleMembers.sort(() => Math.random() - 0.5);
    const selectedMembers = eligibleMembers.slice(0, 3);
    selectedMembers.forEach((member) => {
        let card = document.createElement("section");
        let textInfo = document.createElement('div')
        let memberName = document.createElement("h2");
        let memberAddress = document.createElement("p");
        let memberPhone = document.createElement("p");
        let memberMembership = document.createElement("p");
        let memberWebsite = document.createElement("a");
        let memberPortrait = document.createElement("img");
        //populating the content
        memberName.textContent = `${member.name}`;
        memberAddress.textContent = `${member.address}`;
        memberPhone.textContent = `${member.phone}`;
        memberMembership.textContent = `Membership level: ${member.membershipLevel === 3 ? "Gold" : "Silver"}`;
        //setting webiste attributes
        memberWebsite.setAttribute("href", member.website)
        memberWebsite.textContent = `Visit Website of ${member.name}`;
        //setting image attributes
        memberPortrait.setAttribute("src", `images/${member.image}`);
        memberPortrait.setAttribute("alt", `${member.name} logo`);
        memberPortrait.setAttribute("loading", "lazy");
        //Appending
        textInfo.appendChild(memberName);
        textInfo.appendChild(memberAddress);
        textInfo.appendChild(memberPhone);
        textInfo.appendChild(memberWebsite);
        textInfo.appendChild(memberMembership);
        card.appendChild(textInfo);
        card.appendChild(memberPortrait);
        spotlightBusiness.appendChild(card);
    });
}
//fetching JSON file 
export async function getMembersData() {
    try {
        const response = await fetch(membersFile);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayMembers(data.members);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}