function Factory(){
    this.createVehicle = function(type){
        var vehicle;
    }
}

function car(){
    this.numberOfDoors=4;
    this.numberOfTires=4;
}

function bike(){
    this.numberOfTires=2;
}

var x = new Factory();
x.createVehicle("car");