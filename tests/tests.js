// using  https://github.com/Yuffster/describe
if (typeof module !== 'undefined' && typeof require !== 'undefined') {
	var cr = require('../crocker.js'),
	    describe = require('./describe.js');
}

describe("analyse", {
	'alfa_abc': function() {
		var psi0 = cr.psi0(1,3,4,5),
          alfa = cr.alfa(1,3,4,5); 
		this.expect(cr.isEps(cr.alfa_abc(1,3,4,psi0),Math.abs(alfa)), true);  // alfa_abc always computes positive values !!
	},
	'alfa_abd': function() {
		var psi0 = cr.psi0(1,3,4,5),
          alfa = cr.alfa(1,3,4,5); 
		this.expect(cr.isEps(cr.alfa_abd(1,3,5,psi0),alfa), true);
	},
/*
	'alfa_acd': function() {
		var psi0 = cr.psi0(1,3,4,5),
          alfa = cr.alfa(1,3,4,5);
		this.expect(cr.isEps(cr.alfa_acd(1,4,5,psi0),alfa), true);
	},
*/
	'alfa_bcd': function() {
		var psi0 = cr.psi0(1,3,4,5),
          alfa = cr.alfa(1,3,4,5);
		this.expect(cr.isEps(cr.alfa_bcd(3,4,5,psi0),alfa), true);
	}
});


console.log(describe.logResults());

