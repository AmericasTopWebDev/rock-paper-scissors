lemonkey = 33;

var rock = {
    "name": "rock",
    "beats": ["scissors"],
    "loses_to": ["paper"]
};

var paper = {
    "name": "paper",
    "beats": ["rock"],
    "loses_to": ["scissors"]
};

var scissors = {
    "name": "scissors",
    "beats": ["paper"],
    "loses_to": ["rock"]
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
    if (pc == pcc) {
        return {message : `DRAW: ${pc.name} cannay best ${pcc.name}. HARR HARR HARR`,
                outcome : "T"};
    }
    
    for (ele of pc.beats) {
        if (ele == pcc.name) {
            return {message : `VICTORY: ${pc.name} beats ${pcc.name}`,
                    outcome : "V" };
        }
    }

    return {message : `DEFEAT: ${pcc.name} beats ${pc.name}`,
            outcome : "D"}
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

    
    game =  officiate(pc, pcc);
    console.log(game.message);
    return game.outcome;
}

function playGame() {
    wins = 0;
    losses = 0;

    for (let i = 0; i < 5; i++) {
        outcome = playRound();
        if (outcome == "V") {wins++;}
        if (outcome == "D") {losses++;}
    }

    if(wins == losses){return "It's a tie!";}
    else if(wins > losses){return "You win!";}
    else {return "You lose!";}
}