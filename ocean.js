/* Styling for the game container */
#game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #87CEEB; /* Light blue for the ocean */
}

/* Styling for the game screen */
#game-screen {
    position: relative;
    width: 800px; /* Adjust the dimensions as needed */
    height: 400px;
}

/* Styling for the ocean background */
#ocean-bg {
    width: 100%;
    height: 100%;
}

/* Styling for the sea turtle */
#sea-turtle {
    position: absolute;
    left: 50%; /* Position the turtle in the center */
    bottom: 10px;
    transform: translateX(-50%);
    width: 100px; /* Adjust the dimensions as needed */
}

/* Styling for the user interface */
#user-interface {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

/* Styling for the rescue button */
#rescue-button {
    background-color: #FFA726; /* Orange button */
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 18px;
}
