const submarine = document.getElementById('submarine');
const trash = document.getElementById('trash');
const trashCounter = document.getElementById('trash-counter');

let submarineX = 50;
let submarineY = 50;
let trashX = 200;
let trashY = 200;
let collectedTrash = 0;
const trashTarget = 10;

const submarineWidth = 150; // Adjust to the width of your submarine image
const submarineHeight = 100; // Adjust to the height of your submarine image

submarine.style.left = submarineX + 'px';
submarine.style.top = submarineY + 'px';
trash.style.left = trashX + 'px';
trash.style.top = trashY + 'px';

trashCounter.textContent = 'Collected: ' + collectedTrash + '/' + trashTarget;

const speed = 2;

const movementKeys = {
    w: false,
    a: false,
    s: false,
    d: false,
};

document.addEventListener('keydown', startMoving);
document.addEventListener('keyup', stopMoving);

function startMoving(e) {
    const key = e.key.toLowerCase();
    movementKeys[key] = true;

    moveSubmersible();
}

function stopMoving(e) {
    const key = e.key.toLowerCase();
    movementKeys[key] = false;

    moveSubmersible();
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
    const trashRect = trash.getBoundingClientRect();

    if (
        submarineRect.left < trashRect.right &&
        submarineRect.right > trashRect.left &&
        submarineRect.top < trashRect.bottom &&
        submarineRect.bottom > trashRect.top
    ) {
        trashX = Math.random() * window.innerWidth;
        trashY = Math.random() * window.innerHeight;
        trash.style.left = trashX + 'px';
        trash.style.top = trashY + 'px';

        collectedTrash++;
        trashCounter.textContent = 'Collected: ' + collectedTrash + '/' + trashTarget;

        if (collectedTrash >= trashTarget) {
            alert('Level Complete! You collected ' + collectedTrash + ' trash items.');
        }
    }
}

// Adjust the initial position of the submarine to stay within the visible area
window.addEventListener('resize', () => {
    submarineX = Math.max(0, Math.min(window.innerWidth - submarineWidth, submarineX));
    submarineY = Math.max(0, Math.min(window.innerHeight - submarineHeight, submarineY));
    submarine.style.left = submarineX + 'px';
    submarine.style.top = submarineY + 'px';
});
