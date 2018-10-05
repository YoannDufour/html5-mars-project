var rotation = 90;
var movementPowerValue = 0;

var audio = new Audio();
audio.src = "sound/motor.mp3";
audio.volume = 0.2;


try {
    ws.onmessage = function (message) {
        var messageParse = JSON.parse(message);
        document.getElementById("rudderImg").style.transform = "rotate(" + messageParse.angle + "deg)";
        console.log(message.data);
    };
} catch (e) {

}

function rudderRightBtnClick() {
    /*rotation += 30;
    document.getElementById("rudderImg").style.transform = "rotate("+rotation+"deg)";*/
    if(ws !== undefined)
    ws.send(JSON.stringify({
            name: 'spaceship:rotate', data: {
                'angle': 30,
                'direction': 1,
            }
        }
    ));
}

function rudderLeftBtnClick() {
    /*rotation -= 30;
    document.getElementById("rudderImg").style.transform = "rotate("+rotation+"deg)";*/
    if(ws !== undefined)
    ws.send(JSON.stringify({
            name: 'spaceship:rotate', data: {
                'angle': 30,
                'direction': -1,
            }
        }
    ));
}

function moveUp() {
    movementPowerValue = Number(document.getElementById("movementPower").innerHTML);
    movementPowerValue += 0.25;
    document.getElementById("movementPower").innerHTML = movementPowerValue;

    if (movementPowerValue > 1) {
        document.getElementById("movementPower").innerHTML = "1";
        movementPowerValue = 1;
    }
    if(ws !== undefined)
    ws.send(JSON.stringify({
            name: 'spaceship:move', data: {
                time: 100,
                power: movementPowerValue,
            }
        }
    ));
    console.log(movementPowerValue);
    audio.play();
}

function moveDown() {

    movementPowerValue = Number(document.getElementById("movementPower").innerHTML);
    movementPowerValue -= 0.25;
    document.getElementById("movementPower").innerHTML = movementPowerValue;

    if (movementPowerValue < 0) {
        document.getElementById("movementPower").innerHTML = "0";
        movementPowerValue = 0;
    }
    if(ws !== undefined)
    ws.send(JSON.stringify({
            name: 'spaceship:move', data: {
                time: 100,
                power: movementPowerValue,
            }
        }
    ));
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
        case 'q':
            rudderLeftBtnClick();
            break;
        case 'ArrowRight':
        case 'd':
            rudderRightBtnClick();
            break;
        case 'ArrowUp':
        case 'z':
            moveUp();
            break;
        case 'ArrowDown':
        case 's':
            moveDown();
            break;
        default:
            console.log(event.key);
    }
});

function autoMode(){
    if(document.getElementById("auto").style.backgroundColor === "rgb(92, 184, 92)"){
        document.getElementById("auto").style.backgroundColor  = "white";
        document.getElementById("auto").style.color  = "black";
        document.getElementById("movementPower").innerHTML = "0";
        clearInterval(auto);
    }else{
    document.getElementById("auto").style.backgroundColor  = "#5cb85c";
    document.getElementById("auto").style.color  = "white";
    var auto = setInterval(function(){ 
        ws.send(JSON.stringify({
            name: 'spaceship:move', data: {
                time: 1000,
                power: 0.5,
            }
        }
    ));
    }, 1000);
    document.getElementById("movementPower").innerHTML = "0.5";
    }

}

