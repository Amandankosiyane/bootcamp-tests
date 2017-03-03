describe('countAllPaarl', function(){
    it("should return 'regNum' when given paarl[i].startsWith('CJ')", function() {
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'),3);
    });

});
