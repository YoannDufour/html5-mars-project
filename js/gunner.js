(function(){

  var turretAngle = 0;
  var turretTurnDirection = 1;
  var turretTurnTo = 0;

  var turretReloaded = false;
  var turretReloading = false;

  var setTurret = true;

  // tir
  var potPower = document.getElementById('power-potard');
  var powerScreen = document.getElementById('power-value');
  var ledReloading = document.getElementById('led-reloading');
  var ledReloaded = document.getElementById('led-reloaded');
  var btnShoot = document.getElementById('btn-shoot');

  // direction
  var degres = document.getElementById('dir-screen');
  var potDirection = document.getElementById('dir-potard');
  var btnDirLeft = document.getElementById('btn-dir-left');
  var btnDirRight = document.getElementById('btn-dir-right');
  var btnValidate = document.getElementById('btn-validate');



ws.onmessage = function(message) {
    spaceship = JSON.parse(message.data);
    turretTurnTo = spaceship.data.turretAngle;

    if(setTurret){
      potDirection.style.transform = "rotate(" + spaceship.data.turretAngle + "deg)";
      degres.value = spaceship.data.turretAngle;
    }

    if(spaceship.data.reloaded && !turretReloaded){
        turretReloaded = true;
        turretReloading = false;
        onreloaded();
    }
    else if(spaceship.data.reloading && !turretReloading){
        turretReloaded = false;
        turretReloading = true;
        onreloading();
    }
 }


/* Les deux input pour puissance et direction */
potPower.oninput = function(){
    powerScreen.innerHTML = this.value;
}

degres.oninput = function(){
    setTurret = false;

    let dir = parseInt(degres.value);
    potDirection.style.transform = "rotate(" + dir + "deg)";
}

//Bouton pour décaler la tourelle dans le sens des aiguilles d'une montre
btnDirRight.onclick = function(){
    setTurret = false;
    let dir = parseInt(degres.value);
    dir += 1;
    degres.value = dir%360;
    potDirection.style.transform = "rotate(" + parseInt(dir) + "deg)";
}

//Bouton pour décaler la tourelle dans le sens inverse des aiguilles d'une montre
btnDirLeft.onclick = function(){
    setTurret = false;
    let dir = parseInt(degres.value);
    dir -= 1;
    degres.value = dir%360;
    potDirection.style.transform = "rotate(" + parseInt(dir) + "deg)";
 }

//Boutons pour envoyer le changement de direction de la tourelle
btnValidate.onclick = function(){
    let dir = parseInt(degres.value);

    if(dir > 180){
        dir = - (dir % 180);
    }

    let marche;
    let dirMessage;

    if(dir >= turretTurnTo && dir <= (turretTurnTo + 180)){
        marche = 1;
        dirMessage = dir - turretTurnTo;

        console.log(dirMessage);
    }
    else if(dir <= turretTurnTo && dir >= (turretTurnTo - 180)){
        marche = -1;
        dirMessage = turretTurnTo - dir;
    }

    rotate(dirMessage,marche);
    let audio = new Audio('sound/visseuse.mp3');
    audio.volume = 0.2;
    audio.play();
    setTurret = true;
}

//Bouton pour tirer
btnShoot.onclick = function(){
    let power = parseInt(potPower.value);

    power = power / 100;

    fire(power);
}

//Fonction pour envoyer un déplacement à la tourelle (au serveur)
function rotate(angle,direction){
    var json = {
        name : "spaceship:turret:rotate",
        data : {
            angle : angle ,
            direction : direction
        }
    }

    ws.send(JSON.stringify(json));
}

//Fonction pour envoyer une position à la tourelle  (au serveur)
function turnTo(angle){
    var json = {
        name : "spaceship:turret:turnto",
        data : {
            angle : angle
        }
    }

    ws.send(JSON.stringify(json));
}

//Fonction pour envoyer l'action de tirer au serveur
function fire(power){
    var json = {
        name : "spaceship:turret:fire",
        data : {
            "power" : power
        }
    }
    ws.send(JSON.stringify(json));
}

//Fonction qui permet de dire au joueur que le missile est chargé
function onreloaded(){
    ledReloading.style.background = "#b1b1b1";
    ledReloaded.style.background = "#00ff00";
    btnShoot.disabled = false;

    //Son charger
    let audio = new Audio('sound/charger.mp3');
    audio.play();
}

//Fonction qui permet de dire au joueur que le missile est en chargement
function onreloading(){
    ledReloading.style.background = "#ff0000";
    ledReloaded.style.background = "#b1b1b1";
    btnShoot.disabled = true;

    //Son decharger
    let audio = new Audio('sound/decharger.mp3');
    audio.play();
}

//Fonction qui permet d'utiliser espace pour tirer, z pour tourner la tourelle dans le sens trigo, s pour le sens inverse
document.onkeypress=function(e){
    e=e||window.event;
    var key=e.which?e.which:event.keyCode;
    switch (key) {
        case 32:
            document.getElementById('btn-shoot').click();
            break;
        case 122:
            document.getElementById('btn-dir-left').click();
            break;
        case 115:
            document.getElementById('btn-dir-right').click();
            break;
        default:
    }
}

})();
