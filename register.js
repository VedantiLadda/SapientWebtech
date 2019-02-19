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
    console.log(fn+" "+ln+" "+pn+" "+radio);
}