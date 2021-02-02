const firstArray = [1,2,3,4]
console.log(firstArray);

//2

const tab2 = [1, 2, "te", 3, 4, 5, "kst", 6, 7, 8, 9, "XteD3", 0];
// . 1 .  
  console.log(tab2[0], tab2[1]); 
// . 2 .
  console.log(tab2[tab2.length-1]);
// . 3 .
  console.log(tab2);
// . 4 .
  for (let x = 1; x < tab2.length - 1; x += 2) {
  console.log(tab2[x]);
  }
// . 5 .
  console.log(tab2.filter((value) => typeof value === 'string'));
// . 6 .
  console.log(tab2.filter((value) => typeof value === 'number'));
//3

const numberArray = [1,3,5,3,4,5,7,8,9,756,321,6];

let sum = 0;
let diff = 0;
let avg = 0;
numberArray.forEach((n) => {
   sum += n; 
})
console.log(sum);

numberArray.forEach((n) => {
    diff -= n; 
 })
 console.log(diff);


 console.log(sum/numberArray.length);

 console.log(numberArray.filter(x => x % 2 == 0));
 // . 5 .
   console.log(numberArray.filter(x => x % 2 != 0));
 // . 6 .
   let max = Math.max(...numbers);
   console.log(max);
 // . 7 . 
   let min = Math.min(...numbers);
   console.log(min);
 // . 8 .
   numbers.reverse();
   console.log(numbers);

//4

function sumOfNum(tab){
    return tab.reduce((a,b) => (a+b));
}
console.log(sumOfNum([1,2,3,4,5]));


//5

function avgArray(tab){
    let average = tab.reduce((a, b) => a += b) / tab.length;

    tab.map((a) => console.log(a * average));
}
avgArray([1,2,3,4,5]);

//6

function evenNumbersSum(tab){
    let average = (array) => array.reduce((a, b) => a += b) / array.length;
    avg = average(tab);
    let x = tab.filter(x => x % 2 == 0);

   return ( x.reduce((a,b) => a += b) / x.length);
}
console.log(evenNumbersSum([6,7,8,9,10]));

//7


function sortArray(tab){
    return (tab.sort((a, b) => a - b));
}
console.log(sortArray([11,1,4,44,18]));

//8

let exampleArrayA = [7, 6, 3, 4];
let exampleArrayB = [5, 6, 7, 8];

function sumOfArraysIndex(arrayA, arrayB){
    let array = [];
    arrayA.forEach((num, i) =>{
        array.push(num + arrayB[i]);
    });
    return array;
}

console.log(sumOfArraysIndex(exampleArrayA, exampleArrayB));

//9
function zamianaZnakow(array1){
    for(let i = 0;i<array1.length;i++){
        array1[i]=array1[i]*(-1);
    }
}
console.log(zamianaZnakow(exampleArrayA));