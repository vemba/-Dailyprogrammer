console.log("Fizz buzz Pbm");

console.log('Pbm Statement: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".');

console.log("Solution 1 ------------>");
function fizzBuzz(num){
	let i =0 ;
	for(i=1;i<=num;i++){
		if(i%3 === 0 && i % 5 ===0 ){
		console.log("fizzBuzz");
		}else if(i%3 === 0){
		console.log("fizz");
		} else if(i%5 === 0){
		console.log("buzz");
		}else{
		console.log(i);
        }
	}
}
fizzBuzz(20);

console.log("Solution 2 ------------>");

function fizzBuzz(num){
	let i =0 ;
	for(i=1;i<=num;i++){
		if(i%15 ===0  ){
		console.log("fizzBuzz");
		}else if(i%3 === 0){
		console.log("fizz");
		} else if(i%5 === 0){
		console.log("buzz");
		}else{
		console.log(i);
        }
	}
}
fizzBuzz(20);



console.log("----------------------> Shortest solution, Solution 3");
for(let i=1;i<=20;i++)console.log((i%3?'':'fizz')+(i%5?'':'buzz')||i);