var directionupdate = function (angle) {
    if (angle >= 0 && angle < 22.5)
        document.getElementsByClassName("ship")[0].textContent = "E";
    else if (angle >= 22.5 && angle < 67.5)
        document.getElementsByClassName("ship")[0].textContent = "SE";
    else if (angle >= 67.5 && angle < 112.5)
        document.getElementsByClassName("ship")[0].textContent = "S";
    else if (angle >= 112.5 && angle < 157.5)
        document.getElementsByClassName("ship")[0].textContent = "SW";
    else if (angle >= 157.5 && angle < 202.5)
        document.getElementsByClassName("ship")[0].textContent = "W";
    else if (angle >= 205.5 && angle < 247.5)
        document.getElementsByClassName("ship")[0].textContent = "NW";
    else if (angle >= 255.5 && angle < 292.5)
        document.getElementsByClassName("ship")[0].textContent = "N";
    else if (angle >= 292.5 && angle < 337.5)
        document.getElementsByClassName("ship")[0].textContent = "NE";
    else if (angle >= 337.5 && angle < 360)
        document.getElementsByClassName("ship")[0].textContent = "E";
    document.getElementsByClassName("ship")[1].textContent = angle + "°";
};

var hpupdate = function (life) {
    if (life < 100) {
        document.getElementById("lvl-100").style.backgroundColor = "#1C1819";
        if (life < 90) {
            document.getElementById("lvl-90").style.backgroundColor = "#1C1819";
            if (life < 80) {
                document.getElementById("lvl-80").style.backgroundColor = "#1C1819";
                if (life < 70) {
                    document.getElementById("lvl-70").style.backgroundColor = "#1C1819";
                    if (life < 60) {
                        document.getElementById("lvl-60").style.backgroundColor = "#1C1819";
                        if (life < 50) {
                            document.getElementById("lvl-50").style.backgroundColor = "#1C1819";
                            if (life < 40) {
                                document.getElementById("lvl-40").style.backgroundColor = "#1C1819";
                                if (life < 30) {
                                    document.getElementById("lvl-30").style.backgroundColor = "#1C1819";
                                    if (life < 20) {
                                        document.getElementById("lvl-20").style.backgroundColor = "#1C1819";
                                        if (life < 10) {
                                            document.getElementById("lvl-10").style.backgroundColor = "#1C1819";

                                            document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                                            document.getElementsByClassName("health")[0].style.color = "#ff0700";

                                        }
                                        else {
                                            document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                                            document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                                            document.getElementsByClassName("health")[0].style.color = "#ff2c01";
                                        }
                                    }
                                    else {
                                        document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                                        document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                                        document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                                        document.getElementsByClassName("health")[0].style.color = "#ff5500";
                                    }
                                }
                                else {
                                    document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                                    document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                                    document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                                    document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
                                    document.getElementsByClassName("health")[0].style.color = "#ff7f00";
                                }
                            }
                            else {
                                document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                                document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                                document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                                document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
                                document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
                                document.getElementsByClassName("health")[0].style.color = "#f6a506";
                            }
                        }
                        else {
                            document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                            document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                            document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                            document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
                            document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
                            document.getElementById("lvl-50").style.backgroundColor = "#fdd502";
                            document.getElementsByClassName("health")[0].style.color = "#fdd502";
                        }
                    }
                    else {
                        document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                        document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                        document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                        document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
                        document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
                        document.getElementById("lvl-50").style.backgroundColor = "#fdd502";
                        document.getElementById("lvl-60").style.backgroundColor = "#fcff00";
                        document.getElementsByClassName("health")[0].style.color = "#fcff00";
                    }
                } else {
                    document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                    document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                    document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                    document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
                    document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
                    document.getElementById("lvl-50").style.backgroundColor = "#fdd502";
                    document.getElementById("lvl-60").style.backgroundColor = "#fcff00";
                    document.getElementById("lvl-70").style.backgroundColor = "#d0ff00";
                    document.getElementsByClassName("health")[0].style.color = "#d0ff00";
                }
            }
            else {
                document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
                document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
                document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
                document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
                document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
                document.getElementById("lvl-50").style.backgroundColor = "#fdd502";
                document.getElementById("lvl-60").style.backgroundColor = "#fcff00";
                document.getElementById("lvl-70").style.backgroundColor = "#d0ff00";
                document.getElementById("lvl-80").style.backgroundColor = "#a5ff01";
                document.getElementsByClassName("health")[0].style.color = "#a5ff01";
            }
        }
        else {
            document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
            document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
            document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
            document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
            document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
            document.getElementById("lvl-50").style.backgroundColor = "#fdd502";
            document.getElementById("lvl-60").style.backgroundColor = "#fcff00";
            document.getElementById("lvl-70").style.backgroundColor = "#d0ff00";
            document.getElementById("lvl-80").style.backgroundColor = "#a5ff01";
            document.getElementById("lvl-90").style.backgroundColor = "#44ff00";
            document.getElementsByClassName("health")[0].style.color = "#44ff00";
        }
    }
    else {
        document.getElementById("lvl-0").style.backgroundColor = "#ff0700";
        document.getElementById("lvl-10").style.backgroundColor = "#ff2c01";
        document.getElementById("lvl-20").style.backgroundColor = "#ff5500";
        document.getElementById("lvl-30").style.backgroundColor = "#ff7f00";
        document.getElementById("lvl-40").style.backgroundColor = "#f6a506";
        document.getElementById("lvl-50").style.backgroundColor = "#fdd502";
        document.getElementById("lvl-60").style.backgroundColor = "#fcff00";
        document.getElementById("lvl-70").style.backgroundColor = "#d0ff00";
        document.getElementById("lvl-80").style.backgroundColor = "#a5ff01";
        document.getElementById("lvl-90").style.backgroundColor = "#44ff00";
        document.getElementById("lvl-100").style.backgroundColor = "#29ff01";
        document.getElementsByClassName("health")[0].style.color = "#29ff01";
    }
    document.getElementsByClassName("health")[0].textContent = life + "HP";
};

