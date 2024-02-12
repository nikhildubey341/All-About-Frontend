// The difference b/w var let const ✅
// window object ✅
// Browser Context API ✅
// Stack ✅
// Heap Memory ✅
// Execution Context ✅
// Lexical Environment ✅
// How to copy reference value✅
// Truthy and Falsy ✅
// Switch ✅
// For-Each Loop ✅
// for-in Loop ✅
// Callback ✅
// First Class Function ✅
// How array are made behind the scences ✅
// How we can make negative indexes in Js ✅
// How to delete Object Prop ✅


// The difference b/w var let const✅

// var:

// 1. var old js me tha - es5 
// 2. var function scoped hota hai => var parent function me kahi bhi use ho skta hai

function abcd() {
    for (var i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}
//abcd();

// 3. var adds itself to the window object ✅ (search in console: window)
// js me kai sare features hai par kuch features jo hum use karte hai wo features wo nhi hai par fir bhi use kar pate hai kyoki wo features js language use kar leti hai window se, aur window hai ek box of features given by browser to use with js.



// let, const:

// 1. let const new js me hai - es6 
// 2. let braces scoped hota hai

function hello() {
    for (let j = 1; j < 12; j++) {
        console.log(j);
    }
    console.log(j);
}
//hello();

// 3. let, const doesn't add itself in window.



// Browser Context API ✅

// browser contexts api provides a way to operate multiple independent browser sessions.
// browser context api:
//                     ----> Window Object
//                     ----> Stack
//                     ----> Heap Memory






// Stack ✅

// Heap Memory ✅

// Jitne bhi variable ya data hum baante hai unhe kahi to store karna padta hai uske liye hota hai heap memory 



// Execution Context ✅

// execution context matlab jab bhi hum function chalayege, function apna ek khudka ek imaginary container bana lega
// jisme uski 3 cheeze hogi-
// 1) Variables
// 2) Functions inside the parent function
// 3) Lexical Enviornment of that function(ye batata hai kin cheezo ko access karna hai or kin ko nhi)

// ye jo imagainary container hota hai use hi hum execution context kahte hai


// Execution context is a container where the function's code is executed and it's cretaed whenever a function is called, it contains 3 things - variables, functions and lexical environment


// Lexical Environment ✅

// Lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function kin cheezo ko access kar skta hai or kinko nhi, matlab ki it's scope and scope chain.

// How to copy reference value✅

var a = [1, 2, 3, 4, 5];
var b = [...a];   // ... -> Spread operator

b.pop();


// we can do the same thing in object

var obj = { name: "Harsh" };
var copyobj = { ...obj };

var x = { name: "Nikhil" };
var y = x;




// Truthy and Falsy ✅

// js me kuch bhi likho wo mainly do parakar mein se kisi ek prakar ko belong karti hai


// falsy - 0, false, undefined, NaN, null, document.all

// Truthy - other all values expect falsy


// Ex -1 - Falsy
// if (0) {
//     console.log("hello");
// }
// else {
//     console.log("hey");
// }


// Ex -2 - Truthy

// if (-1) {
//     console.log("Hii");
// }
// else {
//     console.log("Heme")
// }



// Switch ✅

// Syntax:
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }



// For- Each Loop ✅

// for each loop sirf array me chlat hai, matlab ki jab bhi tumhare paas ek array ho, tab for-each loop use aata hai.
// var a =[1, 2, 23, 24, 25, 7, 8, 9]

// a.forEach(function(val){
// console.log(val+2);
// })

// fo reach loop kabhi bhi by default array me changes nhi krta wo aapko changes karke deta hai array ki temnporary copy par jiske wajah se array hamesha same rehta hai 


// forin Loop ✅

// Objects par loop karne ke liye hai for-in loop

// var ObjNic ={
//     name:"Nikhil",
//     age: 21,
//     city: "Jaipur"
// }

// for(var key in ObjNic){
//     console.log(key, ObjNic[key]);
// }


// Callback ✅

// Jab bhi koi aisa code jo baaad me chlata hai aap likoge,kyoki wo code baad me chlta hai, js ko pta nhi hota ki wo complete hua ya nhi, aise code ke compeletion par js ko bataya jata hai ke wo complete ho gya aur aap ussse chla skte ho, ye batane ka kaam hai callback ka

// Aisa code jo baaad me chlta hai use hum ek function de dete hai ki bahaiya jab ye code complete ho jaaye to ye function chla dena, aur wo fnc jo hum dete hai wo normal fc hi hota hai, aur use kahte hai callback function



// First Class Function ✅

// js me ek concept hai jiska matlab hota hai ki aap function ko use kar skte ho as a value (arg)


function nic(a) {
    a();
}
nic(function () { console.log("hey") });


// How array are made behind the scences ✅
// How we can make negative indexes in Js ✅

var arr = [1, 2, 3, 4];

arr[-1] = 2; 


// How to kmow it it is array or object
// Array.isArray([]) -> True -> Array
// Array.isArray({}) -> False -> Object

// How to delete Object Prop ✅

var rj = {
    name: "Nikhil",
    age : 21
}
delete rj.name;
delete rj.age;














