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

    else if (player.class == "Campesino") {

        document.getElementById("imgCampesino").style.display = 'block'

        var text;

        text = "VIDA: " + player.life + " FUERZA: " + player.strenght + " DEFENSA: " + player.defense;
        pjStats.innerHTML = text;
    }
}

function enemies() {

    // ORCO

    orco = {
        name: "Orco",
        class: "Orco",
        life: 65,
        strenght: 5,
        defense: 3,
    };
    
    localStorage.setItem("OrcoName", orco.name);
    localStorage.setItem("OrcoClass", orco.class);
    localStorage.setItem("OrcoLife", orco.life);
    localStorage.setItem("OrcoStrenght", orco.strenght);
    localStorage.setItem("OrcoDefense", orco.defense);

    goblin = {
        name: "Goblin",
        class: "Goblin",
        life: 45,
        strenght: 4,
        defense: 2,
    };
    
    localStorage.setItem("GoblinName", goblin.name);
    localStorage.setItem("GoblinClass", goblin.class);
    localStorage.setItem("GoblinLife", goblin.life);
    localStorage.setItem("GoblinStrenght", goblin.strenght);
    localStorage.setItem("GoblinDefense", goblin.defense);
    

    text = "VIDA: " + orco.life + " FUERZA: " + orco.strenght + " DEFENSA: " + orco.defense;
    enemyStats.innerHTML = text;

    initialLifeOrco = orco.life;
    initialLifeGoblin = goblin.life;
    document.getElementById("imgDownBar").src="../img/enemies/orcoSmall.jpg"

}

function attackSound() {
    let x = Math.floor(Math.random()*(4-1))+1

    if (x == 1) {
        audio = document.querySelector(".audioAttack")
        audio.setAttribute("src", "../sounds/cut1.mp3")
        audio.play()
    }

    if (x == 2) {
        audio = document.querySelector(".audioAttack")
        audio.setAttribute("src", "../sounds/cut2.mp3")
        audio.play()
    }

    if (x == 3) {
        audio = document.querySelector(".audioAttack")
        audio.setAttribute("src", "../sounds/cut3.mp3")
        audio.play()
    }
}

function checkPjDeath(){
    if (localStorage.getItem("HeroLife") <= 0) {
        
        localStorage.setItem("HeroLife", 1);
        localStorage.setItem("HeroStrenght", 0);
        localStorage.setItem("HeroDefense", 0);
        document.getElementById("top_bar").style.display = 'none'
        document.getElementById("paths").style.display = 'none'
        document.getElementById("death").style.display = 'flex'

        var text;
        text = "TODOS RECORDARÁN A " + localStorage.getItem('HeroName') + ", UN MARAVILLOSO Y VALIENTE " + localStorage.getItem('HeroClass') + " QUIEN DIO SU VIDA POR UNA GRAN AVENTURA" ;
        pjDeath.innerHTML = text;

        audio = document.querySelector(".audioDeath")
        audio.setAttribute("src", "../sounds/pjDeath.mp3")
        audio.play()

    }
}

