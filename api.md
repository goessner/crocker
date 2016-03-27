<a name="Crocker"></a>
## Crocker : <code>object</code>
`Crocker` is a dependency-free collection of Crank-Rocker related functions.

**Kind**: global namespace  

* [Crocker](#Crocker) : <code>object</code>
  * [.psiMin(a, b, c, d)](#Crocker.psiMin) ⇒ <code>float</code>
  * [.psiMax(a, b, c, d)](#Crocker.psiMax) ⇒ <code>float</code>
  * [.phiMin(a, b, c, d)](#Crocker.phiMin) ⇒ <code>float</code>
  * [.phiMax(a, b, c, d)](#Crocker.phiMax) ⇒ <code>float</code>
  * [.phi0(a, b, c, d)](#Crocker.phi0) ⇒ <code>float</code>
  * [.muInner(a, b, c, d)](#Crocker.muInner) ⇒ <code>float</code>
  * [.muOuter(a, b, c, d)](#Crocker.muOuter) ⇒ <code>float</code>
  * [.muMin(a, b, c, d)](#Crocker.muMin) ⇒ <code>float</code>
  * [.alfa_tfb(tfb)](#Crocker.alfa_tfb) ⇒ <code>float</code>
  * [.alfa(a, b, c, d)](#Crocker.alfa) ⇒ <code>float</code>
  * [.alfa_abc(a, b, c, ps0)](#Crocker.alfa_abc) ⇒ <code>float</code>
  * [.alfa_abd(a, b, d, ps0)](#Crocker.alfa_abd) ⇒ <code>float</code>
  * [.alfa_acd(a, b, d, ps0)](#Crocker.alfa_acd) ⇒ <code>float</code>
  * [.alfa_bcd(b, c, d, ps0)](#Crocker.alfa_bcd) ⇒ <code>float</code>
  * [.psi0(a, b, c, d)](#Crocker.psi0) ⇒ <code>float</code>
  * [.psi0_abc(a, b, c, alf)](#Crocker.psi0_abc) ⇒ <code>float</code>
  * [.psi0_abd(a, b, c, d, alf)](#Crocker.psi0_abd) ⇒ <code>float</code>
  * [.psi0_acd(a, b, c, d, alf)](#Crocker.psi0_acd) ⇒ <code>float</code>
  * [.psi0_bcd(a, b, c, d, alf)](#Crocker.psi0_bcd) ⇒ <code>float</code>
  * [.a_bc(b, c, alf, ps0)](#Crocker.a_bc) ⇒ <code>float</code>
  * [.a_bd(b, d, alf, ps0)](#Crocker.a_bd) ⇒ <code>float</code>
  * [.a_cd(c, d, alf, ps0)](#Crocker.a_cd) ⇒ <code>float</code>
  * [.b_ac(a, c, alf, ps0)](#Crocker.b_ac) ⇒ <code>float</code>
  * [.b_ad(a, d, alf, ps0)](#Crocker.b_ad) ⇒ <code>float</code>
  * [.b_cd(c, d, alf, ps0)](#Crocker.b_cd) ⇒ <code>float</code>
  * [.c_ab(a, b, alf, ps0)](#Crocker.c_ab) ⇒ <code>float</code>
  * [.c_ad(a, d, alf, ps0)](#Crocker.c_ad) ⇒ <code>float</code>
  * [.c_bd(b, d, alf, ps0)](#Crocker.c_bd) ⇒ <code>float</code>
  * [.d_ab(a, b, alf, ps0)](#Crocker.d_ab) ⇒ <code>float</code>
  * [.d_ac(a, c, alf, ps0)](#Crocker.d_ac) ⇒ <code>float</code>
  * [.d_bc(b, c, alf, ps0)](#Crocker.d_bc) ⇒ <code>float</code>
  * [.a_muMinMax(d, alf, ps0)](#Crocker.a_muMinMax) ⇒ <code>length</code>

<a name="Crocker.psiMin"></a>
### Crocker.psiMin(a, b, c, d) ⇒ <code>float</code>
Minimal Rocker angle `ψ_min`.<br>Äußerer Schwingwinkel<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Minimal rocker angle in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.psiMax"></a>
### Crocker.psiMax(a, b, c, d) ⇒ <code>float</code>
Maximal Rocker angle `ψ_max`.<br>Innerer Schwingwinkel<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Maximal rocker angle in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.phiMin"></a>
### Crocker.phiMin(a, b, c, d) ⇒ <code>float</code>
Crank angle `ϕ_min` corresponding to rocker angle `ψ_min`.Kurbelwinkel der äußeren Umkehrlage.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.phiMax"></a>
### Crocker.phiMax(a, b, c, d) ⇒ <code>float</code>
Crank angle `ϕ_max` corresponding to rocker angle `ψ_max`.Kurbelwinkel der inneren Umkehrlage.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.phi0"></a>
### Crocker.phi0(a, b, c, d) ⇒ <code>float</code>
Crank angular range `ϕ_0` from outer to inner angular limit of the rocker.Both moving into same angular direction then.<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.muInner"></a>
### Crocker.muInner(a, b, c, d) ⇒ <code>float</code>
Transmission angle `μ_inner` corresponding to crank's inner frame position.<br>Übertragungswinkel der inneren Steglage

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Transmission angle in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.muOuter"></a>
### Crocker.muOuter(a, b, c, d) ⇒ <code>float</code>
Transmission angle `μ_outer` corresponding to crank's outer frame position.In case the result is greater than pi/2, the supplement angle to pi is taken.<br>Übertragungswinkel der äusseren Steglage.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Transmission angle in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.muMin"></a>
### Crocker.muMin(a, b, c, d) ⇒ <code>float</code>
Minimal Transmission angle `μ_min`, i.e. min([muI](muI),[muO](muO)).<br>Minimaler Übertragungswinkel.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Minimal transmission angle in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.alfa_tfb"></a>
### Crocker.alfa_tfb(tfb) ⇒ <code>float</code>
Crank angle range difference `α` from time ratio tf/tb of rocker's forth and back moving times.<br>Zeitverhältnis für Hin- und Rücklauf<br>.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range difference in radians.  

| Param | Type | Description |
| --- | --- | --- |
| tfb | <code>float</code> | Time ratio tf/tb of rocker's forth and back moving times. |

<a name="Crocker.alfa"></a>
### Crocker.alfa(a, b, c, d) ⇒ <code>float</code>
Crank angle range difference `α`.<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range difference in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.alfa_abc"></a>
### Crocker.alfa_abc(a, b, c, ps0) ⇒ <code>float</code>
Crank angle range difference `α`.<br>Important Note: Always returns absolute value .. which might not be, what you want !!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range difference in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.alfa_abd"></a>
### Crocker.alfa_abd(a, b, d, ps0) ⇒ <code>float</code>
Crank angle range difference `α`.<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range difference in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| d | <code>float</code> | Frame length |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.alfa_acd"></a>
### Crocker.alfa_acd(a, b, d, ps0) ⇒ <code>float</code>
Crank angle range difference `α`.<br>Note: Newton/Raphson numerical approximation.Bug: Currently false values sometimes .. to be fixed !!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range difference in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| d | <code>float</code> | Frame length |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.alfa_bcd"></a>
### Crocker.alfa_bcd(b, c, d, ps0) ⇒ <code>float</code>
Crank angle range difference `α`.<br>Note: Newton/Raphson numerical approximation.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank angle range difference in radians.  

| Param | Type | Description |
| --- | --- | --- |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Coupler length |
| d | <code>float</code> | Frame length |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.psi0"></a>
### Crocker.psi0(a, b, c, d) ⇒ <code>float</code>
Rocker angle range `ψ0`.<br>Schwingwinkelbereich<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker angle range in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |

<a name="Crocker.psi0_abc"></a>
### Crocker.psi0_abc(a, b, c, alf) ⇒ <code>float</code>
Rocker angle range `ψ0`.<br>Schwingwinkelbereich<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker angle range in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| alf | <code>float</code> | Crank angular range difference `α` in radians. |

<a name="Crocker.psi0_abd"></a>
### Crocker.psi0_abd(a, b, c, d, alf) ⇒ <code>float</code>
Rocker angle range `ψ0`.<br>Schwingwinkelbereich<br>Note: Newton/Raphson numerical approximation.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker angle range in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |
| alf | <code>float</code> | Crank angular range difference `α` in radians. |

<a name="Crocker.psi0_acd"></a>
### Crocker.psi0_acd(a, b, c, d, alf) ⇒ <code>float</code>
Rocker angle range `ψ0`.<br>Schwingwinkelbereich<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker angle range in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |
| alf | <code>float</code> | Crank angular range difference `α` in radians. |

<a name="Crocker.psi0_bcd"></a>
### Crocker.psi0_bcd(a, b, c, d, alf) ⇒ <code>float</code>
Rocker angle range `ψ0`.<br>Schwingwinkelbereich<br>

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker angle range in radians.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length |
| b | <code>float</code> | Coupler length |
| c | <code>float</code> | Rocker length |
| d | <code>float</code> | Frame length |
| alf | <code>float</code> | Crank angular range difference `α` in radians. |

<a name="Crocker.a_bc"></a>
### Crocker.a_bc(b, c, alf, ps0) ⇒ <code>float</code>
Get crank length by coupler and rocker length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank length.  

| Param | Type | Description |
| --- | --- | --- |
| b | <code>float</code> | Coupler length. |
| c | <code>float</code> | Rocker length. |
| alf | <code>float</code> | Crank angle difference in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.a_bd"></a>
### Crocker.a_bd(b, d, alf, ps0) ⇒ <code>float</code>
Get crank length by coupler and frame length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank length.  

| Param | Type | Description |
| --- | --- | --- |
| b | <code>float</code> | Coupler length. |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.a_cd"></a>
### Crocker.a_cd(c, d, alf, ps0) ⇒ <code>float</code>
Get crank length by rocker and frame length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Crank length.  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>float</code> | Rocker length. |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.b_ac"></a>
### Crocker.b_ac(a, c, alf, ps0) ⇒ <code>float</code>
Get coupler length by crank and rocker length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Coupler length.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length. |
| c | <code>float</code> | Rocker length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.b_ad"></a>
### Crocker.b_ad(a, d, alf, ps0) ⇒ <code>float</code>
Get coupler length by crank and frame length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Coupler length.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length. |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.b_cd"></a>
### Crocker.b_cd(c, d, alf, ps0) ⇒ <code>float</code>
Get coupler length by rocker and frame length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Coupler length.  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>float</code> | Rocker length. |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.c_ab"></a>
### Crocker.c_ab(a, b, alf, ps0) ⇒ <code>float</code>
Get rocker length by crank and coupler length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker length.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length. |
| b | <code>float</code> | Coupler length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.c_ad"></a>
### Crocker.c_ad(a, d, alf, ps0) ⇒ <code>float</code>
Get rocker length by crank and frame length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker length.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length. |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.c_bd"></a>
### Crocker.c_bd(b, d, alf, ps0) ⇒ <code>float</code>
Get rocker length by coupler and frame length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Rocker length.  

| Param | Type | Description |
| --- | --- | --- |
| b | <code>float</code> | Coupler length. |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.d_ab"></a>
### Crocker.d_ab(a, b, alf, ps0) ⇒ <code>float</code>
Get frame length by crank and coupler length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Frame length.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length. |
| b | <code>float</code> | Coupler length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.d_ac"></a>
### Crocker.d_ac(a, c, alf, ps0) ⇒ <code>float</code>
Get frame length by crank and rocker length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Frame length.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>float</code> | Crank length. |
| c | <code>float</code> | Rocker length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.d_bc"></a>
### Crocker.d_bc(b, c, alf, ps0) ⇒ <code>float</code>
Get frame length by coupler and rocker length.<br>Crank-Rocker only!

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>float</code> - Frame length.  

| Param | Type | Description |
| --- | --- | --- |
| b | <code>float</code> | Coupler length. |
| c | <code>float</code> | Rocker length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

<a name="Crocker.a_muMinMax"></a>
### Crocker.a_muMinMax(d, alf, ps0) ⇒ <code>length</code>
Crank length for maximized minimal transmission angle.

**Kind**: static method of <code>[Crocker](#Crocker)</code>  
**Returns**: <code>length</code> - Crank length.  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>float</code> | Frame length. |
| alf | <code>float</code> | Crank angle difference `α` in radians. |
| ps0 | <code>float</code> | Rocker angular range `ψ0` in radians. |

