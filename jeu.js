function verification(valeurSoumise, typeJeu){
    if(typeJeu === "mots"){
        //console.log("ici")
        //console.log(valeurSoumise === listeDeMots[currentValue])
        if(valeurSoumise == listeDeMots[currentValue]){
            score += 1;
        }
    }
    else 
    {
        if(valeurSoumise == listeDePhrases[currentValue]){
            score+=1;
        }
    }
    //console.log(valeurSoumise);
    //console.log(listeDeMots[currentValue]);
    currentValue +=1;
    
}

function resetJeu(typeJeu){
    score = 0 ;
    currentValue = 0;
    let zoneSaisie = document.getElementById("valeur")
    if(zoneSaisie.disabled){
    zoneSaisie.toggleAttribute("disabled")
    }
    let bouttonSaisie = document.getElementById("validation");
    if (bouttonSaisie.disabled){
    bouttonSaisie.toggleAttribute("disabled")
    }
    update(typeJeu);
}

function deactivateGame(){
    let zoneSaisie = document.getElementById("valeur")
    zoneSaisie.toggleAttribute("disabled")
    //zoneSaisie.setAttribute("disabled","disabled");
    let bouttonSaisie = document.getElementById("validation");
    bouttonSaisie.toggleAttribute("disabled")
    //bouttonSaisie.setAttribute("disabled", "disabled");
}

function isEnd(typeJeu){
    switch(typeJeu){
        case "mots":
            if(currentValue === listeDeMots.length){
                deactivateGame();
                return true;
            }
            break;
            
        case "phrases":
            if(currentValue === listeDePhrases.length){
                deactivateGame();
                return true;
            }
            break;
        default:
            break;
    }
    return false;
}

function update(typeJeu){
    let textZone = document.querySelector(".zoneText");
    if(typeJeu === "mots"){
        textZone.innerHTML = listeDeMots[currentValue];
    }
    else{
        textZone.innerHTML = listeDePhrases[currentValue];
    }
    let scoreActuel = document.querySelector(".zoneScore span");
    scoreActuel.innerHTML = score;
}

function jeu (valeurSoumise, typeJeu) {

    verification(valeurSoumise, typeJeu);

    let isEnded = isEnd(typeJeu);

    //console.log(isEnded)
    //console.log(currentValue)
    if (!isEnded){
        update(typeJeu);
    }


}