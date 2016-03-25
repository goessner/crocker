function toRad(w) { return w/180*Math.PI; }
function toDeg(w) { return w*180/Math.PI; }

var Crocker = require("./crocker.js").Crocker;

// Design a Crank-Rocker with 
// * Given crank and frame length
// * Rocker's angular range of 80°
// * A forth and back ratio of 10/9
var a = 60,
    d = 120,
    psi0 = toRad(80),
    alfa = Crocker.alfa_tfb(10/9),
    b = Crocker.b_ad(a,d,alfa,psi0),
    c = Crocker.c_ad(a,d,alfa,psi0),
    muMin = Crocker.muMin(a,b,c,d);

console.log("psi0 = " + toDeg(psi0));   // 80°
console.log("alfa = " + toDeg(alfa));   // 9.5°
console.log("b = " + b);                // 103
console.log("c = " + c);                //  94
console.log("muMin = " + toDeg(muMin)); // 35°
