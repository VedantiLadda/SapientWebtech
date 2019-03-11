var parent = document.querySelector('#parent');
parent.addEventListener('click',function(){
    console.log("Parent Clicked");   
});

var child = document.querySelector('#child');
child.addEventListener('click',function(e){
    console.log('Child Clicked');
    e.stopPropagation();
});

window.addEventListener("contextmenu", function(e){
    e.preventDefault();
    alert('right click has been disabled');
    console.log(e.clientX,e.clientY);
});

//fields:first name, last name, age, gender, dropdown for countries, button for submit, checkbox fo agree terms and conditions
//if I click agree, the button should be enabled. Uncheck, button should be disabled.
//for first name and last name, user should enter only:alphabets, period, space. Max len:20
//if the user is trying to enter more than 20 characters, bootstrap alert: max:20 characters, 5 sec. length
//age<100, >18, alert message
//red alert around textbox for validation
//http 2002