describe('isFromBellville', function(){
    it("should return 'registration' when given isFromBellville.startsWith('CY')", function() {
        assert.equal(isFromBellville('CY 2563'),true);
    });
    it("should return 'registration' when given isFromBellville.startsWith('CY')", function(){
      assert.equal(isFromBellville('CY2563'), true);
    });
});
