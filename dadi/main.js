// elementi Html
const diceUser = document.getElementById("diceUser");
const diceComputer = document.getElementById("diceComputer");
const play = document.getElementById("play");
const reset =document.getElementById("reset");
const score = document.getElementById("score") ;
const result = document.getElementById("result");

// array valori dado
const diceFace = [1,2,3,4,5,6];

// variabili score
let userScore = 0;
let computerScore = 0;

// variabile per mod il contenuto del div per il risultato di ogni lancio
let startResult = "startResult";

// variabile inizio conteggio lanci 
let partita = 0;

//pulsante in ascolto per iniziare le partita e lanciare i dadi
play.addEventListener('click' ,function(){

    //logica gioco
    if(partita < 3){

        // dado random per user 
        let user = diceFace[Math.floor(Math.random() * 6)];

        // aggiungi el in html
        let dice = `
            <i class="bi bi-dice-${user}-fill dado dado-user"></i>
        `
        diceUser.innerHTML = dice;

       // dado random per computer
        let computer = diceFace[Math.floor(Math.random() * 6)];

        // aggiungi el in html
         dice = `
            <i class="bi bi-dice-${computer}-fill dado dado-computer"></i>
        `
        diceComputer.innerHTML = dice;

        //variabile per cambiare la classe per il risultato win, lose or drow
        let results;
        

        // troviamo il piu grande 
        
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
        //replace classe win lose or drow
        result.classList.replace(`${startResult}`, `${results}`);
        startResult = results;

        // assegnamo 1 punto al vincitore
        partita ++;

        // agginge el htm result
        result.innerHTML = results;
        score.innerHTML = ` ${userScore} vs ${computerScore}`;
       
    }
    
        
});

//pulsante in ascolto per azzerare la partita
reset.addEventListener('click' ,function(){
    partita = 0;
    userScore = 0;
    computerScore = 0; 
    result.innerHTML = "Risultato";
    score.innerHTML = ` ${userScore} vs ${computerScore}`;

});

