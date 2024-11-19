if (filter === 0){
    affTache(tacheActuelle);
} else if (filter === 1){
    if (tacheActuelle.termine === true){
        affTache(tacheActuelle);
    }
} else { 
    if (tacheActuelle.termine === false){
        affTache(tacheActuelle);
    }
}