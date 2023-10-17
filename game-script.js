let treesPlanted = 0;
let waterResources = 100;
let biodiversity = 0;
let timeLeft = 300;

// Function to update game status
function updateGameStatus() {
    document.getElementById("planted-trees").textContent = treesPlanted;
    document.getElementById("water-resources").textContent = waterResources;
    document.getElementById("biodiversity").textContent = biodiversity + "%";
    document.getElementById("time-left").textContent = formatTime(timeLeft);

    if (treesPlanted >= 100 && biodiversity >= 80) {
        alert("Level 1 completed! You've successfully reforested the valley.");
        // You can add code here to transition to the next level.
    } else if (timeLeft <= 0) {
        alert("Time's up! You didn't meet the level objectives.");
        // You can add code here to retry the level or return to the main menu.
    }
}

// Function to format time as MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Function to plant trees
function plantTree() {
    if (waterResources >= 10) {
        treesPlanted++;
        waterResources -= 10;
        biodiversity += 5;
        updateGameStatus();
    } else {
        alert("Not enough water resources to plant a tree.");
    }
}

// Function to water trees
function waterTree() {
    if (treesPlanted > 0) {
        treesPlanted--;
        waterResources += 20;
        updateGameStatus();
    }
}

function updateGameTime() {
    if (timeLeft > 0) {
        timeLeft--;
        updateGameStatus();
    }
}

document.getElementById("plant-button").addEventListener("click", plantTree);
document.getElementById("water-button").addEventListener("click", waterTree);

// Simulate time passing
setInterval(updateGameTime, 1000);

// Initial game status update
updateGameStatus();
