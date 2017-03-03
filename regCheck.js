var regCheck = function(regNum, location){
var registration =regNum.endsWith(location);
  console.log('registration', + " " + location);
  return registration;
};
regCheck('DV 23 NB GP', 'GP');
