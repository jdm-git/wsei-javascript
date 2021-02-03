
let root = document.querySelector('#root');

let newElement = document.createElement('div');
newElement.innerHTML = "To jest nowy element";
root.appendChild(newElement);

//2

const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
  const myList = document.createElement('ol');
  myList.id = 'myList';

myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElement.append(myList);
document.body.insertBefore(newElement, document.getElementById('root'));  

//3


newElement.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if(x % 2 === 1)
            myList.removeChild(el);
    })
})

//4 

var btn = document.createElement('button');
btn.innerText = 'Click&Hide';
btn.addEventListener('click', (event) => event.target.remove());
root.appendChild(btn);

//5

let random = Math.round(Math.random() * 10);

  for (let a = 0; a < random; a++) {
      let someDiv = document.createElement('div');

      someDiv.innerHTML = `to jest div numer ${a}`;
      root.appendChild(someDiv);
  }

  //6

  const myNewObjStr = { 
    div1: 'to jest div', 
    span1: 'to jest span', 
    div2: { 
      div3: 'to jest div', 
    }, 
    span2: 'to jest span', 
  }

  const r00t = document.getElementById('root');
  
  const firstDiv = document.createElement('div');
firstDiv.innerText = myNewObjStr.div1;

const firstSpan = document.createElement('span');
firstSpan.innerText = myNewObjStr.span1;

firstDiv.append(firstSpan);

document.body.append(firstDiv, r00t);

const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
thirdDiv.innerText = myNewObjStr.div2.div3;

const secondSpan = document.createElement('span');
secondSpan.innerText = myNewObjStr.span2;

secondDiv.append(thirdDiv);
secondDiv.append(secondSpan);

document.body.append(secondDiv, r00t);

//7
const dataTable = ['abc', 'efg', 'hij', 'klm','nop','rst'];
const firstOlList = document.createElement('ol');

const firstBtn = document.createElement('button');
firstBtn.innerText = 'First list';

dataTable.forEach((e) => {
    let liElement = document.createElement('li');
    liElement.innerText = e;

    firstOlList.appendChild(liElement);
});

const secondOlList = document.createElement('ol');

const secondBtn = document.createElement('button');
secondBtn.innerText = 'Second list';
secondBtn.disabled = true;

root.appendChild(firstOlList);
root.appendChild(firstBtn);
root.appendChild(secondOlList);
root.appendChild(secondBtn);
let li = document.createElement('li');


const transferLiElementToSecondList = () => {

  let firstLis = firstOlList.getElementsByTagName('li');
  let lastLi = firstLis[firstLis.length - 1];
  secondOlList.appendChild(lastLi);
  
  if(secondOlList.getElementsByTagName('li').length > 0)
    secondBtn.disabled = false;

  if(firstOlList.getElementsByTagName('li').length < 1)
    firstBtn.disabled = true;
}

const transferLiElementToFirstList = () => {
  let secondLis = secondOlList.getElementsByTagName('li');
  let lastLi = secondLis[secondLis.length - 1];
  firstOlList.appendChild(lastLi);

  if(firstOlList.getElementsByTagName('li').length > 0)
    firstBtn.disabled = false;
  if(secondOlList.getElementsByTagName('li').length < 1)
    secondBtn.disabled = true;
}

firstBtn.addEventListener("click",transferLiElementToSecondList);
secondBtn.addEventListener('click', transferLiElementToFirstList);


//8

// const fieldset = document.createElement('fieldset');
// const inputs = [{
//     label: 'Element',
//     id: 'el',
//     type: 'text'
// }, {
//     label: 'Tekst',
//     id: 'text',
//     type: 'text'
// }, {
//     label: 'Kolor',
//     id: 'color',
//     type: 'color'
// }, {
//     label: 'Ile razy',
//     id: 'count',
//     type: 'number'
// }, {
//     label: 'Utwórz',
//     type: 'submit'
// }];

// inputs.forEach(v => {
//     const elInput = document.createElement('input');
//     let label = document.createElement('hr');
//     elInput.style.display = 'block';
//     elInput.type = v.type;
//     elInput.id = v.id || null;

//     if (v.type === 'submit') {
//         elInput.value = v.label;
//         elInput.addEventListener('click', (e) => {
//             createElement(e);
//         });
//     } else {
//         label = document.createElement('label');
//         label.innerText = v.label;
//         label.for = v.id;
//     }
//     fieldset.appendChild(label);

//     fieldset.appendChild(elInput);
// });

// function createElement(e) {
//     e.preventDefault();
//     let el = null;

//     inputs.forEach((v) => {
//         const value = document.getElementById(v.id)?.value;

//         switch (v.id) {
//             case 'el': el = document.createElement(value); break;
//             case 'text': el.innerText = value; break;
//             case 'color': el.style.color = value; break;
//             case 'count': for (let i = 1; i <= Number(value); i++) {
//                 document.body.appendChild(el.cloneNode(true));
//             } break;
//         }
//     });
// }

// document.body.appendChild(fieldset);


//9


// const fieldset = document.createElement('fieldset');
// const table = document.createElement('table');

