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
//Wrap entire code in an immediate function, so that global variables get deleted and window.object size does not increase too much, global environment
//does not get polluted
//Always recommended to start the first line of the immediate function with "use strict"
//variables: declare them in line 2, no need to assign data, just declare as comma-separated variables
//avoid callbakcs as much as possible, replace with arrow
//read only variables: const, no assignment (not in objects), used for string and variables

//JS - no classes, only objects
//How does Js work - from compiler design to syntax to memory allocation
//mdn - js reference
//javascript jackal, js sexy (links for reference)
//john papa js reference
//scotch.io
//risingstack.io
//browser creates DOM tree, submits it to js (javascript-compatible object model)
//"" and '' are the same, use one or the other
//` tics for declaring strings, not same as quotes
//pay attention to naming conventions for variables and functions, even loop variables
//will not give errors for redeclaration of variables or functions, later definitions override previous ones, use strict does not catch this
//all declarations are hoisted to the top of the page, not assignments!!

//JS is single-threaded, switches fast and uses time between actions
//polling-basis in callback queue
//function can be passed as a parameter to another function, known as callback
//blocking, non-blocking requests
//== : auto casts, not strict comparison 1==true is true
//===: very strict, like == in other languages

//self-executing functions: anonymous, own context for execution, do not contain return keywords normally 
//constructors in js: context of the function, how to use 'this' is decided at the time of calling the function, on the basis of who is calling the function
//during hoisting, only the function definition is stored, no space saved for variables, or context decided.
//files upload: content-type: multipart form data
//document.querySelector: can perform all selectors' actions, can use CSS selectors too, regex, etc.
//event bubbling: stop events from bubbling from child to parent with stopPropagation()
//'true' property makes it bubble from top to bottom
//ES6: Block level scope, iterators, promises, arrow operator, classes, modules, generators, maps, sets
//scopes:global, local, lexical, block
//no access modifiers in js
//declare methods of the class without function keyword
//default parameters

//prototypes: not scope based, above scope at the Object base level.
//callback hell
//function chaining
//closures

//generators: special class of functions, can pause and resume iterations
//produces sequence of results, generates series of values, lazy evaluation