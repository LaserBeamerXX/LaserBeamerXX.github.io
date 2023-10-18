// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");
let treeToClone = null; // Initialize as null

// Define variables for tracking the number of planted trees and the required number to progress
let plantedTrees = 0;
const requiredTreesToProgress = 10; // Set the required number of trees

// Function to update the tree count display
function updateTreeCount() {
    const treePlantedCount = document.getElementById("tree-planted");
    if (treePlantedCount) {
        treePlantedCount.textContent = plantedTrees;
    }
}

// Function to check if the player can progress to the next level
function checkProgress() {
    if (plantedTrees >= requiredTreesToProgress) {
        alert("You've planted enough trees to progress to the next level!");

        // Redirect to the next level if available
        window.location.href = "next-level.html";
    }
    updateTreeCount(); // Update the tree count display
}

// Event listener for adding trees to the inventory
gameScreen.addEventListener("click", (event) => {
    if (treeToClone) {
        // ...

        // Increment the plantedTrees counter
        plantedTrees++;

        // Check if the player can progress to the next level
        checkProgress();
    }
    updateTreeCount(); // Update the tree count display
});

// Event listener for selecting a tree to clone
inventory.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        // ...
    }
});

// Initial tree count display
updateTreeCount();
