// Chessboard with everyother hash and space
//
const SIZE = 8;
let line = "";
for(let row = 0; row < SIZE; ++row){
	for(let column = 0; column < SIZE; ++column){
		let padding = (row % 2 == 0) ? 0 : 1;
		if((column + padding) % 2 == 0){
			line += " ";
		} else {
			line += "#";
		}
	}
}
console.log(line);
