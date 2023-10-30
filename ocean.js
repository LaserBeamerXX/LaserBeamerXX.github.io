const submarine = document.getElementById('submarine');
const trashCounter = document.getElementById('trash-counter');
const trashContainer = document.getElementById('trash-container');

let submarineX = 50;
let submarineY = 50;
let collectedTrash = 0;
const trashTarget = 10;

const submarineWidth = 150; // Adjust to the width of your submarine image
const submarineHeight = 100; // Adjust to the height of your submarine image

submarine.style.left = submarineX + 'px';
submarine.style.top = submarineY + 'px';

trashCounter.textContent = 'Collected: ' + collectedTrash + '/' + trashTarget;

const speed = 2;

const movementKeys = {
    w: false,
    a: false,
    s: false,
    d: false,
};

let moveInterval = null;

document.addEventListener('keydown', startMoving);
document.addEventListener('keyup', stopMoving);

function startMoving(e) {
    const key = e.key.toLowerCase();
    movementKeys[key] = true;

    if (!moveInterval) {
        moveInterval = setInterval(moveSubmersible, 16);
    }
}

function stopMoving(e) {
    const key = e.key.toLowerCase();
    movementKeys[key] = false;

    if (!Object.values(movementKeys).some((value) => value)) {
        clearInterval(moveInterval);
        moveInterval = null;
    }
}

function moveSubmersible() {
    let moveX = 0;
    let moveY = 0;

    if (movementKeys.w) moveY -= speed;
    if (movementKeys.s) moveY += speed;
    if (movementKeys.a) moveX -= speed;
    if (movementKeys.d) moveX += speed;

    submarineX += moveX;
    submarineY += moveY;

    // Ensure the submarine stays within the visible area
    submarineX = Math.max(0, Math.min(window.innerWidth - submarineWidth, submarineX));
    submarineY = Math.max(0, Math.min(window.innerHeight - submarineHeight, submarineY));

    submarine.style.left = submarineX + 'px';
    submarine.style.top = submarineY + 'px';

    checkTrashCollection();
}

function checkTrashCollection() {
    const submarineRect = submarine.getBoundingClientRect();

    // Iterate over trash items and check for collisions
    const trashItems = document.querySelectorAll('.trash-item');
    trashItems.forEach((trashItem) => {
        const trashRect = trashItem.getBoundingClientRect();

        if (
            submarineRect.left < trashRect.right &&
            submarineRect.right > trashRect.left &&
            submarineRect.top < trashRect.bottom &&
            submarineRect.bottom > trashRect.top
        ) {
            // Remove the collected trash item
            trashContainer.removeChild(trashItem);

            collectedTrash++;
            trashCounter.textContent = 'Collected: ' + collectedTrash + '/' + trashTarget;

            if (collectedTrash >= trashTarget) {
                alert('Level Complete! You collected ' + collectedTrash + ' trash items.');
            }
        }
    });
}

function createRandomTrash() {
    const trashItem = document.createElement('img');
    trashItem.classList.add('trash-item');
    trashItem.src = 'bottle.svg'; // Adjust the image source
    trashItem.alt = 'Trash';

    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    trashItem.style.left = randomX + 'px';
    trashItem.style.top = randomY + 'px';

    trashContainer.appendChild(trashItem);
}

// Generate random trash items
for (let i = 0; i < 10; i++) {
    createRandomTrash();
}

// Adjust the initial position of the submarine to stay within the visible area
window.addEventListener('resize', () => {
    submarineX = Math.max(0, Math.min(window.innerWidth - submarineWidth, submarineX));
    submarineY = Math.max(0, Math.min(window.innerHeight - submarineHeight, submarineY));
    submarine.style.left = submarineX + 'px';
    submarine.style.top = submarineY + 'px';
});
