const listaMail = [
    'alice.smith@example.com',
    'bob.jones@example.com',
    'charlie.wilson@example.com',
    'david.miller@example.com',
    'emily.brown@example.com',
    'frank.collins@example.com',
    'grace.anderson@example.com',
    'henry.davis@example.com',
    'isabel.evans@example.com',
    'jack.fisher@example.com',
    'katherine.green@example.com',
    'leo.harris@example.com',
    'maya.irwin@example.com',
    'nathan.jackson@example.com',
    'olivia.king@example.com',
    'peter.lane@example.com',
    'quinn.morris@example.com',
    'rachel.nelson@example.com',
    'samuel.owens@example.com',
    'taylor.parker@example.com',
    'ursula.quinn@example.com',
    'victor.roberts@example.com',
    'wendy.smith@example.com',
    'xander.taylor@example.com',
    'yvonne.upton@example.com',
    'zachary.vaughn@example.com',
    'amelia.walker@example.com',
    'benjamin.young@example.com',
    'clara.zimmerman@example.com',
    'dylan.anderson@example.com',
    'ella.baker@example.com',
    'felix.chapman@example.com',
    'gabriella.dixon@example.com',
    'harrison.edwards@example.com',
    'isabella.ford@example.com',
    'jacob.gordon@example.com',
    'katie.harper@example.com',
    'liam.ingram@example.com',
    'mia.jenkins@example.com',
    'nolan.knight@example.com',
    'olivia.lucas@example.com',
    'parker.morgan@example.com',
    'quincy.nelson@example.com',
    'riley.owens@example.com',
    'samantha.perry@example.com',
    'tyler.quinn@example.com',
    'utah.richards@example.com',
    'violet.stewart@example.com',
    'wyatt.turner@example.com',
    'xena.upton@example.com',
    'yasmine.vance@example.com',
    'zane.watson@example.com'
  ];


  
 const mailToCeck = document.getElementById("mailToCeck");
 const ceck = document.getElementById("ceck");
 const conferma = document.getElementById("conferma");

 ceck.addEventListener('click',function(){
    const user = mailToCeck.value;
    for(i = 0; i < listaMail.length ;i++ ){
      if (listaMail[i] == user){
        conferma.innerHTML = `
        
        <div class="green p-3 fs-1">
        <div class="green p-3">Benvenuto!!!</div>
          <div class="green p-3">${user}</div>
          <a href="../dadi/index.html">Dice Game</a> 
        </div>
        
        

              `;
        break;
        //document.location.href = url;
      }else{
        conferma.innerHTML = `
        <div class="red p-3">${user}</div>
        <div class="red p-3 fs-1">Non e consentito l'accesso!!!</div>

              `;
      } 
      

    }
    
    

 })
  