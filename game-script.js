document.addEventListener('DOMContentLoaded', function () {
    const environment = document.getElementById('environment');
    const treeIcon = document.getElementById('tree-icon');
    const waterIcon = document.getElementById('water-icon');
    let plantingMode = false;

    // Function to handle tree planting
    treeIcon.addEventListener('click', function () {
        if (!plantingMode) {
            plantingMode = true;
            treeIcon.style.border = '2px solid green';
            waterIcon.style.border = 'none';
            environment.addEventListener('click', plantTree);
        } else {
            plantingMode = false;
            treeIcon.style.border = 'none';
            environment.removeEventListener('click', plantTree);
        }
    });

    // Function to handle tree planting on click
    function plantTree(event) {
        const tree = document.createElement('div');
        tree.classList.add('tree');
        tree.style.left = event.clientX - environment.getBoundingClientRect().left - 25 + 'px';
        tree.style.top = event.clientY - environment.getBoundingClientRect().top - 25 + 'px';
        environment.appendChild(tree);
    }

    // Function to handle watering (not fully implemented)
    waterIcon.addEventListener('click', function () {
        if (!plantingMode) {
            // Add watering logic here, like increasing tree growth or health.
            console.log('Watering the trees.');
        }
    });
});
