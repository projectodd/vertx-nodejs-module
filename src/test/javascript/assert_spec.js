
describe('assert module', function() {
	
	beforeEach(function() {
    // setup stuff
	});
	
	afterEach(function() {
    // clean up stuff
	});
		
	//Specs
	describe('require("assert")',function() {
		it('does not fail"',function(){
      var assert = require('assert')
			expect(assert).toBe('Remember to use new on constructors!');
		});
	});
	
});
