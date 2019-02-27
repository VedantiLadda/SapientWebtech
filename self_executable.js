(()=>{
    "use strict";
    var arr = [1,2,3,4,5,6,7,8,9];
    var evenArr = arr.filter((y,index)=>{
        return y%2===0;
    });
    console.log(evenArr);
    var evenArr1 = arr.filter(y=>y%2===0);
    console.log(evenArr1);
    const obj = {a:10};
    obj.a = 20;
    console.log(obj.a);
    {
       var a=3;
    const x=a;
    a=3;
    console.log(x);

    }
    var x=2;
})();
