var findItemsOver20 = function(itemList){
var empty = [];
  for(var i=0; i<itemList.length; i++){
  var listItem = itemList[i];
    var qty = listItem.qty;
    if(qty>20){
    empty.push(listItem);
    }
  }
  return empty;
}

var results = findItemsOver20('27,37');
console.log(results);
