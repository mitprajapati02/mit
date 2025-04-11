// function getArrays(a,b){
//     let secondArray = []
//     // let inA = []
//     let answer = []
//   for ( let i = 0 ; i < a.length ; i++){
//     Element = Math.abs((b-a[i]))
//     secondArray.push(Element)
//   }
//   console.log("Element which are can be part of combination")
//   console.log(secondArray)
//   for (let i = 0; i < secondArray.length; i++) {
//     if(a.includes(secondArray[i])){
//          secondArray.pop(secondArray[i])
//     }
//   }
//   console.log("Removed element form SecondArray ")
// //   console.log(inA)
//   console.log("after Pop method")
//   console.log(secondArray)

// const { set } = require("mongoose")

//   for ( let i = 0 ; i < a.length ; i++){
//     Element = (b-a[i])
//     if(secondArray.includes(Element)){
//         firstElement = a[i]
//         secondElement = Element
//         innerArray = [firstElement,secondElement]
//         answer.push(innerArray)
//     }
//   }
//   console.log("  ##########   ")
//     console.log(answer)
// }

// getArrays([1,2,3,4,5,7,8,9,10,16,17],9)



// for (let j = i+1; j < a.length; j++){
        //     if ( (a[i]+a[j] == b)){
        //     firstElement = a[i]
        //     secondElement = a[j]
        //     innerArray = [firstElement,secondElement]
        //     answer.push(innerArray)
        //     }



// function abCd(a){
//     answer = []
//     for (let i = 1; i <= a.length; i++) {
//         if (i % 3 == 0) {
//             answer.push(a[i-1])
//             answer.push(i/3)
        
//         } else {
//             answer.push(a[i-1])
//         }
//     }
//     console.log(answer)
// }


// let a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
//     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// abCd(a)



// function letInLine(a){
//     let secondArray = []
//     let newArray = []
//     let flag = 1
//     for(let i = 0 ; i < a.length;i++){
//         if(typeof(a[i]) == "object"){
//             newArray = newArray.concat(a[i])
//             secondArray = secondArray.concat(newArray)
//             flag = 0
//         }else {
//             secondArray.push(a[i])
//         }
//     }
//     if(flag == 1){
//         return secondArray
//     }
//     else{
//         recurssion(secondArray)
//     }
 
// }

// function recurssion(a) {
//     let flag = 1
//     let newArray = []
//     let secondArray = a
//     for(let i = 0 ; i < a.length;i++){
//         if(typeof(a[i]) == "object"){
//             newArray = newArray.concat(a[i])
//             secondArray = secondArray.concat(newArray)
//             flag = 0
//         }else {
//             secondArray.push(a[i])
//         }
//     }
//     if(flag == 1){
//         return secondArray
//     }
//     else{
//         recurssion(secondArray)
//     }
// }



// function letInLine(a){
//     return a.flat(Infinity)
// }


// let finalAnswer = letInLine([1,2,3,[4,5,6],7,8,[9,[10]]])
// console.log(finalAnswer)


// function sayHello(name){
//     console.log("Hello "+name)
// }
// function callHello(){
//     sayHello("Rahul")
// }
// setTimeout(sayHello, 3000, "Rahul")
// setTimeout(callHello, 3000)


// let john = {
//     firstName: "John",
//     lastName : "Doe",
//     driveCar(){
//         // function imAFunctionNotAMethod(){
//         //     console.log(this.firstName)
//         // }
//         let imAFunctionNotAMethod = () => {
//             console.log(this.firstName)
//         }
//         imAFunctionNotAMethod.call(this)
//         console.log(this.firstName + " " + this.lastName + " is driving a car")
//     }
// }

// john.driveCar()




//  dom 
/* 
    what the dom is ? 

    methods to select elements in the dom ?

    how to Traverse the dom?
    hot to manipulate the dom?
    event handling?

*/


//  dom 
/* 
    what the dom is ? 

        use it to manipulate content , style and structure
        is one of the most unique and useful tools of javascript
        document> html > head , body 
        childnode
        parentnode
        sibling
        
        className properties of elements
    methods to select elements in the dom ?
    
    how to Traverse the dom?
    hot to manipulate the dom?
    event handling?

*/


# dom manipulation



# getElementById()
        const title = document.getElementById('id');
        console.log(title);

# getElementsByClassName()
        const listItems = document.getElementsByClassName('class');
        console.log(listItems);

# getElementsByTagName()
        const listItems = document.getElementsByTagName('li');
        console.log(listItems);

# querySelector()
        const container = document.querySelector('div');
        console.log(container);


# querySelectorAll()



const title = document.querySelector('#main-heading');

