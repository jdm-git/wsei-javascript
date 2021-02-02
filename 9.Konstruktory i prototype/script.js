function Person(name,surname,age,country,city,language){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
}
Person.prototype.changeAge = function (newAge){
    this.age = newAge
}
Person.prototype.changeCity = function(newCity){
    this.city = newCity
}

let one = new Person ('Witold', 'Lipowski', 69,'Poland', 'Kraków', 'Polish' )
let two = new Person ('Tomasz', 'Fajnie', 12, 'United States', 'Dubai', 'Javanese')

console.log(one)
one.changeAge(23)
two.changeCity("Kraków");

console.log(one,two);


function Calc(){
    this.memory = [];
    this.showMemory = function(){
        console.log(this.memory)
    }
    this.clearMemory = function () {
        this.memory = []
    }
    this.add = function (a,b){
        let equation = `${a} + ${b} = ${a +b}`
        console.log(equation)
        this.memory.push(equation)
    }
}
function Game ()
{
    Game.prototype.number = null
    this.rand = function () {
        return setInterval(()=>{
            let rand = Math.floor(Math.random() *10 )+1;
            game_one.__proto__.number = rand;
            console.log(this.__proto__.number)
        }, 1000)
    }
    this.check = function (){
        return setInterval (() =>{
            console.log(this.__proto__.number);
            if(this.__proto__.number >= 5){
                console.log('finished');
                clearInterval(first);
                clearInterval(second)
            }
        }, 1000)
    }
}
let game_one = new Game();
let game_two = new Game();

var first = game_one.rand();
var second = game_two.check()
