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
