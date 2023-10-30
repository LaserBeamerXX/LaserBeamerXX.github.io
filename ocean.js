const submarine = document.getElementById('submarine');
const submarineImg = document.getElementById('submarine-img');
const trash = document.getElementById('trash');
const trashCounter = document.getElementById('trash-counter');

let submarineX = 50;
let submarineY = 50;
let trashX = 200;
let trashY = 200;
let collectedTrash = 0;
const trashTarget = 10;

submarine.style.left = submarineX + 'px';
submarine.style.top = submarineY + 'px';
trash.style.left = trashX + 'px';
trash.style.top = trashY + 'px';

trashCounter.textContent = 'Collected: ' + collectedTrash + '/' + trashTarget;

const speed = 2;

document.addEventListener('keydown', startMoving);
document.addEventListener('keyup', stopMoving);

const movementKeys = {
    w: false,
    a: false,
    s: false,
    d: false,
};

function startMoving(e) {
    const key = e.key.toLowerCase();
    movementKeys[key] = true;

    if (isDiagonalMovement()) {
        moveInterval = setInterval(moveSubmersible, 16);
    }
}

function stopMoving(e) {
    const key = e.key.toLowerCase();
    movementKeys[key] = false;

    if (!isDiagonalMovement()) {
        clearInterval(moveInterval);
    }
}

let moveInterval = null;

function isDiagonalMovement() {
    return (
        (movementKeys.w && (movementKeys.a || movementKeys.d)) ||
        (movementKeys.s && (movementKeys.a || movementKeys.d))
    );
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
