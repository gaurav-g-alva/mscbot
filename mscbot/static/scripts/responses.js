function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello bupender jogi here!";
    } else if (input == "bye") {
        return "bhaag Bsdk";
    } else {
        return "your time's up go back and come later";
    }
}