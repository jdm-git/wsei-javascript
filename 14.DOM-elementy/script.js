//1

let a = document.getElementsByClassName('more-divs');

function f(elems){
    let tab =[]
    for(let i =0;i<elems.length; i++) {
           tab.push(elems[i].tagName);
            
    }
    return tab
    
}

console.log(f(a))

//2


let shortList = document.getElementsByClassName('short-list')[0];

function showData(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}

showData(shortList);


//3

const numberData = document.getElementById('datasetCheck');

const variable = (takeNumbers) => {
    console.log(takeNumbers.dataset);
    const numberOne = parseInt(takeNumbers.dataset.numberone)
    const numberTwo = parseInt(takeNumbers.dataset.numbertwo)
    const numberThree =parseInt(takeNumbers.dataset.numberThree)
    let add = numberOne + numberTwo + numberThree
    let substract = numberOne - numberTwo - numberThree;
    
    return [add, substract];
}

console.log(variable(numberData));




//4

const changeText = () => {
const field = document.getElementById('spanText');
field.innerText = "Dowolny Text";
};

changeText();


//5

const swapClass = () => {
const element = document.getElementById('spanText');
element.className = 'dowolna';
};

//6

var classes = document.getElementById("classes");

function manageClasses(classes) {
    classes.classList.forEach(e => console.log(e));
    var divClass = "";
    classes.classList.forEach(e => divClass = divClass + (divClass != "" ? ' + ' : '') + e);
    console.log(divClass);
    classes.classList.remove(...classes.classList);
}

manageClasses(classes);


//7

let elems = document.querySelectorAll('#longList > li')

const addAttr = (elems) => {
    elems.forEach(e => {
        if(!e.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    });
};

//8

let el = document.getElementById("myDiv");
let obj = {
    newClass: 'string_z_parametru'
}
let sting = "mynewclass";

const fun1 = (obj,string) => {
    obj['newClass'] = string;
    console.log(obj)
}
 
fun1(obj,sting);

// console.log(obj)
const fun2 = (el,one) => {
    el.classList.add(one.NewClass);
}

fun2(el,obj);
// console.log()

//9

const numbersDiv = document.getElementById("numbers");

const addClass = () => {
    let params = Math.floor(Math.random() * 10);

    if(params % 2 == 0) numbersDiv.className = "even";
    else numbersDiv.className = "odd";
};

addClass();

//10
const listValues = document.querySelector('#longList');
    
function showTab(listValues) {
    let li = [];
    listValues.querySelectorAll('li').forEach((d) => {
        li.push(d.innerHTML);
    });
    return li;
}

//11

function switchThem(child) {
    let childs = [...child];
    childs.forEach((element) => {
        let newNmb = Math.round(Math.random() * 10);
        element.dataset.oldValue = element.innerHTML;
        element.innerHTML = newNmb;
    });
}

let child = document.querySelector('#longList').children;
switchThem(child)
});

