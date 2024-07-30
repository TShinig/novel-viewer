const volumes = [
    {
        "image": "./assets/img/OverlordImage01.jpeg",
        "title": "O Rei Undead",
        "volume": "Overlord Volume 01"
    },
    {
        "image": "./assets/img/OverlordImage02.jpeg",
        "title": "O Guerreiro Negro",
        "volume": "Overlord Volume 02"
    },
    {
        "image": "./assets/img/OverlordImage03.jpeg",
        "title": "A Valquíria Sangrenta ",
        "volume": "Overlord Volume 03"
    },
    {
        "image": "./assets/img/OverlordImage04.jpeg",
        "title": "Os Heróis Lizardman",
        "volume": "Overlord Volume 04"
    },
    {
        "image": "./assets/img/OverlordImage5.jpg",
        "title": "Os Homens do Reino - Parte 1",
        "volume": "Overlord Volume 05"
    },
    {
        "image": "./assets/img/OverlordImage06.jpeg",
        "title": "Os Homens do Reino - Parte 2",
        "volume": "Overlord Volume 06"
    },
    {
        "image": "./assets/img/OverlordImage07.jpg",
        "title": "Os Invasores da Grande Tumba",
        "volume": "Overlord Volume 07"
    },
    {
        "image": "./assets/img/OverlordImage08.jpg",
        "title": "Os Dois Líderes",
        "volume": "Overlord Volume 08"
    },
    {
        "image": "./assets/img/OverlordImage09.jpeg",
        "title": "O Magic Caster da Destruição",
        "volume": "Overlord Volume 09"
    },
    {
        "image": "./assets/img/OverlordImage10.jpeg",
        "title": "O Governante das Conspirações",
        "volume": "Overlord Volume 10"
    },
    {
        "image": "./assets/img/OverlordImage11.jpeg",
        "title": "O Artesão dos Dwarfs",
        "volume": "Overlord Volume 11"
    },
    {
        "image": "./assets/img/OverlordImage12.jpeg",
        "title": "A Paladina do Reino Sacro - Parte 1",
        "volume": "Overlord Volume 12"
    },
    {
        "image": "./assets/img/OverlordImage13.jpeg",
        "title": "A Paladina do Reino Sacro - Parte 2",
        "volume": "Overlord Volume 13"
    },
    {
        "image": "./assets/img/OverlordImage14.jpg",
        "title": "A Bruxa do Reino em Ruínas",
        "volume": "Overlord Volume 14"
    },
    {
        "image": "./assets/img/OverlordImage15.jpeg",
        "title": "A Divina Meia-Elfa - Parte 1",
        "volume": "Overlord Volume 15"
    },
    {
        "image": "./assets/img/OverlordImage16.jpeg",
        "title": "A Divina Meia-Elfa - Parte 2",
        "volume": "Overlord Volume 16"
    }
];

function setContent() {
    const cards = document.querySelectorAll(".card")

    volumes.forEach(
        (volume, index) => {
            const card = cards[index]
            const img = card.querySelector("img")
            const h1 = card.querySelector(".title")
            const p = card.querySelector(".volume")

            img.src = volume.image
            h1.textContent = volume.title
            p.textContent = volume.volume
        }
    )
}

setContent()