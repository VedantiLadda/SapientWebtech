var x=30;
function testme(){
    var x=20;
    if(true){
        let x=10;
        console.log(x);
    }
    console.log(x);
}
testme();
console.log(x);

class Student{
    constructor(firstName,lastName="kennedy",age=50){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullName(){
        console.log(this.firstName+" "+this.lastName);
    }
}

class Department extends Student{
    constructor(firstName,lastName,age,deptName){
        super(firstName,lastName,age);
        this.deptName=deptName;
    }
    getFullName(){
        console.log(this.firstName+" "+this.lastName+" "+this.deptName);
    }
}

let student = new Student('john','kelly',35);
student.getFullName();
var dept = new Department('ruby','tuesday',21);
dept.getFullName();
var dept1 = new Department('ruby','tuesday',21,'hh');

let m = new Map();
m.set('key','west');
m.set('key1','value1');
m.set('key','valueUpdate');
m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
});

//sets: unique values

let s = new Set();

var user = {
    name:'Vedanti',
    age:'21',
    gender:'f'
};

var {name,age} = {...user};
console.log(name);
console.log(age);
//extracting properties of objects as variables, destructuring an object
 var [a,b] = [1,2];

