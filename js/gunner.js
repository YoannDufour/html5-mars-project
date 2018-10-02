(function(){
  const ws = new WebSocket(`ws://localhost`);

  var turretAngle = 0;
  var turretTurnDirection = 1;
  var turretTurnTo = 0;

  var turretReloaded = false;
  var turretReloading = false;

  var potPower = document.getElementById('power-potard');
  var powerScreen = document.getElementById('power-value');
  var ledReloading = document.getElementById('led-reloading');
  var ledReloaded = document.getElementById('led-reloaded');
  var btnShoot = document.getElementById('btn-shoot');


  potPower.oninput = function(){
    powerScreen.innerHTML = this.value;
  }

  /*btnDirRight.onmousedown = function(){

    direction += 5;
    direction = direction%360;

    potDirection.style.transform = "rotate(" + parseInt(direction) + "deg)";
    potDirection.dataset.dir = direction;
    directionScreen.innerHTML = direction + "° " + "Right";

  }*/

  /*btnDirLeft.onclick = function(){
    direction -= 5;
    direction = direction%360;

    potDirection.style.transform = "rotate(" + parseInt(direction) + "deg)";
    potDirection.dataset.dir = direction;
    directionScreen.innerHTML = direction + "° " + "Left";
  }*/

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
  }

  function onreloading(){
    ledReloading.style.background = "#ff0000";
    ledReloaded.style.background = "#b1b1b1";
    btnShoot.disabled = true;

    //Son decharger
  }

})();
