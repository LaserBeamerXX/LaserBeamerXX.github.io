const submarine = document.getElementById("submarine");
const trash1 = document.getElementById("trash1");
const trash2 = document.getElementById("trash2");

let score = 0;
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "score-display";
scoreDisplay.textContent = `Score: ${score}`;
document.body.appendChild(scoreDisplay);

submarine.addEventListener("click", collectTrash);

function collectTrash() {
    // Calculate the distance between the submarine and each piece of trash
    const submarineRect = submarine.getBoundingClientRect();
    const trash1Rect = trash1.getBoundingClientRect();
    const trash2Rect = trash2.getBoundingClientRect();

    const distanceToTrash1 = getDistance(submarineRect, trash1Rect);
    const distanceToTrash2 = getDistance(submarineRect, trash2Rect);

    // Define a minimum distance for collection (adjust as needed)
    const minDistance = 50;

    if (distanceToTrash1 < minDistance) {
        trash1.remove(); // Remove the trash element from the DOM
        score += 1; // Increase the score
        scoreDisplay.textContent = `Score: ${score}`;
    }

    if (distanceToTrash2 < minDistance) {
        trash2.remove(); // Remove the trash element from the DOM
        score += 1; // Increase the score
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

function getDistance(rect1, rect2) {
    const dx = rect1.x + rect1.width / 2 - (rect2.x + rect2.width / 2);
    const dy = rect1.y + rect1.height / 2 - (rect2.y + rect2.height / 2);
    return Math.sqrt(dx * dx + dy * dy);
}

// Basic submarine movement (left and right) - you can expand on this
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveSubmarine(-10); // Move the submarine left
    } else if (event.key === "ArrowRight") {
        moveSubmarine(10); // Move the submarine right
    }
});

function moveSubmarine(distance) {
    const submarineRect = submarine.getBoundingClientRect();
    const currentLeft = submarineRect.left;
    const newLeft = currentLeft + distance;
    const oceanWidth = 1000; // Width of the game container

    // Ensure the submarine stays within the game container
    if (newLeft >= 0 && newLeft + submarineRect.width <= oceanWidth) {
        submarine.style.left = `${newLeft}px`;
    }
}

// You can add time limit and win/lose conditions as needed
