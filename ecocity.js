// JavaScript code for your "EcoCity" game
const gameScreen = document.getElementById("game-screen");
const infoPanel = document.getElementById("info-panel");
let budget = 10000; // Starting budget
let carbonFootprint = 0; // Track carbon footprint
let energySources = 0; // Number of energy sources in the city
let publicTransportation = false; // Track if public transportation is implemented
let recyclingProgram = false; // Track if recycling program is implemented
let naturalParkPreserved = false; // Track if the natural park is preserved

// Initialize the game
function initializeGame() {
    updateInfoPanel();

    document.querySelector(".build-residential").addEventListener("click", buildResidential);
    document.querySelector(".build-commercial").addEventListener("click", buildCommercial);
    document.querySelector(".build-industrial").addEventListener("click", buildIndustrial);
    document.querySelector(".build-wind-turbine").addEventListener("click", buildWindTurbine);
    document.querySelector(".build-solar-panel").addEventListener("click", buildSolarPanel);
    document.querySelector(".implement-public-transportation").addEventListener("click", implementPublicTransportation);
    document.querySelector(".implement-recycling-program").addEventListener("click", implementRecyclingProgram);
    document.querySelector(".preserve-natural-park").addEventListener("click", preserveNaturalPark);
}

function buildResidential() {
    if (budget >= 1000) {
        // Add logic to create and place a residential building
        budget -= 1000;
        carbonFootprint += 50;
        updateInfoPanel();
    }
}

function buildCommercial() {
    if (budget >= 1500) {
        // Add logic to create and place a commercial building
        budget -= 1500;
        carbonFootprint += 75;
        updateInfoPanel();
    }
}

function buildIndustrial() {
    if (budget >= 2000) {
        // Add logic to create and place an industrial building
        budget -= 2000;
        carbonFootprint += 100;
        updateInfoPanel();
    }
}

function buildWindTurbine() {
    if (budget >= 2500) {
        // Add logic to create and place a wind turbine
        budget -= 2500;
        carbonFootprint -= 50;
        energySources++;
        updateInfoPanel();
    }
}

function buildSolarPanel() {
    if (budget >= 3000) {
        // Add logic to create and place a solar panel
        budget -= 3000;
        carbonFootprint -= 75;
        energySources++;
        updateInfoPanel();
    }
}

function implementPublicTransportation() {
    if (budget >= 4000 && !publicTransportation) {
        // Add logic to implement public transportation
        publicTransportation = true;
        budget -= 4000;
        carbonFootprint -= 100;
        updateInfoPanel();
    }
}

function implementRecyclingProgram() {
    if (budget >= 3000 && !recyclingProgram) {
        // Add logic to implement
