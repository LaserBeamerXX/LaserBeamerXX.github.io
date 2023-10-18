// Store references to the game screen, inventory, and objectives
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");
const objectives = document.getElementById("objectives");
let treeToClone = null; // Initialize as null
let plantedTrees = 0; // Initialize the count

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

// Function to update the objectives text
function updateObjectives() {
    document.getElementById("trees-planted").textContent = `Plant ${plantedTrees}/10 Trees`;
}
