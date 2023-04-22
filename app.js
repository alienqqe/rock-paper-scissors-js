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
        }
    };




    document.write(compare(userChoice,computerChoice))
    document.write('<br>' + "Computer chooses: " + computerChoice);