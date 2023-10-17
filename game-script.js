// JavaScript for the level

// Track the selected tool (null, "plant", or "water")
let selectedTool = null;

// Add an event listener for the "Plant Tree" button
document.getElementById("tree-tool").addEventListener("click", function () {
    if (selectedTool === "plant") {
        // If "Plant Tree" is already selected, unselect it
        selectedTool = null;
        this.style.backgroundColor = "#FFA726";
    } else {
        // If "Plant Tree" is not selected, select it
        selectedTool = "plant";
        this.style.backgroundColor = "#4CAF50";
        // Deselect the "Water" tool if it's selected
        document.getElementById("water-tool").style.backgroundColor = "#FFA726";
    }
});

// Add an event listener for the "Water" button
document.getElementById("water-tool").addEventListener("click", function () {
    if (selectedTool === "water") {
        // If "Water" is already selected, unselect it
        selectedTool = null;
        this.style.backgroundColor = "#FFA726";
    } else {
        // If "Water" is not selected, select it
        selectedTool = "water";
        this.style.backgroundColor = "#4CAF50";
        // Deselect the "Plant Tree" tool if it's selected
        document.getElementById("tree-tool").style.backgroundColor = "#FFA726";
    }
});

// Add event listener to the environment image for interactivity
document.getElementById("environment").addEventListener("click", function (event) {
    if (selectedTool === "plant") {
        // If "Plant Tree" is selected, create a tree at the clicked location
        const tree = document.createElement("div");
        tree.className = "tree";
        tree.style.left = `${event.clientX - this.offsetLeft - 25}px`; // Adjust for the tree's size
        tree.style.top = `${event.clientY - this.offsetTop - 25}px`; // Adjust for the tree's size

        // Make the tree immovable
        tree.style.position = "absolute";
        tree.style.pointerEvents = "none"; // Disable pointer events for the tree, so it can't be moved

        this.appendChild(tree);
    } else if (selectedTool === "water") {
        // If "Water" is selected, simulate watering at the clicked location (you can add more logic here)
        console.log("Watered at: ", event.clientX - this.offsetLeft, event.clientY - this.offsetTop);
    }
});
