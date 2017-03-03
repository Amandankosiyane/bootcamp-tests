describe('countAllFromTown', function(){
    it("should return 'howManyTown' when given countRegNum.startsWith(location)", function() {
        assert.equal(countAllFromTown('CL 124, CL 341, CL 341','CL'),3);
    });

});
