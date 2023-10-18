// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");
let treeToClone = null; // Initialize as null

// Define variables for tracking the number of planted trees and the required number to progress
let plantedTrees = 0;
const requiredTreesToProgress = 10; // Set the required number of trees

// Define an array of levels
const levels = [
    { requiredTrees: 10, message: "You've planted enough trees to progress to the next level!", nextLevel: "Eco-City Sustainability" },
    { requiredTrees: 10, message: "Great job! You can move on to the next level!" }
];

// Initialize the current level
let currentLevel = 0;

// Function to update the tree count display
function updateTreeCount() {
    const treeCountDisplay = document.getElementById("tree-count");
    if (treeCountDisplay) {
        treeCountDisplay.textContent = `Trees Planted: ${plantedTrees}`;
    }
}

// Function to check if the player can progress to the next level
function checkProgress() {
    if (plantedTrees >= levels[currentLevel].requiredTrees) {
        alert(levels[currentLevel].message);

        // Move to the next level
        currentLevel++;

        // Reset the plantedTrees count
        plantedTrees = 0;

        // Redirect to the next level if available
        if (currentLevel < levels.length) {
            // Example: You can redirect the player to a new page for the next level
            window.location.href = `game.html`;
        } else {
            alert("Congratulations! You've completed all levels.");
        }
    }
    updateTreeCount(); // Update the tree count display
}

// Event listener for adding trees to the inventory
gameScreen.addEventListener("click", (event) => {
    if (treeToClone) {
        // Create a new tree image to add to the game screen
        const clonedTree = new Image();
        clonedTree.src = treeToClone.src;
        clonedTree.style.position = "absolute";

        // Calculate the position to center the tree image at the cursor
        const offsetX = event.clientX - gameScreen.getBoundingClientRect().left - (clonedTree.width / 2);
        const offsetY = event.clientY - gameScreen.getBoundingClientRect().top - (clonedTree.height / 2);
        clonedTree.style.left = offsetX + "px";
        clonedTree.style.top = offsetY + "px";

        // Add the cloned tree image to the game screen
        gameScreen.appendChild(clonedTree);

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
        // Toggle the selected class for visual indication
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");
            treeToClone = null; // Clear the selection
        } else {
            event.target.classList.add("selected");
            treeToClone = event.target; // Store the selected tree for cloning
        }
    }
});

// Initial tree count display
updateTreeCount();
