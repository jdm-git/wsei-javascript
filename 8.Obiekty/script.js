/*let car = {
    name: "Audi",
    model: "A4",
    year: 2005
    nameChange: function(e){
        this.name = e;
    }
}
car.nameChange("Polonez");
console.log(car);

//3
let object = {
    sum: 0,
    sumFunc: function(tab){
        let result = 0;
        for(let i = 0;tab.length;i++)
        {
            result+=tab[i];
        }
        this.sum = result;
    }
}
object.sumFunc([1,2,3,4,5]);
console.log(object.sum);
*/
//4 ,5, 6
let car = {
    name: "BMW",
    age: 12,
    object: {
        name: "Nazwa",
        age: 11
    }
}
for(i in car){
    console.log(`${i} : ${car[i]}`);
}
for(i in car.object) {
    console.log(`${i} : ${car.object[i]}`);
}
car.price = 200;
car.sayHello = () => console.log("Hello");
car.sayHello();
console.log(car.price);