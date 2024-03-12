class Person{
    constructor(name){
        this.name = name;
    }

    sayMyname(){
        return ` Hello World! My name is ${this.name}`;
    }
}

module.exports = {
    Person,

};