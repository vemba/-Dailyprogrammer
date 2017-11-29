//node js assert
var assert = require("assert");

var myProgram = require("./index");


describe("myProgram", function(){

	describe("convert", function(){

		it("function should exits --> ", function(){
			assert.equal(typeof myProgram.getChange , 'function' );
		})

		it("function should return string ", function(){
			assert.equal(typeof myProgram.getChange() , 'string' );
		})

	})

});


describe("Array", function(){

	describe("#indexOf" ,function(){

		it("should return -1 when value is not present", function(){

			assert.equal(-1, [1,2,3].indexOf(5))

		});

		it("should return +ive index , if value is present" , function(){
			var x = [1,2,3].indexOf(2);
			// assert.isAbove(x,0 , "x is greater than y")
			assert.notEqual(-1, [1,2,4].indexOf(2))

		});

		it("should return  index 2 for value 3 in the array , [1,2,3]" ,function(){
			assert.equal(2, [1,2,3].indexOf(3));
		})

	})

});
