
function sendThruster(value){
    document.getElementById("ThurstInfos").innerHTML = parseInt(value);
    var thrusterPower = "0." + value;
    console.log(thrusterPower, parseFloat(thrusterPower))
    ws.send(JSON.stringify({ name: 'spaceship:thruster:power', data: { 'power' : parseFloat(thrusterPower) }}));
}


function sendShield(value){
    document.getElementById("ShieldInfos").innerHTML = parseInt(value);
    var shieldPower = "0." + value;
    ws.send(JSON.stringify({ name: 'spaceship:shield:power', data: { 'power' : parseFloat(shieldPower) }}));
}

function sendSystem(value){
    document.getElementById("SystemInfos").innerHTML = parseInt(value);
    var systemPower = "0." + value;
    ws.send(JSON.stringify({ name: 'spaceship:system:power', data: { 'power' : parseFloat(systemPower) }}));
}

function initListener() {
    document.addEventListener('keydown', (event) => {
    if(event.key == "r") {
        document.getElementById("Propulseurs").value = 100;
        document.getElementById("ThurstInfos").innerHTML=document.getElementById("Propulseurs").value;
        sendThruster(document.getElementById("Propulseurs").value);
    }
	if(event.key == "f") {
        document.getElementById("Bouclier").value = 100;
        document.getElementById("ShieldInfos").innerHTML=document.getElementById("Bouclier").value;
        sendShield(document.getElementById("Bouclier").value);
    }
	if(event.key == "v") {
        document.getElementById("System").value = 100;
        document.getElementById("SystemInfos").innerHTML=document.getElementById("System").value;
        sendSystem(document.getElementById("System").value);
    }
	if(event.key == "a") {
        document.getElementById("Propulseurs").value = 0.1;
        document.getElementById("ThurstInfos").innerHTML=document.getElementById("Propulseurs").value;
        sendThruster(document.getElementById("Propulseurs").value);    
    }
	if(event.key == "q") {
        document.getElementById("Bouclier").value = 0.1;
        document.getElementById("ShieldInfos").innerHTML=document.getElementById("Bouclier").value;
        sendShield(document.getElementById("Bouclier").value);   
    }
	if(event.key == "w") {
        document.getElementById("System").value = 0.1;
        document.getElementById("SystemInfos").innerHTML=document.getElementById("System").value;
        sendSystem(document.getElementById("System").value);    
    }

    if(event.key == "k") {
        document.getElementById("System").value = 33;
        document.getElementById("SystemInfos").innerHTML=document.getElementById("System").value;
        sendSystem(document.getElementById("System").value);    
    }
});

}


