// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");
let treeToClone = null; // Initialize as null
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

        // Make the cloned tree smaller
        clonedTree.style.width = "100px"; // Adjust the size as needed
        clonedTree.style.height = "100px"; // Adjust the size as needed

        // Add the cloned tree image to the game screen
        gameScreen.appendChild(clonedTree);
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
