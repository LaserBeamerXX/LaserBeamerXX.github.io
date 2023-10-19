// Store references to the game screen, inventory, and objectives
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");
const objectives = document.getElementById("objectives");
let treeToClone = null; // Initialize as null
let plantedTrees = 0; // Initialize the count

// Function to update the objectives text and check for level completion
function updateObjectives() {
    document.getElementById("trees-planted").textContent = `Plant ${plantedTrees}/10 Trees`;

    // Check if the player has planted all 10 trees
    if (plantedTrees === 10) {
        // Display the level complete screen
        const levelCompleteScreen = document.getElementById("level-complete");
        levelCompleteScreen.style.display = "block";
    }
}

// Event listener for the "Next Level" button
const nextLevelButton = document.getElementById("next-level-button");
nextLevelButton.addEventListener("click", () => {
    // Perform actions to move to the next level here
    // You can load a new game screen or perform other level transition logic
    // For this example, we'll hide the level complete screen
    const levelCompleteScreen = document.getElementById("level-complete");
    levelCompleteScreen.style.display = "none";

    // Redirect to the "ecocity.html" page
    window.location.href = "ecocity.html";
});

// Function to adjust game screen size based on inventory size
function resizeGameScreen() {
    const inventoryWidth = inventory.clientWidth;
    const maxGameScreenWidth = window.innerWidth - inventoryWidth;
    gameScreen.style.maxWidth = maxGameScreenWidth + "px";
}

// Call the resizeGameScreen function initially and on window resize
resizeGameScreen();
window.addEventListener("resize", resizeGameScreen);

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

        // Increment the planted trees count
        plantedTrees++;
        updateObjectives();
    }
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
