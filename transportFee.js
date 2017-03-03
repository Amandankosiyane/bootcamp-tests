var transportFee = function(shifts){
switch(shifts){
  case 'morning':
    return 'R20';
  case 'afternoon':
    return 'R10';
  case 'nightshift':
    return 'free'
  default:
    return 'none';
             }
}
//const assert = require(assert);
assert.equal(transportFee('morning'), 'R20');
assert.equal(transportFee('afternoon'), 'R10');
assert.equal(transportFee('nightshift'),'free');
console.log(transportFee('morning'));
console.log(transportFee('afternoon'));
console.log(transportFee('nightshift'));