title.style.color = 'red';


const listItems = document.querySelectorAll('.list-item');
listItems.style.fontSize = '20px';
#  not work above method

for( i=0 ; i < listItems.length; i++){
    listItems[i].style.fontSize = '20px';
}


// Creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

//  adding elements
ul.appendChild(li);

// modifying the text

const firstListItem = document.querySelector('.list-item');
firstListItem.innerText = > visuble text content inside that node
firstListItem.textContent = > content show in file like that with all space and indentations
firstListItem.innerHTML = > also show the html tags


li.innerText = 'x-men';


// modifying attributes & classes

li.setAttribute('class','main-heading');
li.removeAttribute('class');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));

li.classList.add('list-items');
li.classList.remove('list-items');
li.classList.conatins('list-items'); true of false answer

// Remove Elements
li.remove();





//  navigating the dom


// document is property of window object which is the global object in the browser
/*
parentnode Traversal

let ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);
console.log(ul.parentNode.parentNode);

const html = document.documentElement;
console.log(html.parentNode); // document
console.log(html.parentElement); // null

child node Traversal

let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.children);
// indentations and line breaks are considered as text nodes
conssole.log(ul.firstChild);
console.log(ul.lastChild);
ul.firstChild.style.backgroundColor = 'red'; // error
ul.childNodes[1].style.backgroundColor = 'red';

ul.children
ul.firstElementChild
console.log(ul.lastElementChild);


// sibling Traversal

ul.previousSibling
ul.nextSibling
ul.previousElementSibling
ul.nextElementSibling
*/


/*  
        event Listeners 

        <button onclick="alert('Hello World')">Click Me</button>

        element.addEventListener('event',function)
        const buttonTwo = document.querySelector('#button-two');

        function alertBtn(){
        alert('i love javaScript');     
        }
        buttonTwo.addEventListener('click',alertBtn);

        // MOUSE EVENTS

        const newBackgroundColor = document.querySelector('.box-3');

        function changeBgColor(){
        newBackgroundColor.style.backgroundColor = 'red';
        }

        newBackgroundColor.addEventListener('mouseover',changeBgColor);


        <button class= "reveal-btn boxes">Reveal</button>
        <div class= " hidden-content boxes">You found me!</div>


        const revealBtn = document.querySelector('.reveal-btn');
        const hiddenContent = document.querySelector('.hidden-content');

        function revealContent(){
        if(hiddencontent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('hidden-content');
        }
        else{ hiddenContent.classList.add('hidden-content');}



        revealBtn.addEventListener('click',revealContent);


        .hidden-content{
        display: none;
        }
        .hidden-content.reveal-btn{
        display: block;
        }

*/


/* 
        Event Probagation 
        how event travels through the dom tree
        3 Phases
        1. Event Capturing
        2. Target
        3. Event Bubbling
*/

document.querySelector("button").addEventListener("click",function(e) {
        console.log(e.target.innerText = "clicked");
},true)

document.querySelector("div").addEventListener("click",function(e) {
        e.stopPropagation();

document.querySelector("body").addEventListener("click",function(){

},{once:true});

e.preventDefault();




// Event Delegation

// It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector.


<body>
        <ul id = "list">
                <li id="football">Football</li>
                <li id="basketball">Basketball</li>
                <li id="baseball">Baseball</li>
                <li id="tennis">Tennis</li>
                <li id="golf">Golf</li>
        </ul>
</body>



// document.querySelector("#football").addEventListener("click",function(e){
//         console.log("Football");
//         const target = e.target;
//         if(target.matches("li")){
//                 target.style.backgroundColor = "lightgrey";
//         }
// })
// document.querySelector("#tennis").addEventListener("click",function(e){
//         console.log("Football");
//         const target = e.target;
//         if(target.matches("li")){
//                 target.style.backgroundColor = "lightgrey";
//         }
// })
// document.querySelector("#golf").addEventListener("click",function(e){
//         console.log("Football");
//         const target = e.target;
//         if(target.matches("li")){
//                 target.style.backgroundColor = "lightgrey";
//         }
// })
// document.querySelector("#baskteball").addEventListener("click",function(e){
//         console.log("Football");
//         const target = e.target;
//         if(target.matches("li")){
//                 target.style.backgroundColor = "lightgrey";
//         }
// })

document.querySelector('#sports').addEventListener
('click',function(e){
        console.log(e.target.getAttribute('id') + " is clicked");

        const target = e.target;

        if(target.matches('li')){
                target.style.backgroundColor = 'lightgrey';
        }
}

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Hockey';
newSport.setAttribute('id','hockey');

sports.appendChild(newSport);