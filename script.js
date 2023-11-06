/*// révupérer un élement par son id 
let baliseTableau = document.getElementById("premier");
console.log(baliseTableau);
// récupération d'un élément suivant le selecteur css 
let baliseSyntaxeCSS = document.querySelector("#premier input");
console.log(baliseSyntaxeCSS);
// récupérer tous les élements suivant le selecteur css
let toutesBaliseCSS = document.querySelectorAll("#premier input");
console.log(toutesBaliseCSS);
// affichage des élements quand le queryselectorall 
for(let i = 0; i < toutesBaliseCSS.length; i++){
    console.log(toutesBaliseCSS[i]);
    if(toutesBaliseCSS[i].checked){
        console.log("est checké");
    }
}

//selection des éléméents et modification des attributs 

let valeurInput = document.getElementById("valeur");
let boutonInput = document.getElementById("validation");

let zoneText = document.querySelector(".zoneText");
let zoneScore = document.querySelector(".zoneScore span");

zoneText.setAttribute("id", "unNouvelId");
zoneText.classList.add("uneNouvelleClasse");
zoneText.classList.add("uneDeuxiemeClasse");
zoneText.classList.remove("uneDeuxiemeClasse");

let choix = document.querySelectorAll(".zoneOption input");

console.log(valeurInput);
console.log(boutonInput);
console.log(zoneText);
console.log(zoneScore);
console.log(choix);

//création de nouvel élément html

// on créer l'élément dans javascript 
let nouvelElement = document.createElement("div");

// puis on l'insère dans le DOM avec appendChild
let parentElement = document.getElementById("premier");
nouvelElement.classList.add("uneClasse");
nouvelElement.textContent = "un text banal";
parentElement.appendChild(nouvelElement);

// une autre methode plus facile pour ajouter plusiers elements
let contenuTitre = "AzerType 2";
let contenuParagraphe = "Une version améliorée du premier jeux";
let classToAdd = "carte";

let div = `
        <div class="${classToAdd}">
            <h1>${contenuTitre}</h1>
            <p>${contenuParagraphe}</p>
        </div>
    `; // les backtickt "`" (altgr + 7) est obligatoir pour l'interpolation ...

let main = document.querySelector("main");
main.innerHTML += div; // si on met juste = le contenu déjà présent sera supprimé ... 

// la programmation evenementielle 

document.addEventListener('keypress', (event) => {
    console.log(event)
});

document.addEventListener('click', (event) => {
    console.log(event)
});
*/

if (document.getElementById("mots").checked){
    let textAvisualiser = document.querySelector(".zoneText");
    textAvisualiser.innerHTML = listeDeMots[currentValue];
    type = "mots";
}
else{
    let textAvisualiser = document.querySelector(".zoneText");
    textAvisualiser.innerHTML = listeDePhrases[currentValue];
    type = "phrases";
}

let boutonInput = document.getElementById("validation")
boutonInput.addEventListener("click", () => {
    let textSaisi = document.getElementById("valeur");
    jeu(textSaisi.value,type);
});

document.addEventListener("keypress", (event) => {
    console.log(event.key)
    if(event.key == "Enter"){
        let textSaisi = document.getElementById("valeur");
        jeu(textSaisi.value,type);
    }
})


let inputOption = document.querySelectorAll('input[name="type"]');
for(let j = 0; j < inputOption.length; j++){
    inputOption[j].addEventListener("change" , ()=>{
        let valeurOption= "";
        for(let i = 0; i < inputOption.length; i++){
            if(inputOption[i].checked){
                valeurOption = inputOption[i].value;
            }
        }
        //console.log(valeurOption)
        //console.log(type)
        if(type !== valeurOption){
            type = valeurOption;
            resetJeu(type);
            //console.log("changement");
        }
        //console.log("--------------------")
    })
}

const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    const nom = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value;

    if(nom ===""){
        console.log("le champ nom est vide")
    }
    else{
        console.log("le champ nom est rempli")
    }
    console.log(nom);
    console.log(email);

})

const baliseNom = document.getElementById("name");
baliseNom.addEventListener('change', (event)=>{
    const valeurNom = event.target.value.trim();
    if(valeurNom === ""){
        console.log("le champ nom est vide");
    }
    else{
        console.log("le champ nom est rempli");
    }
})

const baliseemail = document.getElementById("email");
baliseemail.addEventListener('change', (event)=>{
    const valeurEmail = event.target.value;
    console.log(valeurEmail)
    let regex = new RegExp("^[a-zA-Z]+[a-zA-Z0-9._-]{8,20}@[a-zA-Z0-9._-]{5,15}\.[a-z]{2,3}");
    let resultat = regex.test(valeurEmail);
    console.log(resultat);
})

try {
    let recettes = 500
    let nbPlaceVendue = 50
    let prixPlace = nbPlaceVendue / recettes
    console.log(placePrix)
} catch (erreur) {
    console.log("Une erreur est survenue" + erreur.message);
}
/*
let inputOptionun = document.getElementById("mots")
inputOptionun.addEventListener("click", () => {
        type = "mots";
        //console.log("mots checked");
        resetJeu(type);
});


let inputOptionautre = document.getElementById("phrases")
inputOptionautre.addEventListener("click", () => {
        type = "phrases";
        //console.log("phtrases checked");
        resetJeu(type);
});

let baliseLi = document.querySelector(".zoneScore"); 
baliseLi.addEventListener("click", function () {
    baliseLi.classList.toggle("selected");  
});
*/