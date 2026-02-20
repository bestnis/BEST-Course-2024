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
if (fileName === "organisers.html") {
    organisers.push(new Organiser("Jovan Manojlović", "Logistics responsible",
        "mailto:jovan.manojlovic&#64;bestnis.rs",
        // "https://www.linkedin.com/in/milica-djordjevic-327468256/"
    ));
    organisers.push(new Organiser("Katarina Stojanović", "Main organiser",
        "mailto:k.stojanovic&#64;bestnis.rs",
        //"https://www.linkedin.com/in/maja-stanimirovi%C4%87-337601237/"
    ));
    organisers.push(new Organiser("Luka Kostadinović", "IT responsible",
        "mailto:luka.kostadinovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/luka-kostadinovic-3793a12b0/"
    ));
    organisers.push(new Organiser("Petar Ristić", "Academia responsible",
        "mailto:aleksandar.jovanovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/petar-ristic-894890296"
    ));
    organisers.push(new Organiser("Ilija Petrović", "Fundraising responsible",
        "mailto:ilija.petrovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/ilija-petrovi%25C4%2587-0b496a255"
    ));
    organisers.push(new Organiser("Emilija Petrović", "Media responsible",
        "mailto:mailto:emilija.petrovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/emilija-petrovi%C4%87-0844621aa/"
    ));
    organisers.push(new Organiser("Jovana Mandić", "Participant responsible",
        "mailto:jovana.mandic&#64;bestnis.rs",
        "hhttps://www.linkedin.com/in/jovana-mandi%C4%87-a463192b0"
    ));
    organisers.push(new Organiser("Miloš Bojić", "Socials responsible",
        "mailto:milos.bojic&#64;bestnis.rs",
        "https://www.linkedin.com/in/milo%C5%A1-boji%C4%87-8a8450272"
    ));
    organisers.push(new Organiser("Katarina Totev Jović", "Design responsible",
        "mailto:katarina.totev&#64;bestnis.rs",
        // "https://www.linkedin.com/in/lukapetrovic2000/"
    ));
}
else {
    organisers.push(new Organiser("Jovan Manojlović", "Odgovoran za logistiku",
        "mailto:jovan.manojlovic&#64;bestnis.rs",
        //"https://www.linkedin.com/in/milica-djordjevic-327468256/"
    ));
    organisers.push(new Organiser("Katarina Stojanović", "Glavni organizator",
        "mailto:k.stojanovic&#64;bestnis.rs",
        //"https://www.linkedin.com/in/maja-stanimirovi%C4%87-337601237/"
    ));
    organisers.push(new Organiser("Luka Kostadinović", "Odgovoran za informacione tehnologije",
        "mailto:luka.kostadinovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/luka-kostadinovic-3793a12b0/"
    ));
    organisers.push(new Organiser("Petar Ristić", "Odgovoran za akademske aktivnosti",
        "mailto:aleksandar.jovanovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/petar-ristic-894890296"
    ));
    organisers.push(new Organiser("Ilija Petrović", "Odgovoran za odnose sa kompanijama",
        "mailto:ilija.petrovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/ilija-petrovi%25C4%2587-0b496a255"
    ));
    organisers.push(new Organiser("Emilija Petrović", "Odgovorna za društvene medije",
        "mailto:emilija.petrovic&#64;bestnis.rs",
        "https://www.linkedin.com/in/emilija-petrovi%C4%87-0844621aa/"
    ));
    organisers.push(new Organiser("Jovana Mandić", "Odgovorna za učesnike",
        "mailto:jovana.mandic&#64;bestnis.rs",
        "hhttps://www.linkedin.com/in/jovana-mandi%C4%87-a463192b0"
    ));
    organisers.push(new Organiser("Miloš Bojić", "Odgovoran za društvene aktivnosti",
        "mailto:milos.bojic&#64;bestnis.rs",
        "https://www.linkedin.com/in/milo%C5%A1-boji%C4%87-8a8450272"
    ));
    organisers.push(new Organiser("Katarina Totev Jović", "Odgovorna za dizajn",
        "mailto:katarina.totev&#64;bestnis.rs",
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
