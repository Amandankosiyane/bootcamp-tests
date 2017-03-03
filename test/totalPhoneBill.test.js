describe('totalPhoneBill', function(){
    it("should return 'phoneBills' when given bills[i].trim()", function() {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });

});