// const inputs = [{
//     label: 'Imię',
//     id: 'fName',
//     type: 'text'
// }, {
//     label: 'Nazwisko',
//     id: 'name',
//     type: 'text'
// }, {
//     label: 'Wiek',
//     id: 'age',
//     type: 'number'
// }, {
//     label: 'Ilość dzieci',
//     id: 'kids',
//     type: 'number'
// }, {
//     label: 'Płeć',
//     id: 'gender',
//     type: 'text'
// }, {
//     label: 'Więcej',
//     type: 'submit',
//     id: 'more'
// }, {
//     label: 'Utwórz',
//     type: 'submit',
//     id: 'print'
// }];

// let data = [];

// inputs.forEach(v => {
//     const elInput = document.createElement('input');
//     let label = document.createElement('hr');
//     elInput.style.display = 'block';
//     elInput.type = v.type;
//     elInput.id = v.id || null;

//     if (v.type === 'submit') {
//         elInput.value = v.label;
//         elInput.addEventListener('click', (e) => {
//             if (v.id === 'print') {
//                 renderTable(e);
//             } else {
//                 addRow();
//             }
//         });
//     } else {
//         label = document.createElement('label');
//         label.innerText = v.label;
//         label.for = v.id;
//     }
//     fieldset.appendChild(label);

//     fieldset.appendChild(elInput);
// });

// function addRow() {
//     const row = [];
//     inputs.forEach((v) => {
//         if (v.type !== 'submit') {
//             const value = document.getElementById(v.id)?.value;
//             row.push(value);
//         }
//     });
//     data.push(row);
    
//     if (table.children.length > 0) {
//         renderTable();
//     }
// }

// function renderTable(e) {
//     e?.preventDefault();
//     table.innerHTML = '';
//     if (data.length > 0) {
//         const dataCells = inputs.filter(v => v.type !== 'submit');
        
//         const thead = document.createElement('thead');
//         dataCells.forEach(v => {
//             const th = document.createElement('th');
//             th.innerText = v.label;
//             thead.appendChild(th);
//         });
//         table.appendChild(thead);
       
//         const tbody = document.createElement('tbody');
//         capitalize();
//         data.forEach((v, i) => {
//             const tr = document.createElement('tr');
//             v.forEach(val => {
//                 const td = document.createElement('td');
//                 td.innerText = val;
//                 tr.appendChild(td);
//             })
//             const removeButton = document.createElement('button');
//             removeButton.innerText = 'Usuń';
//             removeButton.addEventListener('click', (e) => {
//                 data.splice(i, 1);
//                 renderTable();
//             });
//             tr.appendChild(removeButton);
//             tbody.appendChild(tr);
//         });
//         table.appendChild(tbody);
//     }
// }

// document.body.appendChild(fieldset);
// document.body.appendChild(table);

// //10

// function capitalize() {
//   data = data.map(dat =>
//       dat.map(v => v.charAt(0).toUpperCase() + v.slice(1))
//   );
// }

// //11
// function extarctNumbersAndMultiplyToDivs(str) {
//   const numbers = str.match(/[0-9]+/g);
//   if (numbers.length > 0) {
//       console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

//       const mmultiplier = numbers.reduce((a, b) => Number(a) * Number(b));

//       for (let i = 0; i < mmultiplier; i++) {
//           const div = document.createElement('div');
//           div.innerText = `div${i}`;
//           document.body.appendChild(div);
//       }
//   }
// }

// extarctNumbersAndMultiplyToDivs('foo1bar2test10nice2');

//12

function Ala(str){
  this.string = str;
  this.checkAla = () =>{
    if(this.string.includes('Ala'))
      this.string = this.string.replaceAll('Ala', 'Ola');
    else{
      const div = document.createElement('div');
      div.innerText = "'Ala' nie wystepuje w tekscie";
      root.appendChild(div);
    }
  }
}
const ala = new Ala("Ala Ma Kota");
ala.checkAla();


//13


const dataArray = ['Lorem', 'L0r3m', 'g8 b8 m8', 'foo2bar4ever'];
function returnHowManyLetters(arr) {
    let numberCounter = 0;
    arr.forEach(v => {
        const str = v.replace(/[^a-z]/gi, '');
        numberCounter += str.length;
    });
    return numberCounter;
}

function sumNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat();
    return allNumbers.reduce((a, b) => Number(a) + Number(b));
}

function avgNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat().filter(v => v);
    const sum = allNumbers.reduce((a, b) => Number(a) + Number(b));
    return sum / allNumbers.length;
}

console.log(returnHowManyLetters(dataArray));
console.log(sumNumbers(dataArray));
console.log(avgNumbers(dataArray));


//14

const obj = {
  name: '',
  surname: '',
  age: ''
}
console.log(obj);
const modifyObj = (obj, newName, newSurname, newAge) => {
  obj.name = newName,
  obj.surname = newSurname,
  obj.age = newAge
  console.log(obj);
  if(obj.name.length > 5 || obj.surname.length > 5){
    const btn = document.createElement('button');
    btn.innerText = "Restore props";
    btn.addEventListener('click', () => {
      obj.name =  '';
      obj.surname = '';
      obj.age =  '';
      console.log(obj);
    })
    root.appendChild(btn);
    
    
  }
}
modifyObj(obj, 'Kubaaaaa', 'Meus',59);