function btnAttackOrcoPath1() {

    attackSound();
    
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
    heroDamage = enemyDefense - heroStrenght - heroRandomDice;
    
    heroDicePath1.innerHTML = "Dado Héroe: " + heroRandomDice + " ---> Daño: " + heroDamage *-1;
    enemyDicePath1.innerHTML = "Dado Enemigo: " + enemyRandomDice + " ---> Daño: " + enemyDamage *-1;

    checkPjDeath();

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

function btnAttackGoblinPath6() {

    attackSound();

    heroLife = localStorage.getItem('HeroLife');
    heroStrenght = localStorage.getItem('HeroStrenght');
    heroDefense = localStorage.getItem('HeroDefense');

    heroLife = parseInt(heroLife);
    heroStrenght = parseInt(heroStrenght);
    heroDefense = parseInt(heroDefense);

    enemyLife = localStorage.getItem("GoblinLife", goblin.life);
    enemyStrenght = localStorage.getItem("GoblinStrenght", goblin.strenght);
    enemyDefense = localStorage.getItem("GoblinDefense", goblin.defense);

    enemyLife = parseInt(enemyLife);
    enemyStrenght = parseInt(enemyStrenght);
    enemyDefense = parseInt(enemyDefense);

    enemyRandomDice = Math.floor(Math.random()*(10-1))+1
    heroRandomDice = Math.floor(Math.random()*(10-1))+1

    localStorage.setItem("HeroLife", heroLife + heroDefense - enemyStrenght - enemyRandomDice)
    localStorage.setItem("GoblinLife", enemyLife + enemyDefense - heroStrenght - heroRandomDice)

    enemyDamage = heroDefense - enemyStrenght - enemyRandomDice;
    heroDamage = enemyDefense - heroStrenght - heroRandomDice;
    
    heroDicePath6.innerHTML = "Dado Héroe: " + heroRandomDice + " ---> Daño: " + heroDamage *-1;
    enemyDicePath6.innerHTML = "Dado Enemigo: " + enemyRandomDice + " ---> Daño: " + enemyDamage *-1;

    checkPjDeath();

    if (localStorage.getItem("GoblinLife") <= 0) {

        document.getElementById("path6").style.display = 'none'
        document.getElementById("path7").style.display = 'block'
        localStorage.setItem("GoblinLife", initialLifeGoblin); //RESETEO VIDA DEL ENEMIGO PARA USARLO MAS TARDE

        audio = document.querySelector(".enemyGoblinDeath")
        audio.setAttribute("src", "../sounds/enemyGoblinDeath.mp3")
        audio.play()

        document.getElementById("down_bar").style.display = 'none'
        document.getElementById("btn-mobile").style.display = 'none'
        
    }

    var textPlayer;

    textPlayer = "VIDA: " + localStorage.getItem('HeroLife') + " FUERZA: " + localStorage.getItem('HeroStrenght') + " DEFENSA: " + localStorage.getItem('HeroDefense');
    pjStats.innerHTML = textPlayer;
   
    var textEnemy;

    textEnemy = "VIDA: " + localStorage.getItem('GoblinLife') + " FUERZA: " + enemyStrenght + " DEFENSA: " + enemyDefense;
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


function btnEnterHutPath2(){
    document.getElementById("path2").style.display = "none"
    document.getElementById("path3").style.display = "block"

    audio = document.querySelector(".doorOpening")
    audio.setAttribute("src", "../sounds/doorOpening.mp3")
    audio.play()
}


function btnHealPath3(){
    document.getElementById("path3").style.display = "none"
    document.getElementById("path5").style.display = "block"

    audio = document.querySelector(".bandAid")
    audio.setAttribute("src", "../sounds/bandAid.mp3")
    audio.play()

    heroLife = localStorage.getItem('HeroLife');
    heroLife = parseInt(heroLife);
    heroLife = heroLife+15;
    localStorage.setItem("HeroLife", heroLife);

    var textPlayer;

    textPlayer = "VIDA: " + localStorage.getItem('HeroLife') + " FUERZA: " + localStorage.getItem('HeroStrenght') + " DEFENSA: " + localStorage.getItem('HeroDefense');
    pjStats.innerHTML = textPlayer;
}

function btnExitPath5(){
    document.getElementById("path5").style.display = "none"
    document.getElementById("path4.1").style.display = "block"

    audio = document.querySelector(".enemyGoblin")
    audio.setAttribute("src", "../sounds/enemyGoblin.mp3")
    audio.play()
}

function btnHelpPath2(){
    document.getElementById("path2").style.display = "none"
    document.getElementById("path4").style.display = "block"

    heroLife = localStorage.getItem('HeroLife');
    heroLife = parseInt(heroLife);
    heroLife = heroLife+30;
    localStorage.setItem("HeroLife", heroLife);

    var textPlayer;

    textPlayer = "VIDA: " + localStorage.getItem('HeroLife') + " FUERZA: " + localStorage.getItem('HeroStrenght') + " DEFENSA: " + localStorage.getItem('HeroDefense');
    pjStats.innerHTML = textPlayer;

    audio = document.querySelector(".enemyGoblin")
    audio.setAttribute("src", "../sounds/enemyGoblin.mp3")
    audio.play()
}

function btnHelpPath3(){
    document.getElementById("path3").style.display = "none"
    document.getElementById("path4").style.display = "block"

    heroLife = localStorage.getItem('HeroLife');
    heroLife = parseInt(heroLife);
    heroLife = heroLife+30;
    localStorage.setItem("HeroLife", heroLife);

    var textPlayer;

    textPlayer = "VIDA: " + localStorage.getItem('HeroLife') + " FUERZA: " + localStorage.getItem('HeroStrenght') + " DEFENSA: " + localStorage.getItem('HeroDefense');
    pjStats.innerHTML = textPlayer;

    audio = document.querySelector(".enemyGoblin")
    audio.setAttribute("src", "../sounds/enemyGoblin.mp3")
    audio.play()
}

function btnCombatPath41(){
    document.getElementById("path4.1").style.display = "none"
    document.getElementById("path6").style.display = "block"

    document.getElementById("down_bar").style.display = 'flex'
    document.getElementById("imgDownBar").src="../img/enemies/goblinSmall.jpg"

    text = "VIDA: " + localStorage.getItem("GoblinLife", goblin.life) + " FUERZA: " + localStorage.getItem("GoblinStrenght", goblin.strenght) + " DEFENSA: " + localStorage.getItem("GoblinDefense", goblin.defense);
    enemyStats.innerHTML = text;
}

function btnCombatPath4(){
    document.getElementById("path4").style.display = "none"
    document.getElementById("path6").style.display = "block"

    document.getElementById("down_bar").style.display = 'flex'
    document.getElementById("imgDownBar").src="../img/enemies/goblinSmall.jpg"

    text = "VIDA: " + localStorage.getItem("GoblinLife", goblin.life) + " FUERZA: " + localStorage.getItem("GoblinStrenght", goblin.strenght) + " DEFENSA: " + localStorage.getItem("GoblinDefense", goblin.defense);
    enemyStats.innerHTML = text;
}

//ICONOS DE SONIDOS
function btnPath1MetalSound(){
    audio = document.querySelector(".btnPath1MetalSound")
    audio.setAttribute("src", "../sounds/btnPath1MetalSound.mp3")
    audio.play()
}

function btnPath1OrcSound(){
    audio = document.querySelector(".btnPath1OrcSound")
    audio.setAttribute("src", "../sounds/btnPath1OrcSound.mp3")
    audio.play()
}

function btnPath2ScreamSound(){
    audio = document.querySelector(".btnPath2ScreamSound")
    audio.setAttribute("src", "../sounds/btnPath2ScreamSound.mp3")
    audio.play()
}

function btnPath2BushesSound(){
    audio = document.querySelector(".btnPath2BushesSound")
    audio.setAttribute("src", "../sounds/btnPath2BushesSound.mp3")
    audio.play()
}

function btnPath3ScreamSound(){
    audio = document.querySelector(".btnPath3ScreamSound")
    audio.setAttribute("src", "../sounds/btnPath3ScreamSound.mp3")
    audio.play()
}

function btnPath3SearchSound(){
    audio = document.querySelector(".btnPath3SearchSound")
    audio.setAttribute("src", "../sounds/btnPath3SearchSound.mp3")
    audio.play()
}

function btnPath4HeySound(){
    audio = document.querySelector(".btnPath4HeySound")
    audio.setAttribute("src", "../sounds/btnPath4HeySound.mp3")
    audio.play()
}

function btnPath4PotionSound(){
    audio = document.querySelector(".btnPath4PotionSound")
    audio.setAttribute("src", "../sounds/btnPath4PotionSound.mp3")
    audio.play()
}

function btnPath41BushesSound(){
    audio = document.querySelector(".btnPath41BushesSound")
    audio.setAttribute("src", "../sounds/btnPath41BushesSound.mp3")
    audio.play()
}

function btnPath41RunningSound(){
    audio = document.querySelector(".btnPath41RunningSound")
    audio.setAttribute("src", "../sounds/btnPath41RunningSound.mp3")
    audio.play()
}

function btnPath41UnsheatheSound(){
    audio = document.querySelector(".btnPath41UnsheatheSound")
    audio.setAttribute("src", "../sounds/btnPath41UnsheatheSound.mp3")
    audio.play()
}

function btnPath5PagesSound(){
    audio = document.querySelector(".btnPath5PagesSound")
    audio.setAttribute("src", "../sounds/btnPath5PagesSound.mp3")
    audio.play()
}

function btnPath7AplauseSound(){
    audio = document.querySelector(".btnPath7AplauseSound")
    audio.setAttribute("src", "../sounds/btnPath7AplauseSound.mp3")
    audio.play()
}
