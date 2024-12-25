var person = /** @class */ (function () {
    function person(id, name, addr) {
        this.pid = 101;
        this.pname = "natheesh";
        this.paddress = "dindigul";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    person.prototype.pdetails = function () {
        console.log("".concat(this.pid, " ").concat(this.pname, " ").concat(this.paddress));
    };
    return person;
}());
//let obj=new person();
var obj1 = new person(101, "ram", "mumbai");
console.log(obj1.pid);
obj1.pdetails();
var obj2 = new person(101, "ram", "mumbai");
obj2.pdetails();
