// Simulated current energy usage (in kWh)
let currentUsage = 100;

// Event listener for upgrade selection
document.getElementById('upgrade-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const upgrade = event.target.getAttribute('data-upgrade');
        // Simulate the upgrade process here
        console.log(`Selected upgrade: ${upgrade}`);
        // Update the current usage (this is a simplified example)
        currentUsage -= upgrade === 'LED Bulbs' ? 10 : upgrade === 'Solar Panels' ? 50 : 0;
        document.getElementById('current-usage-value').textContent = `${currentUsage} kWh`;
    }
});
