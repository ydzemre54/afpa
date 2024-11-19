let age;
let sexe;
let boutonV = document.getElementById("bouton-valider");
let boutonR = document.getElementById("bouton-reini").value;
let reponse = document.getElementById("reponse");

function verifImpot() {
    age = document.getElementById("age-saisi").value
    sexe = document.getElementById("sexe-saisi").value

    if (sexe == "H" && age >= 20) {
        reponse.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable!</div>'

    } else if (sexe == "F" && age >= 18 && age <= 35) {
        reponse.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable!</div>'
    } else{
        reponse.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes non-imposable!</div>'
    }

}

function reini() {
    document.getElementById("formulaire").reset();
}

boutonV.addEventListener("click", verifImpot)
boutonR.addEventListener("click", reini)
