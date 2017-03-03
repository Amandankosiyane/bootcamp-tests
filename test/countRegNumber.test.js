describe('countRegNumber', function(){
    it("should return 'registration.length 'when given regNum", function() {
        assert.equal(countRegNumber('CA 182736, CY 523519,CJ 812328'),3);
    });

});
