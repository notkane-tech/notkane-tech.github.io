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


function createTranslucentClouds() {
    for (let i = 0; i < 5; i++) { // Create 5 clouds (adjust number as needed)
        let cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.top = Math.random() * window.innerHeight + 'px'; // Random vertical position
        cloud.style.animationDuration = (20 + Math.random() * 10) + 's'; // Random speed
        document.body.appendChild(cloud);
    }
}

// Call the function to generate translucent clouds on all pages
createTranslucentClouds();
