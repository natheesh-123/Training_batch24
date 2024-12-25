class person {

    pid: number = 101;
    pname: string = "natheesh";
    paddress: string = "dindigul";

    constructor(id: number, name: string, addr: string) {
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    pdetails() {
        console.log(`${this.pid} ${this.pname} ${this.paddress}`);
    }
}

//let obj=new person();
let obj1 = new person(101, "ram", "mumbai");
console.log(obj1.pid);
obj1.pdetails();


let obj2 = new person(101, "ram", "mumbai");
obj2.pdetails();

