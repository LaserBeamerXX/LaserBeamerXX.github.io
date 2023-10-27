// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");

// Variables to track game state
let upgradesInstalled = {
    'led-bulbs': false,
    'solar-panels': false,
    'efficient-appliances': false,
};

// Event listener for selecting and installing upgrades
inventory.addEventListener("click", (event) => {
    if (event.target.classList.contains("upgrade")) {
        const upgradeId = event.target.id;
        
        // Check if the upgrade is already installed
        if (!upgradesInstalled[upgradeId]) {
            // Install the upgrade
            upgradesInstalled[upgradeId] = true;
            
            // Visual feedback for installed upgrades (e.g., change color)
            event.target.style.backgroundColor = "#00FF00";
            
            // TODO: Add game logic to calculate energy savings and provide feedback to the player.
        }
    }
});
