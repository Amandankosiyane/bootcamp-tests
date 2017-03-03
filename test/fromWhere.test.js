describe('fromWhere', function(){
    it("should return 'CY' when given 'Bellville'", function() {
        assert.equal(fromWhere('CY'), 'Bellville');
    });
   it("should return 'CJ' when given 'Paarl'", function(){
     assert.equal(fromWhere('CJ'), 'Paarl');
   });
     it("should return 'CA' when given 'Cape Town'", function(){
       assert.equal(fromWhere('CA'), 'Cape Town');
     });
     it("should return 'CM' when given 'Some other place!'", function(){
       assert.equal(fromWhere('CM'), 'Some other place!');
     });
});
