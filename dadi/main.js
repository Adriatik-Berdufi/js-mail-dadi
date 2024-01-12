const diceFace = [1,2,3,4,5,6];
let userScore = 0;
let computerScore = 0;
const play = document.getElementById("play");
const reset =document.getElementById("reset");
const score = document.getElementById("score") ;
const result = document.getElementById("result");
let startResult = "startResult";
// random 2 numeri 
//Play

// impostiamo un ciclo per 9 partite 
let partita = 0;
play.addEventListener('click' ,function(){

    if(partita < 3){
        let user = diceFace[Math.floor(Math.random() * 6)];
        console.log(user);
        console.log("VS");
        let computer = diceFace[Math.floor(Math.random() * 6)];
        console.log(computer);
        let results;
        

        // troviamo il piu grande 
        // assegnamo 1 punto al vincitore
        if(user > computer){
            
            results = "win";
            userScore ++;
            result.classList.replace("result", "win");

        }else if(user < computer){
            
            results = "lose";
            computerScore ++;
            
        }else{
            results = "drow";
        }
        console.log("startResult:", startResult);
        console.log("results:", results);
        result.classList.replace(`${startResult}`, `${results}`);

        startResult = results;
        console.log(startResult);
       
        
        partita ++;
        console.log(3 - partita);
        
        result.innerHTML = results;
        score.innerHTML = ` ${userScore} vs ${computerScore}`;
       
    }
    
        
});
reset.addEventListener('click' ,function(){
    partita = 0;
    userScore = 0;
    computerScore = 0;
    
    result.innerHTML = "Risultato";
    score.innerHTML = ` ${userScore} vs ${computerScore}`;
    

    
});

