var countAllFromTown = function(regNumber,location){
var registration = [];
  var countTown = regNumber.split( ',' );
  for(var i=0; i<countTown.length; i++){
  var countRegNum = countTown[i].trim();
    if(countRegNum.startsWith(location)){
    registration.push(countTown[i]);
    }
  }
  //console.log(registration);
  return registration.length;
}
var howManyTown = countAllFromTown('CL 124, CL 341, CL 341','CL');
console.log(howManyTown);
