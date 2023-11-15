class Hamster {
   
    constructor(owner, name, price) {
        this.owner = "";
        this.name = name;
        this.price = 15;       

    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price;
    }
  
}
class Person {
   
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = age || 0;
        this.height = 0; 
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount =0;
        this.hamster = "Gus"
        
    }
    getName() {
        return this.name;     
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet(name){
        console.log(`hi ${name}`);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount= this.bankAccount + 10;
    }
    buyGus(){
        this.hamster= "Timmy"
    }
    buyHamster(hamster){
        this.hamster = hamster;       
        this.hamsters = [this.hamster];
        this.mood = this.mood+10;
        this.bankAccount = this.bankAccount - hamster;
        
    }

}
const letisha = new Person("kidanu")
// console.log(letisha);
letisha.eat();
// console.log(letisha);
letisha.exercise();
// console.log(letisha);
letisha.ageUp();
// console.log(letisha);
// console.log(letisha.hamsters);
letisha.buyHamster(1);
console.log(letisha);
console.log(letisha.hamsters);
const timmy = new Person("Timmy", 5);
for(let i =1; i<=5; i++){
    timmy.eat();
}

for(let i =1; i<=5; i++){
    timmy.exercise();
}
// console.log(timmy);
for(let i =1; i<=4; i++){
    timmy.ageUp();
}
// console.log(timmy);
timmy.buyGus();
// console.log(timmy);
for(let i =1; i<=6; i++){
    timmy.ageUp();
}
// console.log(timmy);
for(let i =1; i<=2; i++){
    timmy.eat();
}

for(let i =1; i<=2; i++){
    timmy.exercise();
}
console.log(timmy);