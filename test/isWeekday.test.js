describe('isWeekday', function(){
    it("should return 'day' when given !day.startsWith('S')", function() {
        assert.equal(isWeekday('Tuesday'),true);
    });

});
