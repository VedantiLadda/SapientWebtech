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
//module design pattern: all methods will be kept private, only certain methods will be exposed in the end to client

//margin collapsing, cascading, borders, padding

//prototypal inheritance: read-only properties
//prototypal properties: don't have access to original object/class definition, want to add new properties
//regular object properties: weh I do have access to source code

//TDD precautions: -make sure code is not dependent on user interface
//-make sure code follows the SRP (single responsibility principle, one function, one functionality)
//-ensure that there is proper exception handling in your code, like runtime exceptions, compile time, etc.
//-ensure your functions have return statements, and that they are testable
//-integration testing, sit, is different from testing services separately

//This ensures clearer, cleaner software architecture
//You're forced to write understandable, maintainable code
//Will consume more time to develop

//unit testing ensures that a developer tests only their code, not dependent on other people's code
//unit testing libraries: jasmine, mocha, jest
//chai: assertion library
//sinon.js: mock creation library

//steps for creating unit tests: 1. all 3 have 'describe' function, to create the environment, group unit tests, actual unit testing happens inside the 'it' method
//2. before each method: allows you to set the data or mock data or mock functions. 
//3. these can be set before execution of every unit test