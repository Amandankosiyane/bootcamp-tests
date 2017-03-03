var findItemsOver = function(itemList, quantity){
var list = [];
  for(var i=0; i<itemList.length; i++){
  var listItem = itemList[i];
  var qty = listItem.qty;
  if(qty>quantity){
  empty.push(listItem);
  }
}
  return listItem;
};

var result = findItemsOver([10,37,27,3], 1);
console.log(results);
