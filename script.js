function expandCard(card) {
    const modal = document.getElementById("expanded-project");
    const modalContent = modal.querySelector(".modal-content h3");
    modalContent.textContent = card.querySelector("h3").textContent;
    modal.style.display = "flex";
}

function closeCard() {
    const modal = document.getElementById("expanded-project");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("expanded-project");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

/* Flip Card Functionality */
function flipCard(card) {
    card.classList.toggle('flip');
}
