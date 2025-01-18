let currentStage = 0;

function processUserInput() {
    const userInput = document.getElementById('userInputText').value.toLowerCase();
    const textOutput = document.getElementById('textOutput');
    if (currentStage === 0) {
        if (userInput === "left") {
            textOutput.innerHTML = 'Great turn! Lefties often adapt quickly to seeing underwater..<br>' +
            'Now you just arrived at a lake. Conveniently there is a log next to you..<br>' +
            'Would you like to ride the log across the lake, or swim? Type "Log" or "Swim"';
            currentStage = 1;
        } else {
            textOutput.innerHTML = "Congratula.... Oops..The bear was waiting right around the corner.. GAME OVER";
            showBear();
        }
    } else if (currentStage === 1) {
        if (userInput === "swim") {
            textOutput.innerHTML = 'You successfully swam across the lake. After getting out, you stumble across a shelter..<br>' +
            'There is no one in sight - Just a large shotgun with ammo!<br>' +
            'Would you like to pick it up to use for your protection? Type "Yes" or "No"';
            currentStage = 2;
        } else {
            textOutput.innerHTML = '"Snap!" You hear the back of the log crack.. You took too long to pick up the log..<br>' +
            'The bear smashed it and is hovering over you.. Say goodnight..GAME OVER';
            showBear();
        }
    } else if (currentStage === 2) {
        if (userInput === "yes") {
            textOutput.innerHTML = "As you grasped the shotgun, a deafening growl shattered the silence.<br>" +
            "You spin around, only to see the bear, soaking wet from the swim, charging at you, fury in its eyes.<br>" +
            "There was no time to flee or load the shotgun as it pounced, " +
            "its powerful jaws sealing your fate in an instant....GAME OVER...";
            showBear();
        } else {
            textOutput.innerHTML = "Risky move.. You keep running..<br>" +
            "Suddenly, a park ranger's truck roared up your path, " +
            "its bright lights and loud horn scared the bear away.<br>" +
            "You hop in and make it to safety! WINNER!";
        }
    }
    document.getElementById('userInputText').value = ''; // Clear input field
}

function showBear() {
    const bear = document.getElementById('bear');
    bear.style.display = 'block';
}
