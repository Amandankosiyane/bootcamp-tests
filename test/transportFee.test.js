describe('transportFee', function(){
    it("should return 'R20' when given shifts", function() {
        assert.equal(transportFee('morning'),'R20');
    });
    it("it should return 'R10' when given shifts", function(){
      assert.equal(transportFee('afternoon'), 'R10');
    });
    it("should return 'free' when given shifts", function(){
      assert.equal(transportFee('nightshift'), 'free');
    });
    it("should return 'shifts' when given 'none'", function(){
      assert.equal(transportFee('shifts'), 'none');
    });
});
