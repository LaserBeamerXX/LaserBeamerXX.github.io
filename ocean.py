import pygame
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
SUBMARINE_SPEED = 5
TRASH_SPEED = 3
TRASH_SIZE = 30
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

# Create the game window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Submersible Cleanup")

# Submarine properties
submarine_image = pygame.image.load("submarine.png")
submarine_rect = submarine_image.get_rect()
submarine_rect.center = (WIDTH // 2, HEIGHT // 2)

# Trash properties
trash_list = []
for _ in range(10):
    trash = pygame.Rect(
        random.randint(0, WIDTH - TRASH_SIZE),
        random.randint(0, HEIGHT - TRASH_SIZE),
        TRASH_SIZE,
        TRASH_SIZE,
    )
    trash_list.append(trash)

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Handle user input
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        submarine_rect.x -= SUBMARINE_SPEED
    if keys[pygame.K_RIGHT]:
        submarine_rect.x += SUBMARINE_SPEED
    if keys[pygame.K_UP]:
        submarine_rect.y -= SUBMARINE_SPEED
    if keys[pygame.K_DOWN]:
        submarine_rect.y += SUBMARINE_SPEED

    # Update trash movement
    for trash in trash_list:
        trash.y += TRASH_SPEED
        if trash.y > HEIGHT:
            trash.x = random.randint(0, WIDTH - TRASH_SIZE)
            trash.y = random.randint(-100, -TRASH_SIZE)

    # Check for collisions between the submarine and trash
    for trash in trash_list:
        if submarine_rect.colliderect(trash):
            trash_list.remove(trash)

    # Clear the screen
    screen.fill(WHITE)

    # Draw the submarine
    screen.blit(submarine_image, submarine_rect)

    # Draw the trash
    for trash in trash_list:
        pygame.draw.rect(screen, BLUE, trash)

    # Update the display
    pygame.display.update()

# Quit the game
pygame.quit()
