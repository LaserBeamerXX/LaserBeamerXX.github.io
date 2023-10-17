// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");

// Event listener for adding trees to the inventory
gameScreen.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        // Clone the tree image and add it to the inventory
        const treeImage = event.target.cloneNode(true);
        inventory.appendChild(treeImage);
        // Add a click event listener to the tree image in the inventory
        treeImage.addEventListener("click", () => {
            // Clone the tree image when clicked in the inventory
            const clonedTree = treeImage.cloneNode(true);
            // Position the cloned tree at the point where the user clicked on the game screen
            clonedTree.style.position = "absolute";
            clonedTree.style.left = `${event.clientX - gameScreen.getBoundingClientRect().left}px`;
            clonedTree.style.top = `${event.clientY - gameScreen.getBoundingClientRect().top}px`;
            gameScreen.appendChild(clonedTree);
        });
    }
});
