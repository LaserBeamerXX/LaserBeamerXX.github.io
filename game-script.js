// JavaScript for the level

// Track the selected tool (null, "plant", or "water")
let selectedTool = null;

// Add event listener to the environment image for interactivity
const environment = document.getElementById("environment");

// Add an event listener for the "Plant Tree" button
document.getElementById("tree-tool").addEventListener("click", function () {
    if (selectedTool === "plant") {
        // If "Plant Tree" is already selected, unselect it
        selectedTool = null;
        this.style.backgroundColor = "#FFA726";
        environment.style.cursor = "auto";
    } else {
        // If "Plant Tree" is not selected, select it
        selectedTool = "plant";
        this.style.backgroundColor = "#4CAF50";
        // Deselect the "Water" tool if it's selected
        document.getElementById("water-tool").style.backgroundColor = "#FFA726";
        // Set the cursor style to indicate that you can interact with the environment
        environment.style.cursor = "crosshair";
    }
});

// Add an event listener for the "Water" button
document.getElementById("water-tool").addEventListener("click", function () {
    if (selectedTool === "water") {
        // If "Water" is already selected, unselect it
        selectedTool = null;
        this.style.backgroundColor = "#FFA726";
        environment.style.cursor = "auto";
    } else {
        // If "Water" is not selected, select it
        selectedTool = "water";
        this.style.backgroundColor = "#4CAF50";
        // Deselect the "Plant Tree" tool if it's selected
        document.getElementById("tree-tool").style.backgroundColor = "#FFA726";
        // Set the cursor style to indicate that you can interact with the environment
        environment.style.cursor = "crosshair";
    }
});

// Add an event listener for clicking on the environment to interact
environment.addEventListener("click", function (event) {
    if (selectedTool === "plant") {
        // If "Plant Tree" is selected, create a tree at the clicked location
        const tree = document.createElement("div");
        tree.className = "tree";
        tree.style.left = `${event.clientX - this.offsetLeft}px`;
        tree.style.top = `${event.clientY - this.offsetTop}px`;
        this.appendChild(tree);
        // Disable tree planting tool after planting
        document.getElementById("tree-tool").style.backgroundColor = "#FFA726";
        selectedTool = null;
        // Reset the cursor style to the default
        this.style.cursor = "auto";
    } else if (selectedTool === "water") {
        // If "Water" is selected, simulate watering at the clicked location (you can add more logic here)
        console.log("Watered at: ", event.clientX - this.offsetLeft, event.clientY - this.offsetTop);
    }
});
