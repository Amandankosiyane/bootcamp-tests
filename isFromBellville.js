var isFromBellville = function(isFromBellville) {
var registration = isFromBellville.startsWith('CY');
  console.log(registration);
  return registration;
};
isFromBellville('CY 2563');
isFromBellville('CY 2252');
