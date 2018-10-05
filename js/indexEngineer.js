document.addEventListener('connected', function () {
        ws.onmessage = function(message) {
        var parsedMsg = JSON.parse(message.data);
        if (parsedMsg.error) {
            alert(parsedMsg.error)
        }
           document.getElementById("Propulseurs").value = parseInt(parsedMsg.data.thrusterPower * 100);
           document.getElementById("ThurstInfos").innerHTML=document.getElementById("Propulseurs").value;
           document.getElementById("Bouclier").value = parseInt(parsedMsg.data.shieldPower * 100);
           document.getElementById("ShieldInfos").innerHTML=document.getElementById("Bouclier").value;
           document.getElementById("System").value = parseInt(parsedMsg.data.systemPower * 100);
           document.getElementById("SystemInfos").innerHTML=document.getElementById("System").value;
            if (parsedMsg.data.broken) {
                document.getElementById("state").style.backgroundColor ='red';
                document.getElementById("state").innerHTML = "REPAIR";
            }
            if (!parsedMsg.data.broken) {
                document.getElementById("state").style.backgroundColor ='green';
                document.getElementById("state").innerHTML = "OK";
            }
           
       }
    });