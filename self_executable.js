(()=>{
    "use strict";
    //filter:
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var evenArr = arr.filter((y, index) => {
        return y % 2 === 0;
    });
    console.log(evenArr);
    var evenArr1 = arr.filter(y => y % 2 === 0);
    console.log(evenArr1);
    const obj = { a: 10 };
    obj.a = 20;
    console.log(obj.a);
    {
        var a = 3;
        const x = a;
        a = 3;
        console.log(x);
    }
    var x = 2;

    //call, bind, apply:
    var obj = {name:"kiran"};
    var student = {name:"ra"};
    var greeting = function(a,b,c){
        console.log("welcome "+ this.name + a+b+c);
    };
    greeting.call(obj,"a","b","c");
    greeting.apply(student,["a","b","c"]);
    let funcUser = greeting.bind(obj,"t","f","d");
    funcUser("a","b","c");

    //generators:
    function * generatorFunction(){
        console.log('This will be executed first');
        yield "Hello";
        console.log('This will be executed second');
        yield 'World!';
    }

    const generatorObject = generatorFunction();
    console.log(generatorObject.next().value);
    console.log(generatorObject.next().value);
    console.log(generatorObject.next().value);

    function* powerSeries(number,power){
        let base = number;
        while(true){
            yield Math.pow(base,power);
            base++;
        }
    }
    let genObj = powerSeries(2,2);
    console.log(genObj.next().value);
    console.log(genObj.next().value);
    console.log(genObj.next().value);
})();
