(function(){
    var potPower = document.getElementById('power-potard');
    var power = document.getElementById('power-value');

    var potDirection = document.getElementById('dir-potard');
    var btnDirRight = document.getElementById('btn-dir-right');
    var btnDirLeft = document.getElementById('btn-dir-left');
    var directionScreen = document.getElementById('dir-screen');

    var btnShoot = document.getElementById('btn-shoot');

    var direction = parseInt(potDirection.dataset.dir, 10);

    potPower.oninput = function(){
        power.innerHTML = this.value;
    }

    btnDirRight.onclick = function(){
        direction += 5;
        direction = direction%360;

        potDirection.style.transform = "rotate(" + parseInt(direction + 90) + "deg)";
        potDirection.dataset.dir = direction;
        directionScreen.innerHTML = direction + "° " + "Right";
    }

    btnDirLeft.onclick = function(){
        direction -= 5;
        direction = direction%360;

        potDirection.style.transform = "rotate(" + parseInt(direction + 90) + "deg)";
        potDirection.dataset.dir = direction;
        directionScreen.innerHTML = direction + "° " + "Left";
    }

    btnShoot.onclick = function(){
        console.log(direction);
        console.log(potPower.value);
        console.log("feu");
    }
})();
