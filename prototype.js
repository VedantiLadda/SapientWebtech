// function f1(){};
// function f2(){};
// function f3(){};

// f3.prototype = Object.create(f1.prototype);
// f1.prototype.print="hello";
// var ins = new f3();
// var ins2 = new f1();
// // console.log = function(){};

// console.log(ins.print);
// var obj1 = new Object();
// obj1.name="kiran";
// var obj2 = new Object(obj1);
// console.log(obj1.hasOwnProperty('name'));
// console.log(obj2.hasOwnProperty('constructor'));
// console.log(obj2.hasOwnProperty('name'));

//toString() inherited fom Object prototype
//user created objects inherit properties and methods of Object prototype

var animal, rabbit;
animal = {
    eats:true
};

rabbit = {
    jumps:true
};

rabbit.__proto__=animal;
//animal.__proto__=rabbit;//cyclic proto value error

animal.__proto__=true;//will ignore

//if i don't have access to my base object creation, but I want to extend its behaviour: use prototypes
//have direct access to object defintion: add property directly to the object

let user={
    name:"john",
    surname:"smith",

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__:user,
    isAdmin: true
}

console.log(admin.fullName);

admin.fullName = "Alice Cooper";
console.log(user.fullName);

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
    }
    return 2;
}

