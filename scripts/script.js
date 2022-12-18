// let computer_choice = computer_choice();
// let human_choice = human_choice();

function game(){

    function computer_choice(){
        let choice = '';
        let random = Math.floor(Math.random() * 3);
        if (random === 0){
            choice = 'rock';
        }else if (random === 1){
            choice = 'paper';
        }else{
            choice = 'scissors';
        }
    
        return choice;
    }

    function human_choice(){
        let choice = prompt("Enter rock, paper or scissors").toLowerCase();
        return choice;
    }

    function calculate_winner(computer, human){
        if (computer === 'rock' && human === 'rock'){
            return 'Its a Tie!';
        }else if (computer === 'paper' && human === 'paper'){
            return 'Its a Tie!';
        }else if (computer === 'scissors' && human === 'scissors'){
            return 'Its a Tie!';
        }else if (computer === 'rock' && human === 'paper'){
            return 'human'
        }else if (computer === 'paper' && human === 'rock'){
            return 'computer';
        }else if (computer === 'scissors' && human === 'paper'){
            return 'computer';
        }else if (computer === 'paper' && human === 'scissors'){
            return 'human';
        }else if (computer === 'scissors' && human === 'rock'){
            return 'human';
        }else if (computer === 'rock' && human === 'scissors'){
            return 'computer';
        }
    }

    let computer_score = 0;
    let human_score = 0;

    for (let x = 0; x < 6; x++){
        computer = computer_choice();
        human = human_choice();
        
        score = calculate_winner(computer, human);
        if (score === 'human'){
            human_score += 10;
        }else{
            computer_score += 10;
        }        
    }

    console.log(`Human Score: ${human_score}`);
    console.log(`Computer SCore: ${computer_score}`);
}

game();




