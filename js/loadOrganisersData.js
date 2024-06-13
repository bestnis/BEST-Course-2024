const url = window.location.pathname;
const fileName = url.substring(url.lastIndexOf('/') + 1);
console.log(fileName)

cardTitles = document.querySelectorAll(".card-title");
cardSubtitles = document.querySelectorAll(".card-subtitle");
emailIcons = document.querySelectorAll(".organiserContact a:first-of-type");
linkedInIcons = document.querySelectorAll(".organiserContact a:last-of-type");

class Organiser {
    name;
    position;
    email;
    linkedIn;

    constructor(name, position, email, linkedIn) {
        this.name = name;
        this.position = position;
        this.email = email;
        this.linkedIn = linkedIn;
    }
}

const organisers = [];
if (fileName === "Organisers.html") {
    organisers.push(new Organiser("Jovan Manojlović", "Participants Responsible",
        "mailto:jovan.manojlovic@bestnis.rs",
        // "https://www.linkedin.com/in/milica-djordjevic-327468256/"
    ));
    organisers.push(new Organiser("Katarina Stojanović", "Main Organiser",
        "mailto:k.stojanovic@bestnis.rs",
        "https://www.linkedin.com/in/maja-stanimirovi%C4%87-337601237/"
    ));
    organisers.push(new Organiser("Luka Kostadinović", "IT & Logistics Responsible",
        "mailto:luka.kostadinovic@bestnis.rs",
        "https://www.linkedin.com/in/luka-kostadinovic-3793a12b0/"
    ));
    organisers.push(new Organiser("Petar Ristić", "Academia Responsible",
        "mailto:aleksandar.jovanovic@bestnis.rs",
        "https://www.linkedin.com/in/4aleksandar-jovanovic"
    ));
    organisers.push(new Organiser("Ilija Petrović", "Corporate relations Responsible",
        "mailto:mailto:Ilija.Petrovic@bestnis.rs",
        "https://www.linkedin.com/in/ilija-petrovi%C4%87-0b496a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    ));
    organisers.push(new Organiser("Emilija Petrović", "Media Responsible",
        "mailto:mailto:emilija.petrovic@bestnis.rs",
        "https://www.linkedin.com/in/emilija-petrovi%C4%87-0844621aa/"
    ));
    organisers.push(new Organiser("Jovana Mandić", "Socials Responsible",
        "mailto:jovana.mandic@bestnis.rs",
        "https://www.linkedin.com/in/jovana-mandi%C4%87-a463192b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    ));
    organisers.push(new Organiser("Miloš Bojić", "Logistics Responsible",
        "mailto:milos.bojic@bestnis.rs",
        "https://www.linkedin.com/in/milo%C5%A1-boji%C4%87-8a8450272/"
    ));
    organisers.push(new Organiser("Katarina Totev Jović", "Design Responsible",
        "mailto:katarina.totev@bestnis.rs",
        "https://www.linkedin.com/in/lukapetrovic2000/"
    ));
}
else {
    organisers.push(new Organiser("Jovan Manojlović", "Odgovorna za učesnike",
        "mailto:jovan.manojlovic@bestnis.rs",
        "https://www.linkedin.com/in/milica-djordjevic-327468256/"
    ));
    organisers.push(new Organiser("Katarina Stojanović", "Glavni organizator",
        "mailto:k.stojanovic@bestnis.rs",
        "https://www.linkedin.com/in/maja-stanimirovi%C4%87-337601237/"
    ));
    organisers.push(new Organiser("Luka Kostadinović", "Odgovoran za informacione tehnologije",
        "mailto:luka.kostadinovic@bestnis.rs",
        "https://www.linkedin.com/in/luka-kostadinovic-3793a12b0/"
    ));
    
    organisers.push(new Organiser("Petar Ristić", "Odgovoran za akademske aktivnosti",
        "mailto:aleksandar.jovanovic@bestnis.rs",
        "https://www.linkedin.com/in/4aleksandar-jovanovic"
    ));
    organisers.push(new Organiser("Ilija Petrović", "Odgovorna za odnose sa kompanijama",
        "mailto:Ilija.Petrovic@bestnis.rs",
        "https://www.linkedin.com/in/ilija-petrovi%C4%87-0b496a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    ));
    organisers.push(new Organiser("Emilija Petrović", "Odgovorna za društvene medije",
        "mailto:emilija.petrovic@bestnis.rs",
        "https://www.linkedin.com/in/emilija-petrovi%C4%87-0844621aa/"
    ));
    organisers.push(new Organiser("Jovana Mandić", "Odgovoran za društvene aktivnosti",
        "mailto:jovana.mandic@bestnis.rs",
        "https://www.linkedin.com/in/jovana-mandi%C4%87-a463192b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    ));
    organisers.push(new Organiser("Miloš Bojić", "Odgovoran za logistiku",
        "mailto:milos.bojic@bestnis.rs",
        "https://www.linkedin.com/in/milo%C5%A1-boji%C4%87-8a8450272/"
    ));
    organisers.push(new Organiser("Katarina Totev Jović", "Odgovoran za dizajn",
        "mailto:katarina.totev@bestnis.rs",
        // "https://www.linkedin.com/in/lukapetrovic2000/"
    ));
}

function populateCards() {
    for (let i = 0; i < 9; i++) {
        cardTitles[i].textContent = organisers[i].name;
        cardSubtitles[i].textContent = organisers[i].position;
        emailIcons[i].setAttribute("href", `${organisers[i].email}`);
        linkedInIcons[i].setAttribute("href", `${organisers[i].linkedIn}`);
        //console.table(organisers[i])
    }
}

populateCards();
