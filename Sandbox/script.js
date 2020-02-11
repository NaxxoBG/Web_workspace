var totalX = 0;
var msgcontainer = document.getElementById("jokemessage");

document.onkeypress = keyPressed;
document.ondblclick = doubleClicked;


function keyPressed(e) {
    document.getElementById("keypress").innerHTML += " - " + String.fromCharCode(e.which);
}

document.onmousemove = function (e) {
    totalX += e.pageX;
    if (totalX > 30000) {
        document.getElementById("jokemessage").innerHTML = "Mnogo shavash be";
    }

    document.getElementById("mousex").innerHTML = "Mouse x: " + e.pageX;
    document.getElementById("mousey").innerHTML = "Mouse y: " + e.pageY;
}

function doubleClicked() {
    totalX = 0;
    msgcontainer.innerHTML = "";
}

function Animal() {
    this.name = "No Name";
    this.sound = "Grrr";
    this.owner = "No Owner";
}

Animal.prototype.setOwner = function (newOwner) {
    if (typeof newOwner != 'undefined') {
        this.owner = newOwner;
    } else {
        document.write("Plrase enter a valid owner");
    }
}

Animal.prototype.getOwner = function () {
    return this.owner;
}

var dog = new Animal();
dog.setOwner("Guy<br>");
document.write(dog.getOwner());

function Cat() {
    Animal.call(this);
    this.mode = "Happy";
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

Cat.prototype.getMode = function () {
    return this.mode;
}

var newCat = new Cat();

var sampArray = new Array();

sampArray[0] = 123123;
sampArray[1] = "String";

for (i in sampArray) {
    document.write(sampArray[i] + "<br>");
}