function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    num = Math.floor(Math.random() * 3);
    return choices[num];
}