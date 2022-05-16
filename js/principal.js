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

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
        
    }

    else if (player.class == "Templario") {

        document.getElementById("imgTemplario").style.display = 'block'

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
    }

    else if (player.class == "Hechicero") {

        document.getElementById("imgHechicero").style.display = 'block'

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
    }
}

function enemyOrco() {

    // ORCO

    orco = {
        name: "Orco",
        class: "Orco",
        life: 65,
        strenght: 7,
        defense: 3,
    };
    
    localStorage.setItem("OrcoName", orco.name);
    localStorage.setItem("OrcoClass", orco.class);
    localStorage.setItem("OrcoLife", orco.life);
    localStorage.setItem("OrcoStrenght", orco.strenght);
    localStorage.setItem("OrcoDefense", orco.defense);

    text = "VIDA: " + orco.life + " FUERZA: " + orco.strenght + " DEFENSA: " + orco.defense;
    enemyStats.innerHTML = text;

    initialLifeOrco = orco.life;
    document.getElementById("imgDownBar").src="../img/enemies/orcoSmall.jpg"

}

function btnAttackOrco() {
    audio = document.querySelector(".audioAttack")
    audio.setAttribute("src", "../sounds/cut1.mp3")
    audio.play()

    heroLife = localStorage.getItem('HeroLife');
    heroStrenght = localStorage.getItem('HeroStrenght');
    heroDefense = localStorage.getItem('HeroDefense');

    heroLife = parseInt(heroLife);
    heroStrenght = parseInt(heroStrenght);
    heroDefense = parseInt(heroDefense);

    enemyLife = localStorage.getItem("OrcoLife", orco.life);
    enemyStrenght = localStorage.getItem("OrcoStrenght", orco.strenght);
    enemyDefense = localStorage.getItem("OrcoDefense", orco.defense);

    enemyLife = parseInt(enemyLife);
    enemyStrenght = parseInt(enemyStrenght);
    enemyDefense = parseInt(enemyDefense);

    var enemyRandomDice = Math.floor(Math.random()*(10-1))+1
    var heroRandomDice = Math.floor(Math.random()*(10-1))+1

    localStorage.setItem("HeroLife", heroLife + heroDefense - enemyStrenght - enemyRandomDice)
    localStorage.setItem("OrcoLife", enemyLife + enemyDefense - heroStrenght - heroRandomDice)

    enemyDamage = heroDefense - enemyStrenght - enemyRandomDice;
    heroDamage = enemyDefense - heroStrenght - heroRandomDice
    
    heroDicePath1.innerHTML = "Dado Héroe: " + heroRandomDice + " ---> Daño: " + heroDamage *-1;
    enemyDicePath1.innerHTML = "Dado Enemigo: " + enemyRandomDice + " ---> Daño: " + enemyDamage *-1;

    if (localStorage.getItem("HeroLife") <= 0) {
        
        localStorage.setItem("HeroLife", 1);
        localStorage.setItem("HeroStrenght", 0);
        localStorage.setItem("HeroDefense", 0);
        document.getElementById("top_bar").style.display = 'none'
        document.getElementById("paths").style.display = 'none'
        document.getElementById("death").style.display = 'flex'

        var text;
        text = "TODOS RECORDARÁN A " + localStorage.getItem('HeroName') + ", UN MARAVILLOSO " + localStorage.getItem('HeroClass') + " QUIEN DIO SU VIDA POR UNA GRAN AVENTURA" ;
        pjDeath.innerHTML = text;

        audio = document.querySelector(".audioDeath")
        audio.setAttribute("src", "../sounds/pjDeath.mp3")
        audio.play()

    }

    if (localStorage.getItem("OrcoLife") <= 0) {

        document.getElementById("path1").style.display = 'none'
        document.getElementById("path2").style.display = 'block'
        localStorage.setItem("OrcoLife", initialLifeOrco); //RESETEO VIDA DEL ENEMIGO PARA USARLO MAS TARDE

        audio = document.querySelector(".enemyOrcDeath")
        audio.setAttribute("src", "../sounds/enemyOrcDeath.mp3")
        audio.play()

        document.getElementById("down_bar").style.display = 'none'
    }

    var textPlayer;

    textPlayer = "VIDA: " + localStorage.getItem('HeroLife') + " FUERZA: " + localStorage.getItem('HeroStrenght') + " DEFENSA: " + localStorage.getItem('HeroDefense');
    pjStats.innerHTML = textPlayer;
   
    var textEnemy;

    textEnemy = "VIDA: " + localStorage.getItem('OrcoLife') + " FUERZA: " + enemyStrenght + " DEFENSA: " + enemyDefense;
    enemyStats.innerHTML = textEnemy;


}

function btnRestartGame() {
    if (confirm("¿Estás seguro que querés reiniciar tu aventura?")) {

        localStorage.setItem("HeroLife", 1);
        localStorage.setItem("HeroStrenght", 0);
        localStorage.setItem("HeroDefense", 0);
        document.getElementById("top_bar").style.display = 'none'
        document.getElementById("paths").style.display = 'none'
        document.getElementById("surrender").style.display = 'flex'

        var text;
        text = "TODOS RECORDARÁN A " + localStorage.getItem('HeroName') + " COMO UN COBARDE !!! UN PEQUEÑO " + localStorage.getItem('HeroClass') + " QUE NO SUPO COMO AFRONTAR UNA AVENTURA";
        pjSurrender.innerHTML = text;

        audio = document.querySelector(".audioDeath")
        audio.setAttribute("src", "../sounds/pjSurrender.mp3")
        audio.play()

    } else {
    }
}