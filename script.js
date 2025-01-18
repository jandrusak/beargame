function makeChoice(choice) {
    const storyElement = document.getElementById('story');
    if (choice === 'left') {
        storyElement.innerText = 'You turned left and safely found a hidden path leading to safety. You escaped the bear!';
    } else if (choice === 'right') {
        storyElement.innerText = 'You turned right and unfortunately fell off the cliff. Better luck next time!';
    }
}
