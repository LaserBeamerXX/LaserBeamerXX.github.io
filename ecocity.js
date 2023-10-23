const gameScreen = document.getElementById("game-screen");
const infoPanel = document.getElementById("info-panel");
let budget = 10000;
let carbonFootprint = 0;

function collectWaste() {
    const wasteCollectionCost = 500;
    const wasteCarbonImpact = 30;

    if (budget >= wasteCollectionCost) {
        budget -= wasteCollectionCost;
        carbonFootprint += wasteCarbonImpact;
        updateInfoPanel("Waste has been collected. Budget decreased, and carbon footprint increased.");
    } else {
        updateInfoPanel("Not enough budget for waste collection.");
    }
}

function updateInfoPanel(message) {
    const budgetElement = document.getElementById("budget");
    const carbonFootprintElement = document.getElementById("carbon-footprint");

    budgetElement.textContent = budget;
    carbonFootprintElement.textContent = carbonFootprint;

    if (message) {
        const infoMessage = document.createElement("p");
        infoMessage.textContent = message;
        infoPanel.appendChild(infoMessage);
    }
}

document.querySelector(".collect-waste").addEventListener("click", collectWaste);
