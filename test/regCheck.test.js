describe('regCheck', function(){
    it("should return 'registration' when given regNum.endsWith(location)", function() {
        assert.equal(regCheck('DV 23 NB GP','GP'), true);
    });

});
