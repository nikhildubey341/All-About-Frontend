// The difference b/w var let const✅

// var old js me tha - es5 ✅
// var function scoped hota hai => var parent function me kahi bhi use ho skta hai

function abcd() {
    for (var i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}
abcd();
// var adds itself to the window object(search in console: window)
// js me kai sare features hai par kuch features jo hum use karte hai wo features wo nhi hai par fir bhi use kar pate hai kyoki wo features js language use kar leti hai window se, aur window hai ek box of features given by browser to use with js.





// let const new js me hai - es6 ✅
// let braces scoped hota hai

function hello() {
    for (let j = 1; j < 12; j++) {
        console.log(j);
    }
    console.log(j);
}
hello();