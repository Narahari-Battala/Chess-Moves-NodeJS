var checkValid = require('./instructions');
var king = {

    getAvailablePositions : function(row,column,positions) {

        var posit = [];

        if (checkValid(row-1, column-1)&&positions[row-1][column-1] == 0) {
			
			//console.log(row + " " + String.fromCharCode((column)+96));
			posit.push(row + " " + String.fromCharCode((column)+96));
		}
		if (checkValid(row-1, column)&&positions[row-1][column] == 0) {
			
			//console.log(row + " " + String.fromCharCode((column+1)+96));
			posit.push(row + " " + String.fromCharCode((column+1)+96));
		}
		if (checkValid(row-1, column+1)&&positions[row-1][column+1] == 0) {
			
			
			//console.log(row + " " + String.fromCharCode((column+2)+96));
			posit.push(row + " " + String.fromCharCode((column+2)+96));
		}

        if (checkValid(row, column-1) && positions[row][column-1] == 0) {
			
            posit.push(row+1 + " " + String.fromCharCode((column)+96));
            //console.log(row+1 + " " + String.fromCharCode((column)+96));
		}
		if (checkValid(row, column+1) && positions[row][column+1] == 0) {
			
            posit.push(row+1 + " " + String.fromCharCode((column+2)+96));
            //console.log(row+1 + " " + String.fromCharCode((column+2)+96));
		}
		if (checkValid(row+1, column-1)&&positions[row+1][column-1] == 0) {
	
            posit.push(row+2 + " " + String.fromCharCode((column)+96));
            //console.log(row+2 + " " + String.fromCharCode((column)+96));
		}
		if (checkValid(row+1, column) && positions[row+1][column] == 0) {

            posit.push(row+2 + " " + String.fromCharCode((column+1)+96));
            //console.log(row+2 + " " + String.fromCharCode((column+1)+96));
		}
		if (checkValid(row+1, column+1) && positions[row+1][column+1] == 0) {
			
            posit.push(row+2 + " " + String.fromCharCode((column+2)+96));
            //console.log(row+2 + " " + String.fromCharCode((column+2)+96));
        }
        
        return posit;
    }
}

module.exports = king;