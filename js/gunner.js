(function(){
  const ws = new WebSocket(`ws://localhost`);

  var turretAngle = 0;
  var turretTurnDirection = 1;
  var turretTurnTo = 0;

  var turretReloaded = false;
  var turretReloading = false;

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

  potPower.oninput = function(){
    powerScreen.innerHTML = this.value;
  }

  degres.oninput = function(){
    let dir = parseInt(degres.value);
    potDirection.style.transform = "rotate(" + dir + "deg)";
  }

  btnDirRight.onclick = function(){
    let dir = parseInt(degres.value);
    dir += 1;
    degres.value = dir%360;
    potDirection.style.transform = "rotate(" + parseInt(dir) + "deg)";
  }

  btnDirLeft.onclick = function(){
    let dir = parseInt(degres.value);
    dir -= 1;
    degres.value = dir%360;
    potDirection.style.transform = "rotate(" + parseInt(dir) + "deg)";
  }

  btnValidate.onclick = function(){
    let dir = parseInt(degres.value);
    turnTo(dir);
  }

  btnShoot.onclick = function(){
    let power = parseInt(potPower.value);
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
        power : power
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
