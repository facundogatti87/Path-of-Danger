// -------------------------------------- ORCO --------------------------------------

orco = {
    name: "Orco",
    class: "Orco",
    life: 45,
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

