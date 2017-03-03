var totalPhoneBill = function(phoneBills){
var bills = phoneBills.split(',');
  var totalBills = 0;
  for(var i=0; i<bills.length; i++){
  var phonecalls = bills[i].trim();
    if(phonecalls .startsWith('call')){
    totalBills = totalBills + 2.75;
    }
    else if(phonecalls .startsWith('sms')){
    totalBills = totalBills + 0.65;
    }
    else{
    totalBills = totalBills + 0.00;
    }
  }
    console.log(totalBills.toFixed(2));
    return 'R' + totalBills.toFixed(2);
  }
totalPhoneBill('call, sms, call, sms, sms');
