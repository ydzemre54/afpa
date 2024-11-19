function triBulle(tab) {
    let permut;
    let trier;
    do {
        trier = false;
        for (let i = 0; i < 10; i++) {
            if (tab[i] > tab[i + 1]) {
                trier = true;
                permut = tab[i]
                tab[i] = tab[i + 1]
                tab[i + 1] = permut
            }
        }
    } while (trier === true);
    return tab;
}

function TriSelec(tab) {
    
}

let tabTrie = [];

for (let i = 0; i < 10; i++) {
    tabTrie.push(Math.round(Math.random() * 100))
}

let resultat = triBulle(tabTrie);
console.log(resultat);
