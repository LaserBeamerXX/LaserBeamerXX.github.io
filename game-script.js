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
        tree.style.left = `${event.clientX - this.offsetLeft}px`;
        tree.style.top = `${event.clientY - this.offsetTop}px`;
        this.appendChild(tree);
    }
});

// Add event listener for tree interaction (to prevent propagation)
document.addEventListener("click", function () {
    if (selectedTool === "water") {
        // If "Water" is selected, simulate watering (you can add more logic here)
        console.log("Watered the tree.");
    }
});
