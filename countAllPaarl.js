var countAllPaarl = function(regNum){
var firstRealpaarl = [];
  var paarl = regNum.split(', ');
  for(var i=0; i<paarl.length; i++){
  if(paarl[i].startsWith('CJ')){
  firstRealpaarl.push(paarl[i]);
  }
  }
 // console.log(paarl);
  return  firstRealpaarl.length;
}
var howManyPaarl = countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123')
console.log(howManyPaarl);
