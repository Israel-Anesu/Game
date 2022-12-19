// let computer_choice = computer_choice();
// let human_choice = human_choice();

function game(){
    function human_choice(){
        let btns = document.querySelectorAll('button');
        btns.forEach((e) => {
            e.addEventListener('click', () => {
            let text = e.textContent;
            console.log(text);
        })
    })
    }
    

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

    // function human_choice(){
    //     let choice = prompt("Enter rock, paper or scissors").toLowerCase();
    //     return choice;
    // }

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
    computer = computer_choice();
    human = human_choice();

    let points = {
        human_score: 0,
        computer_score: 0
    };
    
    score = calculate_winner(computer, human);
    if (score === 'human'){
        points[human_score] = 10;
    }else{
        points[computer_score] = 10;
    }

    return points
}

scores = game();



let score_sheet = document.querySelector('div');
score_sheet.innerHTML = `Computer Score: ${scores[computer_score]} Human Score: ${scores[human_score]}`;




