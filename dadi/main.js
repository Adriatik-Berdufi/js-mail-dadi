const diceFace = [1,2,3,4,5,6];
let userScore = 0;
let computerScore = 0;
// random 2 numeri 


// impostiamo un ciclo per 9 partite 
for(i = 10; i > 0;i--){
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
    }else if(user < computer){
        console.log("You Lose");
        computerScore ++;
    }else{
        console.log("Drow");
    }
   
}
console.log("RISULTATO FINALE")
console.log(userScore);
console.log(computerScore);
