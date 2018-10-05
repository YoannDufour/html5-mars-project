(function(){
    var formConnect = document.getElementById('form-connect');
    var inputName = document.getElementById('name');
    var inputCommand = document.getElementById('command');
    var inputTeam = document.getElementById('team');
    var alert = document.getElementById('alert');

    formConnect.onsubmit = function(event){
        event.preventDefault();

        if(inputName.value == ""){
            alert.innerHTML = "Enter a name !";
            alert.style.display = "block";
        }
        else if(inputTeam.value > 4 || inputTeam.value < 1){
            alert.innerHTML = "Choose a team !";
            alert.style.display = "block";
        }
        else{
            switch(inputCommand.value){
                case 'Captain':
                    document.location.href="Artilleur.html?name=" + inputName.value + "&command=Captain&team=" + inputTeam.value ;
                    break;
                case 'Pilot' :
                    document.location.href="Artilleur.html?name=" + inputName.value + "&command=Pilot&team=" + inputTeam.value;
                    break;
                case 'Shooter' :
                    document.location.href="Artilleur.html?name=" + inputName.value + "&command=Shooter&team=" + inputTeam.value;
                    break;
                case 'Engineer' :
                    document.location.href="Artilleur.html?name=" + inputName.value + "&command=Engineer&team=" + inputTeam.value;
                    break;
                default:
                    alert.innerHTML = "Choose a job !";
                    alert.style.display = "block";
                    break;
            }
        }
    }
})();
