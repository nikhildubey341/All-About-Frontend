// Word vs Keyword ✅
// Var let and Const✅
// Hoisting ✅
// Tpes in JS✅
// Primitive and Reference ✅
// Conditionals - If-else, Else-if ✅
// Loops - For, While ✅
// Function - ✅
// Array - ✅
// Push, PoP, Shift, Unshift, Splice ✅
// Object ✅
// Update Object Properties ✅





// const dulha = "lab";
// const dulhan = "labby"; 


// Word vs keyword ✅
// Var let const ✅
// hoisting - variable and functions are hoisted which means there declaration is moved on the top of the code. ✅
// hoisting example - 

// console.log(a);
// var a = 12;


// types in js ✅
// primitive and reference ✅


// primitives = number, string, null, undefined , boolean // brackets nhi ho

// var a = "sndkuhsd"
// refrence = [] () {}
// aisi koi bhi value jisko copy karne par real copy nhi hota, balki us main value ka reference pass ho jata hai, use hum reference value kahte hai, aur jiska copy karne par real value copy ho jaye wo value primitive type value hoti hai

// var b = [1,2, 3,4]
// var c = b;
// c.pop();


// conditionals - if else else if ✅
// loops - for while ✅
// functions ✅
// function = code ko name dena 
// functions ka matlab aap koi code ko likh kar koi name de skte ho and baad me use use kar skte ho with that name as many times

// functions mainly teen kaam ke liye hote hai
// 1) jab aapka code aap turant nahi chalana chahte future me chalana chahte ho
// 2) jab aapka code aap reuse karna chahte ho
// 3) jab aap code chalana chahte ho har baar different data ke sath



function hellobolo() {
    console.log("hello");
}
hellobolo();

// arguments = real value jo hum dete hai function chalate waqt
// parameter = variables jinme value store hoti hai argument vali

function abcd(a, b, c) {
    console.log(a, b, c);
}
abcd(12, 13, 14);

// Array ✅
// array - hum ek variable me ek value store kar pate hai par jab hme ek se jyada value store karni ho tab fir use hota hai array ka, matlab ki array aapko freedom deta hai ek se jyada value use karne ki
// array - group of values

// Push , Pop , Shift, Unshift, splice ✅
// push - array ke last me value add karne ke lye 
// pop - last value hatane ke liye 
// unshift - starting me value add karne ke liye
// shift - starting value hatane ke liye
// splice - agar array ke beech me se koi value hatani ho to ( jo value hatani hai uska index no dalte hai, aur kaha se kaha tak k value hatani hai vo value dalni hai (ex- like 3 hatana hai - to index value 2 and 5 tak hatani hai to (2,3)))
var arr = [1, 2, 3, 4, 5, 6, 7]
arr.pop();
arr.push(8);
arr.unshift(0);
arr.shift();
arr.splice(2, 3);


// Object ✅

// ek se jyada bande ki baat ki to hua array, ek bande ke baare me saari baat ki to hua object.

// object hai ek bande ki details ko hold karna, in a key value pair

// 1) blank obj
var a = {};

// 2) filled obj
var a = {
    age: 24,
    name: "Nikhil",
    email: "email@male.com",
    linkedin: "nikhil",
    contact: 978282982982

}
// how to access - in console a.age, a.name, a.email

var ghadi = {
    brand: "Titan",
    price: "16k",
    color: "silver",
    type: "automatic",
    digital: false,
    kuchhbolo: function () { }
}
// property - brand, price, color, type , digital
// method - kuchhbolo


// Updating Object Properties ✅

ghadi.brand = "Titan bata";
ghadi.price = "120k";
