'use strict';
var count;
count=5;
function iLoveThis(){
    console.log('Awesome programming');
    count--;
}
function iDontLoveThis(){
    console.log('meh programming');
}
setTimeout(iLoveThis,5000);
setTimeout(iDontLoveThis,4000);
