var fromWhere = function(regNum){
switch(regNum){
  case 'CY':
    return 'Bellville';
  case 'CJ':
    return 'Paarl';
    case 'CA':
    return 'Cape Town';
  default:
    return 'Some other place!';
             }
}
//const assert = require(assert);
assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CM'),'Some other place!');
console.log(console.log('CY'));
console.log(fromWhere('CJ'));
console.log(fromWhere('CA'));
console.log(fromWhere('CM'));
