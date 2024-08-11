function modal() {
    const openModalButtons = document.querySelectorAll("#openModalButton")
    const closeModals = document.querySelectorAll("#closeModalButton")
    const modals = document.querySelectorAll("#modal")

    openModalButtons.forEach(
        function(button) {
            button.addEventListener("click", function() {
                const modal = button.nextElementSibling
                modal.style.display = "block"
            })
        }
    )
    
    closeModals.forEach(
        function(closeButton) {
            closeButton.addEventListener("click", function() {
                const modal = closeButton.closest("#modal")
                modal.style.display = "none"
            })
        }
    )
}

modal()

const pdfData = [
    {
        "volume": "./assets/pdf/OverlordVolume01.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume02.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume03.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume04.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume05.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume06.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume07.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume08.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume09.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume10.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume11.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume12.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume13.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume14.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume15.pdf"
    },
    {
        "volume": "./assets/pdf/OverlordVolume16.pdf"
    }
]

function setPDF() {
    const Modal = document.querySelectorAll("#modal");

    pdfData.forEach((volume, index) => {
        const PDF = Modal[index];
        const iframe = PDF.querySelector(".pdfs")

        iframe.src = volume.volume;
    });
}

setPDF();