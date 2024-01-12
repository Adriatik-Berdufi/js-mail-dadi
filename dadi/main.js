const diceFace = [1,2,3,4,5,6];
let userScore = 0;
let computerScore = 0;
const play = document.getElementById("play");
// random 2 numeri 
//Play

// impostiamo un ciclo per 9 partite 
let partita = 0;
play.addEventListener('click' ,function(){

    if(partita < 10){
        let user = diceFace[Math.floor(Math.random() * 6)];
        console.log(user);
        console.log("VS");
        let computer = diceFace[Math.floor(Math.random() * 6)];
        console.log(computer);
        // troviamo il piu grande 
        // assegnamo 1 punto al vincitore
        if(user > computer){
            console.log("You win");
            userScore ++;
            console.log(userScore);
        }else if(user < computer){
            console.log("You Lose");
            computerScore ++;
        }else{
            console.log("Drow");
        }
        console.log("RISULTATO FINALE")
        console.log(userScore);
        console.log(computerScore);
        partita ++;
    }

        
});


