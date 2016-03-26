/**
 * CrankRocker (c) 2014-16 Stefan Goessner
 * @license
 * MIT License
 */
/* jshint -W014 */
/* jshint -W030 */

"use strict";

/** 
 * `Crocker` is a dependency-free collection of Crank-Rocker related functions.
 * @namespace 
 */
var Crocker = {
   /**
    * Minimal Rocker angle `ψ_min`.<br>
    * Äußerer Schwingwinkel<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Minimal rocker angle in radians.
    */
	psiMin: function(a,b,c,d) {
      var cpso = (-c*c - d*d + (b+a)*(b+a))/(2*c*d);
	   return cpso >= -1 && cpso <= 1 ?Math.acos(cpso) : Number.NaN;
	},
   /**
    * Maximal Rocker angle `ψ_max`.<br>
    * Innerer Schwingwinkel<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Maximal rocker angle in radians.
    */
	psiMax: function(a,b,c,d) {
      var cpsi = (-c*c - d*d + (b-a)*(b-a))/(2*c*d);
	   return cpsi >= -1 && cpsi <= 1 ?Math.acos(cpsi) : Number.NaN;
	},
   /**
    * Crank angle `ϕ_min` corresponding to rocker angle `ψ_min`.
    * Kurbelwinkel der äußeren Umkehrlage.
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Crank angle.
    */
   phiMin: function(a,b,c,d) { return Math.acos(((b+a)*(b+a)-c*c+d*d)/(2*(b+a)*d)); },
   /**
    * Crank angle `ϕ_max` corresponding to rocker angle `ψ_max`.
    * Kurbelwinkel der inneren Umkehrlage.
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Crank angle in radians.
    */
   phiMax: function(a,b,c,d) { return Math.PI + Math.acos(((b-a)*(b-a)-c*c+d*d)/(2*(b-a)*d)); },
   /**
    * Crank angular range `ϕ_0` from outer to inner angular limit of the rocker.
    * Both moving into same angular direction then.<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Crank angle range in radians.
    */
   phi0: function(a,b,c,d) {
		return Math.PI + Crocker.alfa(a,b,c,d);
	},
   /**
    * Transmission angle `μ_inner` corresponding to crank's inner frame position.<br>
    * Übertragungswinkel der inneren Steglage
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Transmission angle in radians.
    */
   muInner: function(a,b,c,d) { return Math.acos((b*b+c*c-(d-a)*(d-a))/(2*b*c)); },
   /**
    * Transmission angle `μ_outer` corresponding to crank's outer frame position.
    * In case the result is greater than pi/2, the supplement angle to pi is taken.<br>
    * Übertragungswinkel der äusseren Steglage.
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Transmission angle in radians.
    */
	muOuter: function(a,b,c,d) {
      var mu = Math.acos((b*b+c*c-(d+a)*(d+a))/(2*b*c));
      return mu < 0 ? Math.PI - mu : mu;
   },
   /**
    * Minimal Transmission angle `μ_min`, i.e. min({@link muI},{@link muO}).<br>
    * Minimaler Übertragungswinkel.
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Minimal transmission angle in radians.
    */
	muMin: function(a,b,c,d) { return Math.min(Crocker.muInner(a,b,c,d), Crocker.muOuter(a,b,c,d)); },
   /**
    * Crank angle range difference `α` from time ratio tf/tb of rocker's forth and back moving times.<br>
    * Zeitverhältnis für Hin- und Rücklauf<br>.
    * @param {float} tfb Time ratio tf/tb of rocker's forth and back moving times.
    * @returns {float} Crank angle range difference in radians.
    */
   alfa_tfb: function(tfb) {
	   return Math.PI * (tfb-1)/(tfb+1);
	},
   /**
    * Crank angle range difference `α`.<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Crank angle range difference in radians.
    */
    alfa: function(a,b,c,d) {
       return Math.acos(((b-a)*(b-a)-c*c+d*d)/(2*(b-a)*d)) - Math.acos(((b+a)*(b+a)-c*c+d*d)/(2*(b+a)*d));
    },
   /**
    * Crank angle range difference `α`.<br>
    * Important Note: Always returns absolute value .. which might not be, what you want !!
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank angle range difference in radians.
    */
    alfa_abc: function(a,b,c,ps0) {
       return Math.acos((a*a + b*b - c*c*(1 - Math.cos(ps0)))/(b*b - a*a));
    },
   /**
    * Crank angle range difference `α`.<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} d Frame length
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank angle range difference in radians.
    */
   alfa_abd: function(a,b,d,ps0) {
      return ps0 - 2*Math.asin(Math.sqrt((d*d*Crocker.sqr(Math.sin(ps0/2)) - a*a)/(b*b - a*a)));
    },
   /**
    * Crank angle range difference `α`.<br>
    * Note: Newton/Raphson numerical approximation.
    * Bug: Currently false values sometimes .. to be fixed !!
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} d Frame length
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank angle range difference in radians.
    */
   alfa_acd: function(a,c,d,ps0) {
      if (Crocker.isEps(a,c*Math.sin(ps0/2)))  // alfa = 0 ... centric Crank-Rocker
         return 0;
      else {
         var f = function f(alf) {
//                    console.log("alf:"+alf+",a="+a+",c="+c+",d="+d+",ps0="+ps0)
                    return a*a*Math.sin(ps0/2-alf) - c*c*Crocker.sqr(Math.sin(ps0/2-alf/2))*Math.sin(ps0/2) + d*d*Crocker.sqr(Math.sin(alf/2))*Math.sin(ps0/2);
                 },
             fd = function fd(alf) {
                    return -a*a*Math.cos(ps0/2-alf) + c*c*Math.sin(ps0/2-alf/2)*Math.cos(ps0/2-alf/2)*Math.sin(ps0/2) + d*d*Math.sin(alf/2)*Math.cos(alf/2)*Math.sin(ps0/2);
                 };
         return Crocker.newton(f.bind(null),fd.bind(null),0,30);
      }
   },
   /**
    * Crank angle range difference `α`.<br>
    * Note: Newton/Raphson numerical approximation.
    * @param {float} b Coupler length
    * @param {float} c Coupler length
    * @param {float} d Frame length
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank angle range difference in radians.
    */
   alfa_bcd: function(b,c,d,ps0) {
      function f(alf) {
         return b*b*Math.sin(ps0/2-alf) + c*c*Crocker.sqr(Math.cos(ps0/2-alf/2))*Math.sin(ps0/2) - d*d*Crocker.sqr(Math.cos(alf/2))*Math.sin(ps0/2);
      }
      function fd(alf) {
         return -b*b*Math.cos(ps0/2-alf) + c*c*Math.sin(ps0/2-alf/2)*Math.cos(ps0/2-alf/2)*Math.sin(ps0/2) + d*d*Math.sin(alf/2)*Math.cos(alf/2);
      }
      return Crocker.newton(f.bind(null),fd.bind(null),0,30);
    },

   /**
    * Rocker angle range `ψ0`.<br>
    * Schwingwinkelbereich<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @returns {float} Rocker angle range in radians.
    */
	psi0: function(a,b,c,d) {
      var cpsi = (-c*c - d*d + (b-a)*(b-a))/(2*c*d), cpso = (-c*c - d*d + (b+a)*(b+a))/(2*c*d);
	   return cpsi >= -1 && cpsi <= 1 && cpso >= -1 && cpso <= 1 ? Math.acos(cpsi) - Math.acos(cpso) : Number.NaN;
	},
   /**
    * Rocker angle range `ψ0`.<br>
    * Schwingwinkelbereich<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} alf Crank angular range difference `α` in radians.
    * @returns {float} Rocker angle range in radians.
    */
	psi0_abc: function(a,b,c,alf) {
	   return Math.acos(1 - (a*a + b*b - (b*b - a*a)*Math.cos(alf))/(c*c));
	},
   /**
    * Rocker angle range `ψ0`.<br>
    * Schwingwinkelbereich<br>
    * Note: Newton/Raphson numerical approximation.
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @param {float} alf Crank angular range difference `α` in radians.
    * @returns {float} Rocker angle range in radians.
    */
	psi0_abd: function(a,b,d,alf) {
      function f(a,b,d,alf,ps0) {
         return a*a*Crocker.sqr(Math.cos(ps0/2-alf/2)) + b*b*Crocker.sqr(Math.sin(ps0/2-alf/2)) - d*d*Crocker.sqr(Math.sin(ps0/2));
      }
      function fd(a,b,d,alf,ps0) {
         return -a*a*Math.cos(ps0/2-alf/2)*Math.sin(ps0/2-alf/2) + b*b*Math.sin(ps0/2-alf/2)*Math.cos(ps0/2-alf/2) - d*d*Math.sin(ps0/2)*Math.cos(ps0/2);
      }
      return Crocker.newton(f.bind(null),fd.bind(null),Math.PI/2,30);
	},
   /**
    * Rocker angle range `ψ0`.<br>
    * Schwingwinkelbereich<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @param {float} alf Crank angular range difference `α` in radians.
    * @returns {float} Rocker angle range in radians.
    */
	psi0_acd: function(a,c,d,alf) {
      if (Crocker.isEps(a,d*Math.sin(alf/2)))  // special case alfa = psi0
         return alf;
      else {
         var f = function f(ps0) {
                return a*a*Math.sin(ps0/2-alf) - c*c*Crocker.sqr(Math.sin(ps0/2-alf/2))*Math.sin(ps0/2) + d*d*Crocker.sqr(Math.sin(alf/2))*Math.sin(ps0/2);
             },
             fd = function fd(ps0) {
                return a*a/2*Math.cos(ps0/2-alf) - c*c*Math.sin(ps0/2-alf/2)*Math.cos(ps0/2-alf/2)*Math.sin(ps0/2) - c*c/2*Crocker.sqr(Math.sin(ps0/2-alf/2))*Math.cos(ps0/2) + d*d/2*Crocker.sqr(Math.sin(alf/2))*Math.cos(ps0/2);
             };
         return Crocker.newton(f.bind(null),fd.bind(null),Math.PI/2,30);
      }
	},
   /**
    * Rocker angle range `ψ0`.<br>
    * Schwingwinkelbereich<br>
    * @param {float} a Crank length
    * @param {float} b Coupler length
    * @param {float} c Rocker length
    * @param {float} d Frame length
    * @param {float} alf Crank angular range difference `α` in radians.
    * @returns {float} Rocker angle range in radians.
    */
	psi0_bcd: function(b,c,d,alf) {
      function f(b,c,d,alf,ps0) {
         return b*b*Math.sin(ps0/2-alf) + c*c*Crocker.sqr(Math.cos(ps0/2-alf/2))*Math.sin(ps0/2) - d*d*Crocker.sqr(Math.cos(alf/2))*Math.sin(ps0/2);
      }
      function fd(b,c,d,alf,ps0) {
         return b*b/2*Math.cos(ps0/2-alf) - c*c*Math.sin(ps0/2-alf/2)*Math.cos(ps0/2-alf/2)*Math.sin(ps0/2) + c*c/2*Crocker.sqr(Math.cos(ps0/2-alf/2))*Math.cos(ps0/2) - d*d/2*Crocker.sqr(Math.cos(alf/2))*Math.cos(ps0/2);
      }
      return Crocker.newton(f.bind(null),fd.bind(null),Math.PI/2,30);
	},

   /**
    * Get crank length by coupler and rocker length.<br>
    * Crank-Rocker only!
    * @param {float} b Coupler length.
    * @param {float} c Rocker length.
    * @param {float} alf Crank angle difference in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank length.
    */
   a_bc: function(b,c,alf,ps0) {   // ok
	   return Math.sqrt((c*c*Crocker.sqr(Math.sin(ps0/2)) - b*b*Crocker.sqr(Math.sin(alf/2)))/Crocker.sqr(Math.cos(alf/2)));
	},
   /**
    * Get crank length by coupler and frame length.<br>
    * Crank-Rocker only!
    * @param {float} b Coupler length.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank length.
    */
	a_bd: function(b,d,alf,ps0) {  // ok
	   return Math.sqrt((d*d*Crocker.sqr(Math.sin(ps0/2)) - b*b*Crocker.sqr(Math.sin(ps0/2-alf/2)))/Crocker.sqr(Math.cos(ps0/2-alf/2)));
	},
   /**
    * Get crank length by rocker and frame length.<br>
    * Crank-Rocker only!
    * @param {float} c Rocker length.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Crank length.
    */
	a_cd: function(c,d,alf,ps0) {  // ok
      return !Crocker.isEps(c,d)  // c != d && psi0/2 != alfa
	         ? Math.sqrt((c*c*Crocker.sqr(Math.sin(ps0/2-alf/2)) - d*d*Crocker.sqr(Math.sin(alf/2)))*Math.sin(ps0/2)/Math.sin(ps0/2-alf))
            : Number.NaN;
	},
   /**
    * Get coupler length by crank and rocker length.<br>
    * Crank-Rocker only!
    * @param {float} a Crank length.
    * @param {float} c Rocker length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Coupler length.
    */
	b_ac: function(a,c,alf,ps0) {  // ok
	   return !Crocker.isEps(alf)  // alfa != 0
            ? Math.sqrt((c*c*Crocker.sqr(Math.sin(ps0/2)) - a*a*Crocker.sqr(Math.cos(alf/2)))/Crocker.sqr(Math.sin(alf/2)))
            : Number.NaN;
	},
   /**
    * Get coupler length by crank and frame length.<br>
    * Crank-Rocker only!
    * @param {float} a Crank length.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Coupler length.
    */
	b_ad: function(a,d,alf,ps0) {  // ok
	   return !Crocker.isEps(alf,ps0)   // alfa != psi0
            ? Math.sqrt((d*d*Crocker.sqr(Math.sin(ps0/2)) - a*a*Crocker.sqr(Math.cos(ps0/2-alf/2)))/Crocker.sqr(Math.sin(ps0/2-alf/2)))
            : Number.NaN;
	},
   /**
    * Get coupler length by rocker and frame length.<br>
    * Crank-Rocker only!
    * @param {float} c Rocker length.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Coupler length.
    */
	b_cd: function(c,d,alf,ps0) {  // ok
      return !Crocker.isEps(c,d)  // c != d && psi0/2 != alfa
	         ? Math.sqrt((d*d*Crocker.sqr(Math.cos(alf/2)) - c*c*Crocker.sqr(Math.cos(ps0/2-alf/2)))*Math.sin(ps0/2)/Math.sin(ps0/2-alf))
            : Number.NaN;
	},
   /**
    * Get rocker length by crank and coupler length.<br>
    * Crank-Rocker only!
    * @param {float} a Crank length.
    * @param {float} b Coupler length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Rocker length.
    */
	c_ab: function(a,b,alf,ps0) {  // ok
	   return Math.sqrt((a*a*Crocker.sqr(Math.cos(alf/2)) + b*b*Crocker.sqr(Math.sin(alf/2)))/Crocker.sqr(Math.sin(ps0/2)));
	},
   /**
    * Get rocker length by crank and frame length.<br>
    * Crank-Rocker only!
    * @param {float} a Crank length.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Rocker length.
    */
	c_ad: function(a,d,alf,ps0) {  // ok
	   return !Crocker.isEps(alf,ps0)    // alfa != psi0
            ? Math.sqrt((a*a*Math.sin(ps0/2-alf)/Math.sin(ps0/2) + d*d*Crocker.sqr(Math.sin(alf/2)))/Crocker.sqr(Math.sin(ps0/2-alf/2)))
	         : Number.NaN;
	},
   /**
    * Get rocker length by coupler and frame length.<br>
    * Crank-Rocker only!
    * @param {float} b Coupler length.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Rocker length.
    */
	c_bd: function(b,d,alf,ps0) {  // ok
	   return Math.sqrt(-(b*b*Math.sin(ps0/2-alf)/Math.sin(ps0/2) - d*d*Crocker.sqr(Math.cos(alf/2)))/Crocker.sqr(Math.cos(ps0/2-alf/2)));
	},
   /**
    * Get frame length by crank and coupler length.<br>
    * Crank-Rocker only!
    * @param {float} a Crank length.
    * @param {float} b Coupler length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Frame length.
    */
	d_ab: function(a,b,alf,ps0) {  // ok
	   return Math.sqrt((a*a*Crocker.sqr(Math.cos(ps0/2-alf/2)) + b*b*Crocker.sqr(Math.sin(ps0/2-alf/2)))/Crocker.sqr(Math.sin(ps0/2)));
	},
   /**
    * Get frame length by crank and rocker length.<br>
    * Crank-Rocker only!
    * @param {float} a Crank length.
    * @param {float} c Rocker length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Frame length.
    */
	d_ac: function(a,c,alf,ps0) {  // 
	   return !Crocker.isEps(alf)    // alfa != 0
            ? Math.sqrt(-(a*a*Math.sin(ps0/2-alf)/Math.sin(ps0/2) - c*c*Crocker.sqr(Math.sin(ps0/2-alf/2)))/Crocker.sqr(Math.sin(alf/2)))
            : Number.NaN;
	},
   /**
    * Get frame length by coupler and rocker length.<br>
    * Crank-Rocker only!
    * @param {float} b Coupler length.
    * @param {float} c Rocker length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {float} Frame length.
    */
	d_bc: function(b,c,alf,ps0) {  // ok
	   return Math.sqrt((b*b*Math.sin(ps0/2-alf)/Math.sin(ps0/2) + c*c*Crocker.sqr(Math.cos(ps0/2-alf/2)))/Crocker.sqr(Math.cos(alf/2)));
	},
   /**
    * Crank length for maximized minimal transmission angle.
    * @param {float} d Frame length.
    * @param {float} alf Crank angle difference `α` in radians.
    * @param {float} ps0 Rocker angular range `ψ0` in radians.
    * @returns {length} Crank length.
    */
   a_muMinMax: function (d,alf,ps0) {
      function cosmu(a,d,alf,ps0) {
         var b = Math.sqrt(B*a*a + d*d*Crocker.sqr(Math.sin(ps0/2))/Crocker.sqr(Math.sin(ps0/2-alf/2))),
             c = Math.sqrt(C*a*a + d*d*Crocker.sqr(Math.sin(alf/2))/Crocker.sqr(Math.sin(ps0/2-alf/2))),
             bd = B*a/b,
             cd = C*a/c,
             bdd = (B-bd*bd)/b,
             cdd = (C-cd*cd)/c,
             bddd = -3*bd*bdd/b,
             cddd = -3*cd*cdd/c,
             sign = alf>0 ? 1 : -1,
             f   = (b*b + c*c - d*d + sign*2*a*d - a*a)/(2*b*c),
             fd  = ((B + C - 1)*a + sign*d - (bd*c + b*cd)*f)/(b*c),
             fdd = (B + C - 1 - 2*(bd*c + b*cd)*fd - (bdd*c + 2*bd*cd + b*cdd)*f)/(b*c),
             fddd = -(3*(bd*c + b*cd)*fdd + 3*(bdd*c + 2*bd*cd + b*cdd)*fd + (bddd*c + 3*bdd*cd + 3*bd*cdd + b*cddd)*f)/(b*c);
         return {
            f: f,
            fd: fd,
            fdd: fdd,
            fddd: fddd
         };
      }
      if (Crocker.isEps(alf-ps0))        // special case 'alf === ps0' ...
         return d*Math.sin(ps0/2);

      var B = -1/Crocker.sqr(Math.tan(ps0/2-alf/2)),
          C = Math.sin(ps0/2-alf)/Crocker.sqr(Math.sin(ps0/2-alf/2))/Math.sin(ps0/2),
          D = d*d*(1 - Math.sin(ps0/2-alf)/Math.sin(ps0/2))/(2*Crocker.sqr(Math.sin(ps0/2)) - Crocker.sqr(Math.sin(ps0/2-alf/2))),
          a = 0.9999*d*Math.sin(ps0/2)/Math.cos(ps0/2-alf/2),
          q = 1, cm;
      for (var i=0; i<30 && Math.abs(q) > 0.0001; i++) {   // Newton / Raphson - Verfahren
         cm = cosmu(a,d,alf,ps0);
//         console.log("a = " + a);
//         console.log("fdd = "+cm.fdd+" fdd* = "+(cm2.fd-cm1.fd)/0.2); 
         a -= (q=cm.fd/cm.fdd);
      }
//         console.log("b*b = "+(B*a*a + d*d*Crocker.sqr(Math.sin(ps0/2))/Crocker.sqr(Math.sin(ps0/2-alf/2)))+" c*c="+(C*a*a + d*d*Crocker.sqr(Math.sin(alf/2))/Crocker.sqr(Math.sin(ps0/2-alf/2))));
      return a;
   },
   sqr: function(x) { return x*x; },
   isEps: function(u,v) {
      var EPS = 1.19209e-07;
      u = v ? u-v : u;
      return u < EPS && u >-EPS;
   },
   newton: function(f,fd,x0,itrmax) {
      var i = 0, x = x0, fval, fdval;
      itrmax = itrmax || 30;
      do {     // Newton / Raphson - Verfahren
         fval = f(x);
         fdval = fd(x);
         x -= fval/fdval;
      } while (i++ < itrmax && !Crocker.isEps(fval));
      return i < itrmax ? x : Number.NaN;
   }
};

// export to Node.js
if (typeof module !== 'undefined') module.exports = Crocker;
