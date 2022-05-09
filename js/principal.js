player = {
    name: localStorage.getItem('HeroName'),
    class: localStorage.getItem('HeroClass'),
    life: localStorage.getItem('HeroLife'),
    strenght: localStorage.getItem('HeroStrenght'),
    defense: localStorage.getItem('HeroDefense')
}


function imagen_pj() {
  
    if (player.class == "Berserker") {
        document.getElementById("imgBerserker").style.display = 'block'
        document.getElementById("imgTemplario").style.display = 'none'
        document.getElementById("imgHechicero").style.display = 'none'
    
    }
    
    else if (player.class == "Templario") {
        document.getElementById("imgBerserker").style.display = 'none'
        document.getElementById("imgTemplario").style.display = 'block'
        document.getElementById("imgHechicero").style.display = 'none'
    }
    
    else if (player.class == "Hechicero") {
        document.getElementById("imgBerserker").style.display = 'none'
        document.getElementById("imgTemplario").style.display = 'none'
        document.getElementById("imgHechicero").style.display = 'block'
    }
  } 

