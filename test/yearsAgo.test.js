describe('yearsAgo', function(){
    it("should return 'date.getFullYear()' when given a year", function() {
        assert.equal(yearsAgo('2005'),12);
    });

});
