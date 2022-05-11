// -------------------------------------- ORCO --------------------------------------
function enemies() {
    orco = {
        name: "Orco",
        class: "Orco",
        life: 65,
        strenght: 4,
        defense: 2,
    };

    parseInt(orco.life)
    parseInt(orco.strenght)
    parseInt(orco.defense)

    localStorage.setItem("OrcoName", orco.name);
    localStorage.setItem("OrcoClass", orco.class);
    localStorage.setItem("OrcoLife", orco.life);
    localStorage.setItem("OrcoStrenght", orco.strenght);
    localStorage.setItem("OrcoDefense", orco.defense);

    text = "VIDA: " + orco.life + " FUERZA: " + orco.strenght + " DEFENSA: " + orco.defense;
    console.log(text)
    enemyStats.innerHTML = text;
}
