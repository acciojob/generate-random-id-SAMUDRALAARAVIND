function makeid(l) {
  // write your code here
	var res="";
	var char_list="ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(var i=0;i<l;i++){
		res+= char_list.charAt(
			Math.floor(	
				Math.random()*char_list.length
			)
		)
	}
	return res;
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
