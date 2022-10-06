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

let btn1 = document.getElementById('btn1');
addEventListener("click",myFun2)

function myFun2() {
    alert("clicked");
}


//spread operator