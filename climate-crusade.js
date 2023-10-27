// Define the list of available upgrades
const upgrades = [
    { name: "LED Light Bulbs", cost: 100, savings: 30 },
    { name: "Solar Panels", cost: 1000, savings: 150 },
    { name: "Energy-Efficient Appliances", cost: 500, savings: 50 },
];

// Store references to the game screen and inventory
const gameScreen = document.getElementById("game-screen");
const inventory = document.getElementById("inventory");

// Initialize the family home with basic energy consumption
let energyConsumption = 500; // Initial energy consumption in watts

// Populate the upgrade inventory
const upgradeInventory = document.createElement("ul");
upgrades.forEach((upgrade, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${upgrade.name} - Cost: ${upgrade.cost} credits - Savings: ${upgrade.savings} watts`;
    listItem.addEventListener("click", () => {
        // Deduct the upgrade cost from credits (adjust this logic as needed)
        // Reduce energy consumption based on the upgrade
        energyConsumption -= upgrade.savings;
        // Add the upgrade to the inventory
        const inventoryItem = document.createElement("li");
        inventoryItem.textContent = upgrade.name;
        inventory.appendChild(inventoryItem);
    });
    upgradeInventory.appendChild(listItem);
});

// Add the upgrade inventory to the game screen
inventory.appendChild(upgradeInventory);

// Game over condition (e.g., when energy consumption is reduced to a target level)
function checkGameOver() {
    if (energyConsumption <= 300) {
        alert("You've made the home energy-efficient! Great job!");
    }
}



// JavaScript code for the Energy Consumption Dashboard
const dashboard = document.getElementById("dashboard");
const currentUsage = dashboard.querySelector("p:nth-of-type(1)");
const potentialSavings = dashboard.querySelector("p:nth-of-type(2)");

// Set initial values
let energyUsage = 150;
let energySavings = 0;

// Update the dashboard with initial values
updateDashboard();

// Function to update the dashboard
function updateDashboard() {
    currentUsage.textContent = `Current Energy Usage: ${energyUsage} kWh`;
    potentialSavings.textContent = `Potential Energy Savings: ${energySavings}%`;
}

// Function to handle the LED bulb upgrade
function upgradeToLED() {
    // Calculate energy savings
    energySavings += 30;
    // Update current energy usage
    energyUsage = Math.round(energyUsage * (1 - energySavings / 100));
    // Update the dashboard
    updateDashboard();
}

// Add an event listener to the LED upgrade button
const ledUpgradeButton = document.getElementById("upgrade1");
ledUpgradeButton.addEventListener("click", upgradeToLED);


// Add Bill Nye's educational content and guidance as needed
// For example, you can have Bill Nye provide information on the impact of energy-efficient upgrades.
