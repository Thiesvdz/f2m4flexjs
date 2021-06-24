let getalA,getalB,antwoord,jouwAntwoord,goedFout; 

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const container = document.getElementById('container');
const uitleg = document.getElementsByClassName('uitleg');

sound = new Audio();
sound.src = "media/Nice.mp3";

sound2 = new Audio();
sound2.src = "media/Wrong.wav";



maakOpgave();
function maakOpgave(){
    getalA = Math.floor(Math.random()* 10) + 1;
    getalB = Math.floor(Math.random()* 10) + 1;
    antwoord = getalA * getalB;
    input1.focus();
    opgaveblad.innerHTML = getalA + " x " + getalB;
    uitleg.innerHTML = "hallo"
}

// execButton.addEventListener('click',checkAntwoord);

input1.addEventListener('keydown', checkAntwoord);


function checkAntwoord(evt){
    if(evt.key == "Enter"){
    jouwAntwoord = input1.value;
    if(antwoord == jouwAntwoord){
        goedFout = true;
        container.style.background = "green";
        opgaveblad.innerHTML = "Goedzo!";
        sound.play();
    }
    else{
        goedFout = false;
        container.style.background = "red";
        opgaveblad.innerHTML = "Oei die is fout!";
        opgaveblad.style.color = "White";
        sound2.play();
    }
    console.log(goedFout);
    setTimeout(wachten, 2000);
}
}

function wachten(){
    container.style.background = "white";
    input1.value = "";
    input1.focus();
    maakOpgave();
    opgaveblad.style.color = "black";
    sound.stop();
}
