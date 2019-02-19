function registerUser(){
    var fn=document.getElementById('fn').value;
    var ln=document.getElementById('ln').value;
    var pn=document.getElementById('pn').value;
    if(document.getElementById('male').checked){
        var radio = document.getElementById('male').value;
    }
    if(document.getElementById('female').checked){
        var radio = document.getElementById('female').value;
    }
    var profile={
        name:fn+" "+ln,
        phoneNumber:pn,
        gender:radio
    };
    console.log(profile);
}
//Function size should be around 10 lines
//Always recommended to start the first line of the file with "use strict"
//Global variables: declare them in line 2, no need to assign data, just declare as comma-separated variables
//JS - no classes, only objects
//How does Js work - from compiler design to syntax to memory allocation
//mdn - js reference
//javascript jackal, js sexy (links for reference)
//john papa js reference
//scotch.io
//risingstack.io
