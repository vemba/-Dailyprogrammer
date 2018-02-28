console.log("First Solution #1");

function harmlessRansomNote(text, magazineText){
	var splitText = text.split(" ");
	var splitMagazineText = magazineText.split(" ");
	return splitText.every(function(item){
		if(splitMagazineText.indexOf(item) != -1){
			var index = splitMagazineText.indexOf(item);
			splitMagazineText.splice(index, 1);
			return true;
		}else{
			return false;
    }
	});	
}

result = harmlessRansomNote("this is new1" , "this is new magazine text");
console.log(result , "--> output");