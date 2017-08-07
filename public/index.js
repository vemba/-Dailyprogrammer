window.onload = function(){
	// console.log("hello world");
}


document.addEventListener("DOMContentLoaded",function(){
	// console.log("hello world");

	var hoursConvertion = [ "tweleve", "one", "two" ,"three", "four", "five" , "six","seven","eight","nine","ten", "eleven"];

	var minutesOne = ["zero", "one","two", "three", "four","five","six","seven", "eight","nine"];

	var minutesTens = ["zero", "ten","twenty", "thirty","fourty","fifty"];

	var elevens = ["eleven", "tweleve", "thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];


	function convert(input){

	
	//split hour and minutes
	//convert it to 12 hr format

	//find out am/pm 

	var values = input.split(":");
	// hour = values[0];

	// if(parseInt(hour)<12){
	// 	console.log('am');
	// }else{
	// 	console.log("pm");
	// }

	var am = parseInt(values[0]) < 12 ? "am" : "pm";

	var stringHrs = hoursConvertion[(parseInt(values[0]) % 12)];

	// console.log(stringHrs);
	var strMinutes = '';
	if(parseInt(values[1]) < 10){
		strMinutes = (minutesOne[parseInt(values[1]) % 10]);
	}else if(parseInt(values[1]) < 20){
		strMinutes = (elevens[parseInt(values[1]) % 10]);
	}else {
		var splitMins = values[1].split("");
		if(splitMins[0] == 0){
			strMinutes = (minutesTens[splitMins[1] % 6]);
		}else{
			strMinutes = (minutesTens[splitMins[0] % 6] );
			strMinutes = strMinutes + " " + (minutesOne[splitMins[1] % 10]);
		}
	}
	
	console.log("The final output --> ", "It's " + stringHrs +" " + strMinutes + " " + am);
	}

	convert("20:29");

	convert("00:00");
	convert("01:30");	
	convert("12:05");	
	convert("14:01");	
	convert("20:29");
	convert("21:00");

});