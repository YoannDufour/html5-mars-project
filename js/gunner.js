(function(){
  //const ws = new WebSocket(`ws://92.222.88.16:9090?team=2&username=Xx-lesbgdu01-xX&job=Shooter`);
  var ws, modal;

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


  ws = new WebSocket('ws://92.222.88.16:9090?team=2&username=Xx-lesbgdu01-xX&job=Shooter');

  ws.onopen = function () {
    console.log("socket open with server !");
};

ws.onmessage = function(message) {
    spaceship = JSON.parse(message.data);
    turretTurnTo = spaceship.data.turretAngle;

    if(setTurret){
        potDirection.style.transform = "rotate(" + spaceship.data.turretAngle + "deg)";
        degres.value = spaceship.data.turretAngle;
    }


    //console.log(spaceship);

    if(spaceship.data.reloaded && !turretReloaded){
        onreloaded();
        turretReloaded = true;
    }
    else if(!spaceship.data.reloaded){
        onreloading();
        turretReloaded = false;
    }
}



  potPower.oninput = function(){
    powerScreen.innerHTML = this.value;
  }

  degres.oninput = function(){
     setTurret = false;
    let dir = parseInt(degres.value);
    potDirection.style.transform = "rotate(" + dir + "deg)";
  }

  btnDirRight.onclick = function(){
      setTurret = false;
    let dir = parseInt(degres.value);
    dir += 1;
    degres.value = dir%360;
    potDirection.style.transform = "rotate(" + parseInt(dir) + "deg)";
  }

  btnDirLeft.onclick = function(){
      setTurret = false;
    let dir = parseInt(degres.value);
    dir -= 1;
    degres.value = dir%360;
    potDirection.style.transform = "rotate(" + parseInt(dir) + "deg)";
  }

  btnValidate.onclick = function(){
    let dir = parseInt(degres.value);
    let marche;
    let dirMessage;

    if(dir > turretTurnTo && dir <= turretTurnTo + 180){
        marche = 1;
        dirMessage = dir - turretTurnTo;
        console.log(dirMessage);
    }
    else{
        marche = -1;
        dirMessage = turretTurnTo - dir;
    }

    console.log('rotate');

    rotate(dirMessage,marche);
    let audio = new Audio('sound/visseuse.mp3');
    audio.volume = 0.2;
    audio.play();
    setTurret = true;
  }

  btnShoot.onclick = function(){
    let power = parseInt(potPower.value);
    power = power / 100;
    fire(power);
    onreloading();
  }

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

  function turnTo(angle){
    var json = {
      name : "spaceship:turret:turnto",
      data : {
        angle : angle
      }
    }

    ws.send(JSON.stringify(json));
  }

  function fire(power){
    var json = {
      name : "spaceship:turret:fire",
      data : {
        "power" : power
      }
    }

    ws.send(JSON.stringify(json));
  }

  function onreloaded(){
    ledReloading.style.background = "#b1b1b1";
    ledReloaded.style.background = "#00ff00";
    btnShoot.disabled = false;

    //Son charger
    let audio = new Audio('sound/charger.mp3');
    audio.play();
  }

  function onreloading(){
    ledReloading.style.background = "#ff0000";
    ledReloaded.style.background = "#b1b1b1";
    btnShoot.disabled = true;

    //Son decharger
    let audio = new Audio('sound/decharger.mp3');
    audio.play();
  }



})();
