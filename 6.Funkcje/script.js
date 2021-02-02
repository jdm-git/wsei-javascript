const weDidIt = () => {
    console.log("Udalo sie!");

}
weDidIt();

//2

const funcWithParams = (param) => {
    console.log(param);
}

funcWithParams(12);


//3
const showArray = (x) => {
    return x;
}

console.log(showArray([1,2,3,4]));


//4

var counter = 1;
var smth = "hello world";

function write(smth) {
  console.log(smth);
  counter++;
  if (counter > 5) {
    clearInterval(int);
    console.log("Koniec.");
  }
}
var int = setInterval(write, 3000, smth); 