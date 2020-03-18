//Module Wrapper function

// (function (exports,require,module,__filename,__dirname){

// })
// console.log(__dirname,__filename);



// const prson={
//     name:"seenam",
//     age:30
// }
//module.export=person;



class Person{
    constructor(name,age){
        this.name=name; 
        this.age=age;
    }


greeting(){
    console.log(`My name is ${this.name} and age is${this.age}`);
}
}
module.exports=Person;