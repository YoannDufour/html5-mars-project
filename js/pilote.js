var movementPowerValue = 0;
var auto;
var motor = new Audio();
var ambient = new Audio();
motor.src = "sound/motor.mp3";
motor.volume = 0.2;

var audio = new Audio();
audio.src = "sound/motor.mp3";
audio.volume = 0.2;

var ws, modal;

function selectRole(){
    document.getElementById("formConnection").action = document.getElementById("jobSelect").value+'.html';
}

function loadFile(event) {
    var output = document.getElementById('output');
    var avatar = URL.createObjectURL(event.target.files[0]);
    output.src = avatar;
};

document.addEventListener("click", function() {
    if(isAudioEnable){
        ambient.src = "sound/intermission.mp3";
        ambient.volume = 0.2;
        ambient.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        ambient.play();
    }
}, {once : true});

document.addEventListener("keydown", function() {
    if(isAudioEnable){
        ambient.src = "sound/intermission.mp3";
        ambient.volume = 0.2;
        ambient.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        ambient.play();
    }
}, {once : true});


function getParameterByName(name){
    var tmp = window.location.search.substr(1).split('&');
    var parameters = [];

    for (var i = 0; i < tmp.length; i++) {
        var x = tmp[ i ].split('=');
        parameters[x[0]] = x[1];
    }

    return parameters[name];
}

function onOpen() {
    let team = getParameterByName('team');
    document.getElementById("rudderImg").src = 'img/ship'+team+'.png';

    ws.onmessage = function (message) {
        var messageParse = JSON.parse(message.data);
        var angle = parseInt(messageParse.data.angle);
        document.getElementById("rudderImg").style.transform = "rotate(" + angle + "deg)";
    };
}

function rudderRightBtnClick() {
    /*rotation += 30;
    document.getElementById("rudderImg").style.transform = "rotate("+rotation+"deg)";*/
    if(ws !== undefined)
    ws.send(JSON.stringify({
            name: 'spaceship:rotate', data: {
                'angle': 10,
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
                'angle': 10,
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

    if(isAudioEnable)
        motor.play();
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

function intervalAuto(){
     auto = setInterval(function(){ 
     ws.send(JSON.stringify({
         name: 'spaceship:move', data: {
             time: 100,
             power: 1,
         }
     }));
    }, 100);
}

function autoMode(){
    if(document.getElementById("auto").style.backgroundColor === "rgb(92, 184, 92)"){
        document.getElementById("auto").style.backgroundColor  = "white";
        document.getElementById("auto").style.color  = "black";
        document.getElementById("movementPower").innerHTML = "0";
        clearInterval(auto);
    }else{
    document.getElementById("auto").style.backgroundColor  = "#5cb85c";
    document.getElementById("auto").style.color  = "white";
    intervalAuto();
    document.getElementById("movementPower").innerHTML = "1";
    }
}

var isAudioEnable = true;

function enableAudio() {
    if(isAudioEnable){
        isAudioEnable = false;
        ambient.pause();
        ambient.currentTime = 0;;
        motor.pause();
        motor.currentTime = 0;
        document.getElementById("audioBtnImg").src = "img/noaudio.png";
    }
    else if(!isAudioEnable){
        isAudioEnable = true
        ambient.play();
        document.getElementById("audioBtnImg").src = "img/audio.png";
    }
}


