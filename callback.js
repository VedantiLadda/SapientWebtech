'use strict';
var initValue;
initValue = 5;

function counter(callback){
    if(initValue > 0){
        console.log(initValue);
        //some event to be executed
        initValue--;
        callback(callback);
    }
}

function init(cb){
    cb(cb);
}
init(counter);

