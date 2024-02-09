export const name="张三";
export const age=20;
export const sayName=function(){
    console.log(name);
}
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}
export default Person;