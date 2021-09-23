function checkForName(inputText) {
    let isCaptain = false;
    console.log('::: Running checkForName :::', inputText);
    let names = [
        'Picard',
        'Janeway',
        'Kirk',
        'Archer',
        'Georgiou'
    ];

    if (names.includes(inputText)) {
        console.log('Welcome, Captain!');
        isCaptain = true;
    }
    return isCaptain;
}

export { checkForName };
