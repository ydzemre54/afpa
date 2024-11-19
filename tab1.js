let pers = ["samuel","Karim","Nadia","Catherine","Kevin","Laetitia","Djamina","Vincent","Sacha",]
console.log("Nombre de personnes : " + pers.length)

pers.push("Pierre")
console.log("Nombre de personnes apres ajout : " + pers.length)

let perso = pers.shift()
console.log("suppression de : " + perso)
console.log("Nombre de personnes apres suppression: " + pers.length)

let pos = pers.indexOf("Kevin")
pers [pos] = "Kévin"
console.log("Kevin est modifié par : " + pers[pos])

let pos1 = pers.indexOf("Vincent")
let suppr = pers.splice(pos1, 1)
console.log("l'élément Vincent a été supprimé")
console.log("Nombre de personnes après nouvelle suppression : " + pers.length)

for (let i = 0; i < pers.length; i++) {
    console.log(pers[i] + " à la position " + i)
    
}

