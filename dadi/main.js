// pre partita 
const start = document.getElementById("start");
const divInizio = document.getElementById("divInizio");

const inizioPartita = document.getElementById("inizioPartita");
const finePartita = document.getElementById("finePartita");
// Durante la partita
const diceUser = document.getElementById("diceUser");
const diceComputer = document.getElementById("diceComputer");
const play = document.getElementById("play");
const reset =document.getElementById("reset");
const score = document.getElementById("score") ;
const result = document.getElementById("result");
// La Bella
const laBellaSection = document.getElementById("laBellaSection");
const laBella = document.getElementById("laBella");


// array valori dado
const diceFace = [1,2,3,4,5,6];

// variabili score
let userScore = 0;
let computerScore = 0;

// variabile per mod il contenuto del div per il risultato di ogni lancio
let startResult = "startResult";

// variabile inizio conteggio lanci 
let partita = 0;
let nrRoundGames;


//Settings partita
start.addEventListener('click', function(){
    const nrRound =parseInt( document.getElementById("nrRound").value);
    divInizio.classList.add("d-none");
    inizioPartita.classList.replace("d-none", "d-block");
    nrRoundGames = nrRound;
    
})


//pulsante in ascolto per iniziare le partita e lanciare i dadi
play.addEventListener('click' ,function(){

    //logica gioco
    if(partita < nrRoundGames){
        
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


        // logica per stampare il risultto finale 
        if(partita === nrRoundGames){

            let finalResul;

            inizioPartita.classList.replace("d-block", "d-none");
            finePartita.classList.replace("d-none", "d-block");


            if(userScore > computerScore){
                finalResul = `
                <h1 class="display-1">You Win!!!</h1>
                `
                finePartita.innerHTML += finalResul;
                finePartita.classList.add("win");

            }else if(userScore < computerScore){
                finalResul = `
                <h1 class="display-1">You Lose!!!</h1>
                `
                finePartita.innerHTML += finalResul;
                finePartita.classList.add("lose"); 
                
            }else{
                laBellaSection.classList.remove("d-none");
                finalResul = `
                <h1 class="display-1">Drow!!!</h1>
                `
                finePartita.innerHTML += finalResul;
                finePartita.classList.add("drow");   
                
            };
        };
       
    };
    
    
   
});


//pulsante in ascolto per azzerare la partita
reset.addEventListener('click' ,function(){
    partita = 0;
    userScore = 0;
    userScore = 0; 
    result.innerHTML = "Risultato";
    score.innerHTML = ` ${userScore} vs ${computerScore}`;

});
// pulsante in ascolto per la bella 50% e 50%
laBella.addEventListener('click',function(){
    
    user = diceFace[Math.floor(Math.random() * 2)];
    for(i=0;i<=1;i++){
          
        if(user > 1 ){
            finalResul = `
                <h1 class="display-1">You Win!!!</h1>
                `
                finePartita.innerHTML = finalResul;
                finePartita.classList.replace("drow", "win");
                laBellaSection.classList.add("d-none");
                

        }else if(user < 1 ){
            finalResul = `
                <h1 class="display-1">You Lose!!!</h1>
                `
                finePartita.innerHTML = finalResul;
                finePartita.classList.replace("drow","lose");
                laBellaSection.classList.add("d-none"); 
        };
        
    };
    


});


