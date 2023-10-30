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

const speed = 10;

document.addEventListener('keydown', moveSubmersible);

function moveSubmersible(e) {
    let moveX = 0;
    let moveY = 0;

    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            moveY = -speed;
            break;
        case 'ArrowDown':
        case 's':
            moveY = speed;
            break;
        case 'ArrowLeft':
        case 'a':
            moveX = -speed;
            submarineImg.style.transform = 'scaleX(-1)';
            break;
        case 'ArrowRight':
        case 'd':
            moveX = speed;
            submarineImg.style.transform = 'scaleX(1)'; // Reset the transformation when moving right
            break;
    }

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
