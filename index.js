// accessing elements using id class name and tag name
document.getElementById('h1').innerHTML = "hai manu";
document.getElementById('h2').innerHTML = "hai libin";
document.getElementsByClassName('h3')[0].innerHTML = "hai streben";
document.getElementsByClassName('h3')[1].innerHTML = "hai wesearch";

// accessing properties of css
document.getElementById('h1').style.color = "yellow";
document.getElementById('h2').style.color = "blue  ";
document.getElementsByClassName('h3')[0].style.color = "pink";
document.getElementsByClassName('h3')[1].style.color = "green";    

//variables
var text = document.getElementById('h1');
text.innerHTML = "hai manu ashokan";
text.style.color = "red";
text.style.fontSize = "55px";

//arithmetic operations
var a = 10;
var b = 15;
var c = a + b;
//var c = a - b;
//var c = a * b;
//var c = a / b;

//let,const
document.write(a);
document.write(b);
document.write(c);

//array operation
let myArray1 = [ "a","b","c"];
console.log(myArray1);

//push
myArray1.push("d");
console.log(myArray1);

//pop
myArray1.pop();
console.log(myArray1);

//unshift
myArray1.unshift("z");
console.log(myArray1);

//shift
myArray1.shift();
console.log(myArray1);

//splice
myArray1.splice(0,1);
console.log(myArray1);

//
myArray1.splice(2,0,"a","b");
console.log(myArray1);

//slice
let myArray2 = myArray1.slice(1);
console.log(myArray2);

//if conditions
let johnAge = 55;
if(johnAge == 45) {
    console.log("happy bday");
} else if (johnAge < 45) {
    console.log("you are young");
}else {
    console.log("you are old");
}

//switch
let friuts = "banana";
switch(friuts) {
    case "apple":
        console.log("i brought apple");
        break;
    case "orange":
        console.log("i brought orange");
        break;
    case "banana":
        console.log("i brought banana");
        break;
    default:
        console.log("no fruits found");
        break;
}

//loops
console.log("for-loop");
let count = 10;
for(let j =1 ; j <= 10 ; j++) {
    console.log(j);
}

//while
console.log("while-loop");
let count1 = 20;
while(count1 <= 30) {
    console.log(count1);
    count1++;
}

//do
console.log("do-while-loop");
let count3 = 40 ;
do {
    console.log(count3);
    count3++;
}while(count3 <= 50)

//array looping
let array3 = ["m","a","n","u"];
console.log(array3);
for(let i = 0;i <= array3.length; i++) {
    console.log(array3[i]);
}

//object looping
let myObj1 = {
    firstName : "Manu",
    lastName : "Ashokan"
}
for (let k = 1 ;k < myObj1.length ; k++) {
    console.log(myObj1[k]);
}

//alert message
function onAlert() {
    alert("you have clicked the button");
    }
// onAlert();
//add evenetlistner
let btn1 = document.getElementById("btn1");
addEventListener("click",myFunn)
function myFunn(){
    alert("you have clicked the function");
}

//spread operator (...variable name)
//object spreading
const globalPlayer = {
    id:0,
    name:"bot",
    powerLevel:100,
};
 const player1 = {...globalPlayer};

 player1.powerLevel = 500;
 console.log(player1);
 console.log(globalPlayer);
 //we can manipulate the value of an obejct and an array 
 //but we can't manipulate the value of a string and integers,
 //because it is imutabale

//array spreading
 const globalPlayer1 = ["Manu","Ashokan","Amala"];
 const globalPlayer2 = ["Libin","George","Gokul"];
 console.log(globalPlayer1);
 console.log(globalPlayer2);
 //normal concatination
 const player2 = globalPlayer1.concat(globalPlayer2);
 console.log(player2);
 //using spread operater
 const player3 = [...globalPlayer1,...globalPlayer2];
 console.log(player3);
//array pushing
 const player4 = [...globalPlayer1,"Ashokan"];
 console.log(player4);

 //rest operater 
 console.log(globalPlayer1[0]);
 console.log(globalPlayer1[1]);
 console.log(globalPlayer1[2]);

 //array destructuring
 const [son,father,daughter] = globalPlayer1;
 console.log(son);
 console.log(daughter);
 console.log(father);

 //object destucturing
 const globalPlayer4 = {
    id:0,
    name:"bot",
    powerLevel:100,
};
console.log(globalPlayer4);
//const {name,id,powerLevel} = globalPlayer4;
// console.log(id);
// console.log(name);
// console.log(powerLevel);

//rest operater
const { id,...rest} = globalPlayer4;
console.log(id);
console.log(rest);

//arrow functions detailing
const newFun = () => console.log("Arrow function Running");
newFun();
const newAddition = (value) => value + 10 ;
console.log(newAddition(10));

//for each
const globalPlayer6 = [{
    id:1,
    name:"bot1",
    powerLevel:100,
},
{
    id:2,
    name:"bot2",
    powerLevel:200,
},
{
    id:3,
    name:"bot3",
    powerLevel:300,
}
];
// for(let i=0;i<= globalPlayer6.length;i++ ){
//     console.log(globalPlayer6[i].name);
// }
globalPlayer6.forEach((value,index,array) => {
    console.log(value.id);   
    console.log(value.name);   
    console.log(value.powerLevel);   
    console.log(index);
    console.log(array);   


})

//map methods
const globalPlayer7 = [{
    id:1,
    name:"bot1",
    powerLevel:100,
},
{
    id:2,
    name:"bot2",
    powerLevel:200,
},
{
    id:3,
    name:"bot3",
    powerLevel:300,
}
];
//const newArray1 = globalPlayer7.map((value) => value.id);
// console.log(newArray1);

//filter methods
const newArray1  = globalPlayer7.filter((value) => value.id === 3 && value.powerLevel ===300);
console.log(newArray1);

//reduce
const numberArray =[10,20,30,5,40,50];
let total = 0;
const newArray2 = numberArray.reduce((total,value) => total + value,0);
console.log(newArray2);

//find
const newObj = globalPlayer7.find((value) => value.id === 3);
console.log(newObj);

//sort
const sortedNumber = numberArray.sort((a,b) => a-b);
console.log(numberArray);

//QUERY SELECTORS
//var query = document.getElementById("header").innerHTML = "QUERY SELECTER";
document.querySelector("#header").style.color = "red";
document.querySelector(".header").innerHTML = "QUERY SELECTER";


//set time out . it is basically asynchronus 
// console.log("Running 1");
// setTimeout(() => {
// console.log("Running 2");
    
// }, 4000);

// console.log("Running 3");

//callback function
let first = (callback) => {
    console.log("Manu");
    callback();
}
let second = () => console.log("Ashokan");
first(second);

//set interval
// let interval = setInterval(second,1000);
// clearInterval(interval)
// setTimeout(second,2000);