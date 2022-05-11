player = {
    name: localStorage.getItem('HeroName'),
    class: localStorage.getItem('HeroClass'),
    life: localStorage.getItem('HeroLife'),
    strenght: localStorage.getItem('HeroStrenght'),
    defense: localStorage.getItem('HeroDefense')
}

function Pj() {

    if (player.class == "Berserker") {
        document.getElementById("imgBerserker").style.display = 'block'
        document.getElementById("imgTemplario").style.display = 'none'
        document.getElementById("imgHechicero").style.display = 'none'

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
        
    }

    else if (player.class == "Templario") {
        document.getElementById("imgBerserker").style.display = 'none'
        document.getElementById("imgTemplario").style.display = 'block'
        document.getElementById("imgHechicero").style.display = 'none'

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
    }

    else if (player.class == "Hechicero") {
        document.getElementById("imgBerserker").style.display = 'none'
        document.getElementById("imgTemplario").style.display = 'none'
        document.getElementById("imgHechicero").style.display = 'block'

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
    }
}

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
    enemyStats.innerHTML = text;
}

function btnRestartGame() {
    if (confirm("¿Estás seguro que querés reiniciar tu aventura?")) {

        pjName = localStorage.getItem("HeroName", player.name);
        pjClass = localStorage.getItem("HeroClass", player.class);
        parseInt(localStorage.setItem("HeroLife", 1));
        localStorage.setItem("HeroStrenght", player.strenght);
        localStorage.setItem("HeroDefense", player.defense);
        document.getElementById("down_bar").style.display = 'none'
        document.getElementById("top_bar").style.display = 'none'
        document.getElementById("surrender").style.display = 'flex'
        document.getElementById("path1").style.display = 'none'

        var text;
        text = "TODOS RECORDARÁN A " + pjName + " COMO UN COBARDE !!! UN PEQUEÑO " + player.class + " QUE NO SUPO COMO AFRONTAR UNA AVENTURA";
        pjSurrender.innerHTML = text;

    } else {

    }
}

function btnAttack() {

    player.life = player.life - orco.strenght
    orco.life = orco.life - player.strenght


    if (player.life <= 0) {
        alert("PERDISTE");
    }

    if (orco.life <= 0) {
        alert("GANASTE");
    }
    
    var textPlayer;

    textPlayer = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
    pjStats.innerHTML = textPlayer;

    var textEnemy;

    textEnemy = "VIDA: " + orco.life + " FUERZA: " + orco.strenght + " DEFENSA: " + orco.defense;
    enemyStats.innerHTML = textEnemy;

}
