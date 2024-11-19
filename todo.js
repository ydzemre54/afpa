const maListe = document.getElementById("ma-liste");
const monInput = document.getElementById("mon-input");
let listeDeTaches = [];
const monBouton = document.getElementById("mon-bouton")
const monFiltre = document.getElementById("filtre")
let compteur = 0;

const cleLocalStorage = "todo-list"



function afficherTaches() {
    const filter = monFiltre.selectedIndex
    maListe.innerHTML = ""
    for (let i = 0; i < listeDeTaches.length; i++) {
        const tacheActuelle = listeDeTaches[i];

        if (filter === 0) {
            affTache(tacheActuelle);
        } else if (filter === 1) {
            if (tacheActuelle.termine === true) {
                affTache(tacheActuelle);
                
            }
        } else {
            if (tacheActuelle.termine === false) {
                affTache(tacheActuelle);
            }
        }
    }
}
/**
 * 
 * @param {Objet} tacheParam 
 */


function affTache(tacheParam) {
    //console.log(tacheParam);

    const tacheID = tacheParam.identifiant;
    const tacheLi = document.createElement("li");
    const tacheInput = document.createElement("input");
    const tacheLabel = document.createElement("label");
    const tacheBouton = document.createElement("button");

    tacheLi.setAttribute("data-tache-id", tacheID);
    tacheInput.setAttribute("type", "checkbox");
    tacheInput.setAttribute("id", "tache-" + tacheID);
    tacheInput.checked = tacheParam.termine;
    tacheLabel.setAttribute("for", "tache-" + tacheID);
    tacheLabel.textContent = tacheParam.titre;
    monInput.value = ""
    tacheBouton.textContent = "supprimer";

    maListe.appendChild(tacheLi);
    tacheLi.appendChild(tacheInput);
    tacheLi.appendChild(tacheLabel);
    tacheLi.appendChild(tacheBouton);

}



function ajouterTache(event) {
    const newTask = {
        identifiant: compteur++,
        titre: monInput.value,
        termine: false
    };
    monInput.value = "";
    listeDeTaches.push(newTask);
    // affTache();
    afficherTaches();
    sauverTache() 
};

monBouton.addEventListener("click", ajouterTache)

function supprTache(event) {
    if (event.target.tagName === "BUTTON") {
        const tacheID = event.target.parentNode.dataset.tacheId;
        const tacheIndex = listeDeTaches.findIndex((tache) => tache.identifiant == tacheID);
        listeDeTaches.splice(tacheIndex, 1)
        afficherTaches()
        sauverTache() 
    }
}

function changerStatus(event) {

    const tacheID = event.target.parentNode.dataset.tacheId;
    const tacheIndex = listeDeTaches.findIndex((tache) => tache.identifiant == tacheID);
    const tacheActive = listeDeTaches[tacheIndex];
    tacheActive.termine = event.target.checked;
    sauverTache() 
}

function filtrerTache(event) {
    afficherTaches()
}


function chargerTache() {
    const sauvegarder = localStorage.getItem(cleLocalStorage);
    const taches = JSON.parse(sauvegarder);
    return taches;
}

function sauverTache() {
    const string= JSON.stringify(listeDeTaches);
    localStorage.setItem(cleLocalStorage, string);
}

monFiltre.addEventListener("change", filtrerTache);
maListe.addEventListener("change", changerStatus);
maListe.addEventListener("click", supprTache);
monInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter"){ ajouterTache(); }
});

