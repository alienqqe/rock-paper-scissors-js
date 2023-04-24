let restart = document.getElementById('btn')
let container = document.getElementById('text')
let userChoice = prompt('rock, paper or scissors?')

 let computerChoice = Math.random();
    if(computerChoice < 0.34){
        computerChoice = 'rock';
    }   else if(computerChoice <= 0.67){
        computerChoice = 'scissors'
    }   else{
        computerChoice = 'paper'
    }

    console.log("Computer chooses: " + computerChoice);

   let compare = function(choice1, choice2){
        if (choice1 === choice2){
            
            return('Its tie!')

        }   else if(choice1 === 'rock') {
                if(choice2 === 'scissors') {
                    return('Rock wins' + '<br>' + 'You won!!')
                } else {
                    return('Paper wins' +'<br>'+ 'You lost:(((')
                }  
        }    else if(choice1 === 'paper'){
                if(choice2 === 'rock') {

                    return('Paper wins' +'<br>'+ 'You won!!')

                }   else {
                        return('Scissors wins' +'<br>'+ 'You lost:(((')
                }

        }   else if(choice1 === 'scissors'){
                if(choice2 === 'paper'){
                    return('Scissors wins' +'<br>'+ 'You won!!')
                }   else {
                    return('Rock wins!' +'<br>'+ 'You lost :((')
                }
        } else{
            return('Something went wrong')
        }
    };
    
    let gamerestart = restart.addEventListener('click', function playAgain(e) {
        Event.preventDefault;
    let userChoice2 = prompt('rock, paper or scissors?');
    let computerChoice2 = Math.random();
    if(computerChoice2 < 0.34){
        computerChoice2 = 'rock';
    }   else if(computerChoice <= 0.67){
        computerChoice2 = 'scissors'
    }   else{
        computerChoice2 = 'paper'
    }
        container.innerHTML = ('<p>' + compare(userChoice2,computerChoice2)  + '<br> Computer chooses: ' + computerChoice2 + '</p>');
        console.log(computerChoice2)
    });
    
   container.innerHTML += ('<p>' + compare(userChoice,computerChoice) + '<br>' +' Computer chooses: ' + computerChoice + '</p>');
  
  
    
