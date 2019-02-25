(function () {
    'use strict'
    function createElement(elementType) {
        return document.createElement(elementType);
    }
    function getElement(elementID){
        return document.getElementById(elementID);
    }
    function validateInput(e,reg){
        if(!reg.test(e.key)){
            e.preventDefault();
        }
    }
    var btn = getElement('button');
    var txt = getElement('text1');
    txt.addEventListener('keypress',function(e){
        
        var reg = new RegExp(/^[A-Za-z]+$/);
        validateInput(e,reg);
            
        console.log(e.key);
    });
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(this);
    });
})();