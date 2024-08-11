const volumes = [
    {
        "image": "./assets/img/OverlordImage01.jpeg",
        "title": "O Rei Undead",
        "description": "Overlord Volume 01",
        "volume": "./assets/pdf/OverlordVolume01.pdf"
    },
    {
        "image": "./assets/img/OverlordImage02.jpeg",
        "title": "O Guerreiro Negro",
        "description": "Overlord Volume 02",
        "volume": "./assets/pdf/OverlordVolume02.pdf"
    },
    {
        "image": "./assets/img/OverlordImage03.jpeg",
        "title": "A Valquíria Sangrenta ",
        "description": "Overlord Volume 03",
        "volume": "./assets/pdf/OverlordVolume03.pdf"
    },
    {
        "image": "./assets/img/OverlordImage04.jpeg",
        "title": "Os Heróis Lizardman",
        "description": "Overlord Volume 04",
        "volume": "./assets/pdf/OverlordVolume04.pdf"
    },
    {
        "image": "./assets/img/OverlordImage5.jpg",
        "title": "Os Homens do Reino - Parte 1",
        "description": "Overlord Volume 05",
        "volume": "./assets/pdf/OverlordVolume05.pdf"
    },
    {
        "image": "./assets/img/OverlordImage06.jpeg",
        "title": "Os Homens do Reino - Parte 2",
        "description": "Overlord Volume 06",
        "volume": "./assets/pdf/OverlordVolume06.pdf"
    },
    {
        "image": "./assets/img/OverlordImage07.jpg",
        "title": "Os Invasores da Grande Tumba",
        "description": "Overlord Volume 07",
        "volume": "./assets/pdf/OverlordVolume07.pdf"
    },
    {
        "image": "./assets/img/OverlordImage08.jpg",
        "title": "Os Dois Líderes",
        "description": "Overlord Volume 08",
        "volume": "./assets/pdf/OverlordVolume08.pdf"
    },
    {
        "image": "./assets/img/OverlordImage09.jpeg",
        "title": "O Magic Caster da Destruição",
        "description": "Overlord Volume 09",
        "volume": "./assets/pdf/OverlordVolume09.pdf"
    },
    {
        "image": "./assets/img/OverlordImage10.jpeg",
        "title": "O Governante das Conspirações",
        "description": "Overlord Volume 10",
        "volume": "./assets/pdf/OverlordVolume10.pdf"
    },
    {
        "image": "./assets/img/OverlordImage11.jpeg",
        "title": "O Artesão dos Dwarfs",
        "description": "Overlord Volume 11",
        "volume": "./assets/pdf/OverlordVolume11.pdf"
    },
    {
        "image": "./assets/img/OverlordImage12.jpeg",
        "title": "A Paladina do Reino Sacro - Parte 1",
        "description": "Overlord Volume 12",
        "volume": "./assets/pdf/OverlordVolume12.pdf"
    },
    {
        "image": "./assets/img/OverlordImage13.jpeg",
        "title": "A Paladina do Reino Sacro - Parte 2",
        "description": "Overlord Volume 13",
        "volume": "./assets/pdf/OverlordVolume13.pdf"
    },
    {
        "image": "./assets/img/OverlordImage14.jpg",
        "title": "A Bruxa do Reino em Ruínas",
        "description": "Overlord Volume 14",
        "volume": "./assets/pdf/OverlordVolume14.pdf"
    },
    {
        "image": "./assets/img/OverlordImage15.jpeg",
        "title": "A Divina Meia-Elfa - Parte 1",
        "description": "Overlord Volume 15",
        "volume": "./assets/pdf/OverlordVolume15.pdf"
    },
    {
        "image": "./assets/img/OverlordImage16.jpeg",
        "title": "A Divina Meia-Elfa - Parte 2",
        "description": "Overlord Volume 16",
        "volume": "./assets/pdf/OverlordVolume16.pdf"
    }
];

function createCards() {
    const root = document.getElementById('root');

    volumes.forEach(
        () => {
            const section = document.createElement('section');
            section.className = 'card';

            const img = document.createElement('img');
            img.src = '';

            const contentDiv = document.createElement('div');
            contentDiv.className = 'content';

            const h1 = document.createElement('h1');
            h1.className = 'title';
            h1.textContent = '';

            const p = document.createElement('p');
            p.className = 'volume';
            p.textContent = '';

            const openModalButton = document.createElement('button');
            openModalButton.id = 'openModalButton';
            openModalButton.textContent = 'Abrir Volume';

            const dialog = document.createElement('dialog');
            dialog.id = 'modal';
            dialog.open = true;
            dialog.style.display = 'none';

            const menu = document.createElement('menu');

            const closeModalButton = document.createElement('button');
            closeModalButton.id = 'closeModalButton';
            closeModalButton.textContent = 'Close';

            const iframe = document.createElement('iframe');
            iframe.className = 'pdfs';
            iframe.src = '';
            iframe.width = '100%';
            iframe.height = '100%';

            menu.appendChild(closeModalButton);
            dialog.appendChild(menu);
            dialog.appendChild(iframe);

            contentDiv.appendChild(h1);
            contentDiv.appendChild(p);
            contentDiv.appendChild(openModalButton);
            contentDiv.appendChild(dialog);

            section.appendChild(img);
            section.appendChild(contentDiv);

            root.appendChild(section);
        }
    );
};

createCards();

function setCardContent() {
    const cards = document.querySelectorAll(".card");

    volumes.forEach(
        (volume, index) => {
            const card = cards[index];
            const img = card.querySelector("img");
            const h1 = card.querySelector(".title");
            const p = card.querySelector(".volume");

            img.src = volume.image;
            h1.textContent = volume.title;
            p.textContent = volume.description;
        }
    );
};

setCardContent();

function setPDF() {
    const modals = document.querySelectorAll("#modal");

    volumes.forEach(
        (volume, index) => {
            const modal = modals[index];
            const iframe = modal.querySelector(".pdfs");

            iframe.src = volume.volume;
        }
    );
};

setPDF();

function modal() {
    const openModalButtons = document.querySelectorAll("#openModalButton");
    const closeModals = document.querySelectorAll("#closeModalButton");
    const modals = document.querySelectorAll("#modal");

    openModalButtons.forEach(
        button => {
            button.addEventListener(
                "click", function() {
                    const modal = button.nextElementSibling
                    modal.style.display = "block"
                }
            );
        }
    );
    
    closeModals.forEach(
        closeButton => {
            closeButton.addEventListener(
                "click", function() {
                    const modal = closeButton.closest("#modal")
                    modal.style.display = "none"
                }
            );
        }
    );
};

modal();