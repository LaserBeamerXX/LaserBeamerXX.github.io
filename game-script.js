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
function plantTree(event) {
    if (waterResources >= 10) {
        treesPlanted++;
        waterResources -= 10;
        biodiversity += 5;

        const tree = document.createElement("div");
        tree.className = "tree";
        tree.style.left = (event.clientX - event.target.offsetLeft - 10) + "px";
        document.getElementById("environment").appendChild(tree);

        updateGameStatus();
    } else {
        alert("Not enough water resources to plant a tree.");
    }
}

// Function to toggle tree visibility
function toggleTrees() {
    const trees = document.querySelectorAll(".tree");
    trees.forEach((tree) => {
        tree.style.display = tree.style.display === "none" ? "block" : "none";
    });
}

// Function to toggle water visibility
function toggleWater() {
    const water = document.querySelector(".water");
    water.style.display = water.style.display === "none" ? "block" : "none";
}

function updateGameTime() {
    if (timeLeft > 0) {
        timeLeft--;
        updateGameStatus();
    }
}

document.getElementById("plant-button").addEventListener("click", plantTree);
document.getElementById("toggle-trees").addEventListener("click", toggleTrees);
document.getElementById("toggle-water").addEventListener("click", toggleWater);

// Simulate time passing
setInterval(updateGameTime, 1000);

// Initial game status update
updateGameStatus();
document.addEventListener('DOMContentLoaded', function () {
    const environment = document.getElementById('environment');
    const treeIcon = document.getElementById('tree-icon');
    const waterIcon = document.getElementById('water-icon');
    let plantingMode = false;

    // Function to handle tree planting
    treeIcon.addEventListener('click', function () {
        if (!plantingMode) {
            plantingMode = true;
            treeIcon.style.border = '2px solid green';
            waterIcon.style.border = 'none';
            environment.addEventListener('click', plantTree);
        } else {
            plantingMode = false;
            treeIcon.style.border = 'none';
            environment.removeEventListener('click', plantTree);
        }
    });

    // Function to handle tree planting on click
    function plantTree(event) {
        const tree = document.createElement('div');
        tree.classList.add('tree');
        tree.style.left = event.clientX - environment.getBoundingClientRect().left - 25 + 'px';
        tree.style.top = event.clientY - environment.getBoundingClientRect().top - 25 + 'px';
        environment.appendChild(tree);
    }

    // Function to handle watering (not fully implemented)
    waterIcon.addEventListener('click', function () {
        if (!plantingMode) {
            // Add watering logic here, like increasing tree growth or health.
            console.log('Watering the trees.');
        }
    });
});
