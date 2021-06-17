let getalA,getalB,antwoord,jouwAntwoord,goedFout; 

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const container = document.getElementById('container');

maakOpgave();
function maakOpgave(){
    getalA = Math.floor(Math.random()* 10) + 1;
    getalB = Math.floor(Math.random()* 10) + 1;
    antwoord = getalA * getalB;

    opgaveblad.innerHTML = getalA + " x " + getalB;
}

execButton.addEventListener('click',checkAntwoord);

function checkAntwoord(){
    jouwAntwoord = input1.value;
    if(antwoord == jouwAntwoord){
        goedFout = true;
        container.style.background = "green";
        opgaveblad.innerHTML = "Goedzo!";
        
    }
    else{
        goedFout = false;
        container.style.background = "red";
        opgaveblad.innerHTML = "Oei die is fout!";
        opgaveblad.style.color = "White";
    }
    console.log(goedFout);
    setTimeout(wachten, 2000);
}

function wachten(){
    container.style.background = "white";
    input1.value = "";
    input1.focus();
    maakOpgave();
    opgaveblad.style.color = "black";
}
