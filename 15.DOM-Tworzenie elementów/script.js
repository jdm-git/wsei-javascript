
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
firstOlList.id = 'firstList';

const firstBtn = document.createElement('button');
firstBtn.id = 'firstBtn';
firstBtn.innerText = 'First list';

dataTable.forEach((e) => {
    let liElement = document.createElement('li');
    liElement.innerText = e;

    firstOlList.appendChild(liElement);
});

const secondOlList = document.createElement('ol');
secondOlList.id = 'secondList';

const secondBtn = document.createElement('button');
secondBtn.id = 'secondBtn';
secondBtn.innerText = 'Second list';
secondBtn.disabled = true;

root.appendChild(firstOlList);
root.appendChild(firstBtn);
root.appendChild(secondOlList);
root.appendChild(secondBtn);

const transferLiElementToSecondList = (firstOlList, secondOlList) => {
    let firstList = firstOlList.getElementsByTagName('li');
    let secondList = secondOlList.getElementsByTagName('li');
    let lastElem = firstList[firstList.length - 1];
    let newElement = document.createElement('li');
    newElement = lastElem.innerText;

    secondList.appendChild(newElement);
    firstOlList.removeChild(lastElem);

}

firstBtn.addEventListener('click', transferLiElementToSecondList(firstOlList, secondOlList));

