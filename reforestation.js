// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");
let treeToClone = null; // Initialize as null

// Event listener for adding trees to the inventory
gameScreen.addEventListener("click", (event) => {
    if (treeToClone) {
        // Clone the selected tree image and add it to the game screen
        const clonedTree = treeToClone.cloneNode(true);
        clonedTree.style.position = "absolute";
        clonedTree.style.left = `${event.clientX - gameScreen.getBoundingClientRect().left}px`;
        clonedTree.style.top = `${event.clientY - gameScreen.getBoundingClientRect().top}px`;
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
