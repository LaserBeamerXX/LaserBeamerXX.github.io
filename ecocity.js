const gameScreen = document.getElementById("game-screen");
const infoPanel = document.getElementById("info-panel");
let budget = 10000;
let carbonFootprint = 0;
let population = 0;
let era = 1;

// Resource management variables
let water = 100;
let electricity = 100;
let materials = 100;

// Pollution variables
let pollution = 0;

// Weather effects
let weather = "Sunny";

// Time progression
let timeInterval;
const eras = ["Modern", "Green", "Sustainable"];
const eraLength = 30000; // Milliseconds

// Urban planning challenges and zoning
let zoning = "Residential";

// Environmental events
const events = ["Wildfire", "Flood", "Air Pollution"];

// Public opinion
let publicOpinion = 80;

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
    const populationElement = document.getElementById("population");

    budgetElement.textContent = budget;
    carbonFootprintElement.textContent = carbonFootprint;
    populationElement.textContent = population;

    if (message) {
        const infoMessage = document.createElement("p");
        infoMessage.textContent = message;
        infoPanel.appendChild(infoMessage);
    }
}

function handleWeather() {
    if (weather === "Rainy") {
        water += 10;
        pollution += 5;
        updateInfoPanel("Rain has increased water resources but caused pollution.");
    } else if (weather === "Drought") {
        water -= 10;
        electricity -= 5;
        updateInfoPanel("Drought has reduced water and electricity resources.");
    }
}

function updateEra() {
    if (era < eras.length) {
        era++;
        updateInfoPanel(`City has entered the ${eras[era - 1]} era.`);
    }
}

function handleUrbanPlanning() {
    if (zoning === "Residential") {
        population += 100;
        updateInfoPanel("Residential zoning has attracted more citizens.");
    } else if (zoning === "Commercial") {
        budget += 1000;
        updateInfoPanel("Commercial zoning has increased the city's budget.");
    } else if (zoning === "Industrial") {
        materials += 100;
        updateInfoPanel("Industrial zoning has boosted material resources.");
    }
}

function handleEnvironmentalEvents() {
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    if (randomEvent === "Wildfire") {
        population -= 50;
        pollution += 20;
        updateInfoPanel("A wildfire has reduced population and increased pollution.");
    } else if (randomEvent === "Flood") {
        water -= 30;
        budget -= 2000;
        updateInfoPanel("A flood has damaged water resources and the city's budget.");
    } else if (randomEvent === "Air Pollution") {
        carbonFootprint += 50;
        publicOpinion -= 10;
        updateInfoPanel("Air pollution has increased carbon footprint and decreased public opinion.");
    }
}

function advanceTime() {
    handleWeather();
    handleUrbanPlanning();
    handleEnvironmentalEvents();
    updateEra();
    updatePublicOpinion();

    timeInterval = setTimeout(advanceTime, eraLength);
}

function updatePublicOpinion() {
    if (publicOpinion < 50) {
        updateInfoPanel("Public dissatisfaction is affecting city performance.");
    }
}

// Event listeners
document.querySelector(".collect-waste").addEventListener("click", collectWaste);

// Start the game
advanceTime();
