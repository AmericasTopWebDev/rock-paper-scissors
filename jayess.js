lemonkey = 33;

var rock = {
    name: "rock",
    beats: [scissors],
    loses_to: [paper]
};

var paper = {
    name: "paper",
    beats: [rock],
    loses_to: [scissors]
};

var scissors = {
    name: "scissors",
    beats: [paper],
    loses_to: [rock]
};

var choices = [rock, paper, scissors];

function getObj (name) {
    for (var ele of choices) {
        if (name == ele.name) {
            return ele
        }
    }
    throw new Error('Ya spelled something wrong');
}

function officiate(pc, pcc) {
    if (pc == pcc) {return `DRAW: ${pc.name} cannay best ${pcc.name}. HARR HARR HARR`}
    
    for (var ele of pc.beats) {
        if (ele == pcc) {
            return `VICTORY: ${pc.name} beats ${pcc.name}`
        }
    }

    return `DEFEAT: ${pcc.name} beats ${pc.name}`
}

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getPlayerChoice() {
    input =  prompt("Choose Yer Option");
    input = input.toLowerCase();
    return getObj(input);
}

function playRound() {
    pc = getPlayerChoice();
    pcc = getComputerChoice();

    return officiate(pc, pcc);
}