var ws;

(function(){
var usrName = getParameterByName('name');
var usrJob = getParameterByName('command');
var usrTeam = getParameterByName('team');


ws = new WebSocket('ws://92.222.88.16:9090?team=' + usrTeam + '&username=' + usrName + '&job='+ usrJob);

ws.onopen = function () {
    console.log("socket open with server !");
}


function getParameterByName(name){
    var tmp = window.location.search.substr(1).split('&');
    var parameters = [];

    for (var i = 0; i < tmp.length; i++) {
        var x = tmp[ i ].split('=');
        parameters[x[0]] = x[1];
    }

    return parameters[name];
}
})();
