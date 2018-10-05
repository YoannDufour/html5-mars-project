var rotation = 90;

ws.onmessage = function(message) {
    var messageParse = JSON.parse(message);
    document.getElementById("rudderImg").style.transform = "rotate("+messageParse.angle+"deg)";
    console.log(message.data);
};

function rudderRightBtnClick(){
    /*rotation += 30;
    document.getElementById("rudderImg").style.transform = "rotate("+rotation+"deg)";*/
    ws.send(JSON.stringify({ name: 'spaceship:rotate', data: {
                'angle' : 30,
                'direction' : 1,
            }
        }
    ));

}

function rudderLeftBtnClick(){
    /*rotation -= 30;
    document.getElementById("rudderImg").style.transform = "rotate("+rotation+"deg)";*/
    ws.send(JSON.stringify({ name: 'spaceship:rotate', data: {
                'angle' : 30,
                'direction' : -1,
            }
        }
    ));
}

function moveUp(){
    let movementPowerValue = Number(document.getElementById("movementPower").value);
    movementPowerValue += 0.25;
    document.getElementById("movementPower").value = movementPowerValue;

    if(movementPowerValue>1){
        document.getElementById("movementPower").value = "1";
    }
}

function moveDown(){

    let movementPowerValue = Number(document.getElementById("movementPower").value);
    movementPowerValue -= 0.25;
    document.getElementById("movementPower").value = movementPowerValue;

    if(movementPowerValue<0){
        document.getElementById("movementPower").value = "0";
    }
}

document.addEventListener('keydown', function (event) {
    switch (event.key){
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
    }
});


