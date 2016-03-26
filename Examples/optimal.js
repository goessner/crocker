function toRad(w) { return w/180*Math.PI; }
function toDeg(w) { return w*180/Math.PI; }

var crocker = require("../crocker.js");

// Design a Crank-Rocker with 
// * Given length
// * Rocker's angular range of 80°
// * A forth and back ratio of 10/9
// Find the optimal Crank-Rocker with maximum of minimal transmission angle.
var d = 120,
    psi0 = toRad(80),
    alfa = crocker.alfa_tfb(10/9),
    a = crocker.a_muMinMax(d,alfa,psi0),
    b = crocker.b_ad(a,d,alfa,psi0),
    c = crocker.c_ad(a,d,alfa,psi0),
    muMin = crocker.muMin(a,b,c,d);

console.log("psi0 = " + toDeg(psi0));   // 80°
console.log("alfa = " + toDeg(alfa));   // 9.5°
console.log("a = " + a);                // 46.7
console.log("b = " + b);                // 116
console.log("c = " + c);                // 73.9
console.log("muMin = " + toDeg(muMin)); // 37.7°