var shieldupdate = function (shield) {
    document.getElementsByClassName("myBar")[1].style.width = shield + "%";
    document.getElementsByClassName("myBar")[1].textContent = shield + "%";
};

var syspowerupdate = function (syspower) {
    document.getElementsByClassName("myBar")[2].style.width = syspower + "%";
    document.getElementsByClassName("myBar")[2].textContent = syspower + "%";
};

var thrusterupdate = function (thruster) {
    document.getElementsByClassName("myBar")[0].style.width = thruster + "%";
    document.getElementsByClassName("myBar")[0].textContent = thruster + "%";
};

var brokenupdate = function (isBroken) {
    if (isBroken == true) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
        document.getElementsByTagName("body")[0].style.animation = "colorblink 1s infinite";
    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#1c1111";
        document.getElementsByTagName("body")[0].style.animation = "";
    }

};

var gunnerupdate = function (reloading, reloaded, turret) {
    document.getElementsByClassName("turret")[0].textContent = turret + "°"
    if (reloading == true) {
        document.getElementsByClassName("gunner")[0].textContent = "STATUS: RELOADING";
        document.getElementsByClassName("gunner")[0].style.borderColor = "yellow";
        document.getElementsByClassName("gunner")[0].style.color = "yellow";
        document.getElementsByClassName("turret")[0].style.borderColor = "yellow";
        document.getElementsByClassName("turret")[0].style.color = "yellow";

    }
    if (reloaded == true) {
        document.getElementsByClassName("gunner")[0].textContent = "STATUS: RELOADED";
        document.getElementsByClassName("gunner")[0].style.borderColor = "#29ff01";
        document.getElementsByClassName("gunner")[0].style.color = "#29ff01";
        document.getElementsByClassName("turret")[0].style.borderColor = "#29ff01";
        document.getElementsByClassName("turret")[0].style.color = "#29ff01";
    }
}

var cargoupdate = function (cargo) {
    if (cargo == false)
        document.getElementsByClassName("pic")[0].src = "";
    else
        document.getElementsByClassName("pic")[0].src = "https://www.vossey.com/gallery2/d/98379-1/360fx360f_001.png";
}

var zoneupdate = function(zone){
    if (zone == true) {
        document.getElementsByClassName("zone")[0].textContent = "SAFE ZONE";
        document.getElementsByClassName("zone")[0].style.color = "#29ff01";
        document.getElementsByClassName("zone")[0].style.animation = "";
    }
    else {
        document.getElementsByClassName("zone")[0].textContent = "WARNING WAR ZONE";
        document.getElementsByClassName("zone")[0].style.color = "red";
        document.getElementsByClassName("zone")[0].style.animation = "colorblink2 2s infinite";
    }
}

var isBroken = false;
var life = 100;
var angle = 127;
var shield = 33.3;
var syspower = 33.3;
var thruster = 33.3;
var reloading = false;
var reloaded = true;
var turret = "267"
var cargo = false;
var zone = false;


var spaceShip;

document.addEventListener('connected', function() {
    ws.onmessage = function (message) {

        spaceShip = JSON.parse(message.data);
        spaceShip = spaceShip.data;
        isBroken = spaceShip.broken;
        life = spaceShip.life;
        angle = spaceShip.angle;
        shield = Math.round(spaceShip.shieldPower * 1000) / 10;
        syspower = Math.round(spaceShip.systemPower * 1000) / 10;
        thruster = Math.round(spaceShip.thrusterPower * 1000) / 10;
        reloading = spaceShip.reloading;
        reloaded = spaceShip.reloaded;
        turret = spaceShip.turretAngle;
        cargo = spaceShip.cargo;
        zone = spaceShip.inSafeZone;

        gunnerupdate(reloading, reloaded, turret)
        brokenupdate(isBroken);
        shieldupdate(shield);
        syspowerupdate(syspower);
        thrusterupdate(thruster);
        directionupdate(angle);
        hpupdate(life);
        cargoupdate(cargo);
        zoneupdate(zone);
    };
});


var team1="92.222.88.16:9090?team=1&username=TheCheater&job=Engineer";
var team3="92.222.88.16:9090?team=3&username=TheCheater&job=Engineer";
var team4="92.222.88.16:9090?team=4&username=TheCheater&job=Engineer";