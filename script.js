// function makeid(l) {
//   // write your code here
// 	var res="";
// 	var char_list="ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// 	for(var i=0;i<l;i++){
// 		res+= char_list.charAt(
// 			Math.floor(	
// 				Math.random()*char_list.length
// 			)
// 		)
// 	}
// 	return res;
// }

function generateValidCharCode() { // O(1)
    // valid character code : [ 48 , 57 ] | [65, 90] | [97, 122]
    // 0.00399303 * 100 => 0.399303 => 0
    // 0.99839292 * 100 => 99.839292  => 99
    let num = parseInt(Math.random() * 100); // [0 , 99]

    if ((48 <= num && num <= 57) || (65 <= num && num <= 90) || (97 <= num && num <= 99)) {
        return num;
    }
    // num = [0, 47] | [58, 64] | [91, 96] => 0 / 5 => 0

    return 100 + parseInt(num / 5); // [100, 119]
}

function makeid(n) {
    let str = "";
    for (let i = 1; i <= n; i++) { // O(n)
        str += String.fromCharCode(generateValidCharCode());
    }

    return str;
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
