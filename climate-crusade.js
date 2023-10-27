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
    potentialSavings.textContent = `Potential Energy Savings: ${energySavings.toFixed(2)}%`; // Ensure two decimal places
}

// Function to handle the LED bulb upgrade
function upgradeToLED() {
    // Calculate energy savings
    const savingsPercentage = 30; // Adjust as needed
    energySavings += savingsPercentage;
    
    // Update current energy usage
    energyUsage = Math.round(energyUsage * (1 - savingsPercentage / 100));
    
    // Update the dashboard
    updateDashboard();
}

// Add an event listener to the LED upgrade button
const ledUpgradeButton = document.getElementById("upgrade1");
ledUpgradeButton.addEventListener("click", upgradeToLED);
