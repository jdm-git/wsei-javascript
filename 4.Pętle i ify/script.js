// const firstNumber = 55;
// const secondNumber = 33;

// if(firstNumber > secondNumber)
//     console.log(firstNumber);
// else
//     console.log(secondNumber);

    //2

const a = 1;
const b = 5;
const c = 4;

if(a > b && a > c )
    console.log(a);
else if(b > a && b > c)
    console.log(b);
else
    console.log(c);

//3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

//4

let result= 0;

for (let i = 0; i <= 10; i++) {
   result += i;
}

console.log(result);

//5

let n = 5;

for ( let i = 0; i <= n; i++) {
   if(i % 2 == 0){
       console.log(i+" - parzysta");
   } else {       
       console.log(i+" - nieparzysta");
   }
}

//6

for (let x = 1; x <= 10; x++) {
    for (let z = 1; z <= 10; z++) {
        console.log("x= " + x + ", z= " + z);
    }
}

//7

console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

// Z A D A N I E  8.a

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Z A D A N I E  8.b

let star = ' *';

for(let x = 0; x < 5; x++) {
 var result = '';
 for(y = 0; y < 5 - x; y++) {
 result += ' ';
 }
 for(z = 0; z < x + 1; z++) {
 result += star;
 }
 console.log(result);
 }

// Z A D A N I E  8.c

  let tree = '';
  const height = 5;
  let stars = 1;
  for (let row = 1; row <= height; row++) {
    tree += ' '.repeat(height-row);
    tree += '*'.repeat(stars) + '\n';
    stars += 2;
  }
  console.log(tree);

// Z A D A N I E  8.d

let show = '';
  let show1 = '';
  const height = 5;
  for (let row = 1; row <= height; row++) {
    show += '*'.repeat(row)
    for (let i = row; i < height; i++) {
      show += i;
    }
    show += '\n';

    show1 += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
      show1 += i;
    }
    show1 += '\n';
  }
  console.log(show);
  console.log("-".repeat(height));
  console.log(show1);

// Z A D A N I E  8.e

  var dart = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    dart += ' '.repeat(size-i);
    dart += '* '.repeat(i) + '\n';
  }
  for (let i = 0; i < (size-2); i++) {
    dart += " ".repeat(size-1);
    dart += "* \n";
  }
  console.log(dart);