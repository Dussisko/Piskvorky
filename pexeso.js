function startPiskvorky(s) {  //main fnction 
	// basic settings
	if (s > 1000) {
		s = 1000;
	}
	if (s < 300) {
		s = 300;
	}
	var size = s;
	var canvas  = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.setAttribute("width", (size + 200)); 
	canvas.setAttribute("height",size); 
	var textsize = size / 6;
	var page = '';
	var players = 0;
	var turn = 1;
	var type = 0;
	var side = 0;
	var playground = new Array();
	var endline = {
		x1 : 0,
		y1 : 0,
		x2 : 0,
		y2 : 0
	}
	
	main();	
	
	function headline() { // piskvorky headline
		canvas.width = canvas.width;
		context.font = "bold "+textsize+"px Arial";
		var letter = ((size + 200) / 2) - (textsize * 3 );
		var text = 'PIŠKVORKY';
		for (i = 0; i < text.length; i++) {
			if ((i%2) == 0) {
				context.fillStyle = "blue";
			}
			else {
				context.fillStyle = "red";
			}
			context.fillText(text[i], letter, textsize);
			if (text[i] == 'I') {
				letter += (textsize / 2.5);	
			}
			else {
				letter += (textsize / 1.4);
			}
		}
	}
	
	
	
	
	
	// pages
	function main() { //main page (singleplayer, multiplayer)
		// headline
		page = 'main';
		players = 0;
		type = 0;
		headline();
		// buttons
		var x = ((size + 200) / 2) - (textsize * 3 );
		var y = (size  / 2) - textsize;
		context.beginPath();
		context.rect(x, y, 2.5*textsize, textsize);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
				
		context.beginPath();
		context.rect((x + (textsize * 3)), y, 2.5*textsize, textsize);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		
		context.beginPath();
		context.rect((x + (textsize * 1.5)), (size - textsize), 2.5*textsize, textsize);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		
		context.font = "bold "+(textsize / 3)+"px Arial";
		context.fillStyle = "blue";
		context.fillText("Jeden hráč", x + 20, y + (textsize / 1.5) );
		context.fillStyle = "red";
		context.fillText("Dvaja hráči", (x + (textsize * 3) + 20), y + (textsize / 1.5));
		context.fillStyle = "blue";
		context.fillText("Hlavná stránka", (x + (textsize * 1.6 )) , (size - (textsize / 2.5)) );
	}
	
	function gametype() { // type of game (3x3 or 10x10)
		// headline
		page = 'gametype';
		headline();
		// buttons
		var x = ((size + 200) / 2) - (textsize * 3 );
		var y = (size  / 2) - textsize;
		context.beginPath();
		context.rect(x, y, 2.5*textsize, textsize);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
				
		context.beginPath();
		context.rect((x + (textsize * 3)), y, 2.5*textsize, textsize);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		
		context.beginPath();
		context.rect((x + (textsize * 1.5)), (size - textsize), 2.5*textsize, textsize);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		
		context.font = "bold "+(textsize / 4 )+"px Arial";
		context.fillStyle = "blue";
		context.fillText("3x3 3 na výhru", x + 20, y + (textsize / 1.5) );
		context.fillStyle = "red";
		context.fillText("10x10 5 na výhru", (x + (textsize * 3) + 20), y + (textsize / 1.5));
		context.font = "bold "+(textsize / 3 )+"px Arial";
		context.fillStyle = "blue";
		context.fillText("Hlavná stránka", (x + (textsize * 1.6 )) , (size - (textsize / 2.5)) );
	}
	
	function game() { // starting new game
		page = 'ingame';
		if (type == 1) {
			side = 3;
		}
		else {
			side = 10;
		}
		for(x = 0; x < side; x++) {
			playground[x] = new Array();
			for(y = 0; y < side; y++) {
			  playground[x][y] = 0;
			}
		}
		drawPlayground();
	}
	
	
	
	
	
	
	// drawing 
	function drawPlayground() { // draw actual playground
		canvas.width = canvas.width;
		
		context.beginPath();
		context.rect(0, 0, size, size);
		context.fillStyle = 'black';
		context.fill();
		
		a = (size - (( side - 1) * 5 )) / side;
		b = (size - (a*side))/2;
		for(x = 0; x < side; x++) {
			for(y = 0; y < side; y++) {
			  context.beginPath();
				context.rect((a*x) + b, (a*y) + b, a - 5, a - 5);
				context.fillStyle = 'white';
				context.fill();
				context.font = "bold "+(a-5 )+"px Arial";
				if (playground[x][y] == 1 ) {
					context.fillStyle = "blue";
					context.fillText("o", ((x + 0.15)*a) + b , ((y + 0.65)*a ) +b);	
				}
				else if (playground[x][y] == 2 ) {
					context.fillStyle = "red";
					context.fillText("x", ((x + 0.15)*a) + b , ((y + 0.75)*a ) +b);	
				} 
			}
		}
		
		textsize1 = 400 / 6;
		if (textsize < textsize1) {
			textsize1 = textsize;
		}
		context.beginPath();
		context.rect(size, (size - textsize1), 200, textsize1);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		
		context.beginPath();
		context.rect(size, (size - (2*textsize1) ), 200, textsize1);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		
		context.font = "bold "+(textsize1 / 3 )+"px Arial";
		context.fillStyle = "blue";
		context.fillText("Hlavná stránka", (size + (textsize1 * 0.3 )) , (size - (textsize1 / 2.5)) );
		context.fillText("Reštartuj kolo", (size + (textsize1 * 0.3 )) , (size - (textsize1 / 2.5) - textsize1) );
		if (page == 'ingame') {
			context.font = " "+(textsize1 / 3 )+"px Arial";
			context.fillStyle = "Black";
			context.fillText("Na ťahu je hráč", (size + (textsize1 * 0.3 )) , (textsize1) );
			if (turn == 1) {
				context.font = "bold "+(textsize1 )+"px Arial";
				context.fillStyle = "blue";
				context.fillText("o", (size + (textsize1)) , (2* textsize1) );
			}
			else {
				context.font = "bold "+(textsize1 )+"px Arial";
				context.fillStyle = "red";
				context.fillText("x", (size + (textsize1)) , (2* textsize1) );
			}
		}
		else if (page == 'endgame') {
			context.font = "bold "+(textsize1 / 3 )+"px Arial";
			context.fillStyle = "Black";
			context.fillText("Vyhral hráč", (size + (textsize1 * 0.3 )) , (textsize1) );
			if (turn == 2) {
				context.font = "bold "+(textsize1 )+"px Arial";
				context.fillStyle = "blue";
				context.fillText("o", (size + (textsize1)) , (2* textsize1) );
			}
			else {
				context.font = "bold "+(textsize1 )+"px Arial";
				context.fillStyle = "red";
				context.fillText("x", (size + (textsize1)) , (2* textsize1) );
			}
			context.strokeStyle = 'black'; 
			context.beginPath();
			context.moveTo((a*endline.x1) + b + (0.5 * a), (a*endline.y1) + b + (0.5 * a));
			context.lineTo((a*endline.x2) + b + (0.5 * a), (a*endline.y2) + b + (0.5 * a));
			context.lineWidth = 13 - side;
			context.stroke();
			context.closePath();  
		}
		if ((turn == 2) && (players == 1) && (page == 'ingame')) {
			bot();
		}
	}
	
	
	
	
	// functions on checking, if someone won
	function win(x,y) { // main checking function
		if (type == 1) {
			need = 3;
		}
		else {
			need = 5;
		}
		var have = checkRow(x,y);
		if (have == need) {
			return true;
		}
		bla = checkColumn(x,y);
		if (have < bla) {
			have = bla;
		}
		if (have == need) {
			return true;
		}
		bla = checkDiagonale1(x,y);
		if (have < bla) {
			have = bla;
		}
		if (have == need) {
			return true;
		}
		bla = checkDiagonale2(x,y);
		if (have < bla) {
			have = bla;
		}
		if (have == need) {
			return true;
		}
		return have;
	}
	
	function checkDiagonale2(x,y) { //checking +- and -+ diagonale
		i = x;
		j = y;
		row = playground[x][y];
		var have = 0;
		while ((have < need) && (j < side) && (i >= 0) && (playground[i][j] == row)) {
			have++;
			j++;
			i--;
		}
		endline.x1 = i+1;	
		endline.y1 = j-1;
		j = y - 1;
		i = x + 1;
		while ((have < need)  && (j >= 0) && (i < side) && (playground[i][j] == row)) {
			have++;
			j--;
			i++;
		}
		endline.x2 = i - 1;	
		endline.y2 = j + 1;
		return have;
	}
	
	function checkDiagonale1(x,y) { //checking ++ and -- diagonale
		i = x;
		j = y;
		row = playground[x][y];
		var have = 0;
		while ((have < need) && (j >= 0) && (i >= 0) && (playground[i][j] == row)) {
			have++;
			j--;
			i--;
		}
		endline.x1 = i+1;	
		endline.y1 = j+1;
		j = y + 1;
		i = x + 1;
		while ((have < need) && (j < side) && (i < side) && (playground[i][j] == row)) {
			have++;
			j++;
			i++;
		}
		endline.x2 = i - 1;	
		endline.y2 = j - 1;
		return have ;
	}
	
	function checkColumn(x,y) { // checking columns
		i = x;
		j = y;
		row = playground[x][y];
		var have = 0;
		while ((have < need) && (j >= 0) && (playground[i][j] == row)) {
			have++;
			j--;
		}
		endline.x1 = i;	
		endline.y1 = j+1;
		j = y + 1;
		while ((have < need) && (j < side) && (playground[i][j] == row)) {
			have++;
			j++;
		}
		endline.x2 = i;	
		endline.y2 = j - 1;
		return have ;
	}
	
	function checkRow(x,y) { // checking rows
		i = x;
		j = y;
		row = playground[x][y];
		var have = 0;
		while ((have < need) && (i >= 0) && (playground[i][j] == row)) {
			have++;
			i--;
		}
		endline.x1 = i+1;	
		endline.y1 = j;
		i = x + 1;
		while ((have < need) && (i < side) && (playground[i][j] == row)) {
			have++;
			i++;
		}
		endline.x2 = i - 1;	
		endline.y2 = j;
		return have ;
	}
	
	
	
	
	
	// AI
	function bot(){ // bot simple handling
		var mybest = {
			count : 0,
			x : 0,
			y : 0
		}
		var opbest = {
			count : 0,
			x : 0,
			y : 0
		}
		var have = 0;
				if (type == 1) {
			need = 3;
		}
		else {
			need = 5;
		}
		free = false;
		for(x = 0; x < side; x++) {
			for(y = 0; y < side; y++) {
			  if (playground[x][y] == 0) {
					free = true;
					playground[x][y] = 1; //opponent
					have = win(x,y);
					if (have === true) {
						have = need;
					}
					if (have > opbest.count) {
						opbest.count = have;
						opbest.x = x;
						opbest.y = y;
					}
					if ((have == opbest.count) && (Math.floor(Math.random()*10) < 4)) {
						opbest.count = have;
						opbest.x = x;
						opbest.y = y;
					}
					playground[x][y] = 2; //AI
					have = win(x,y);
					if (have === true) {
						have = need;
					}
					if (have > mybest.count) {
						mybest.count = have;
						mybest.x = x;
						mybest.y = y;
					}
					if ((have == mybest.count) && (Math.floor(Math.random()*10) < 2)) {
						mybest.count = have;
						mybest.x = x;
						mybest.y = y;
					}
					playground[x][y] = 0;
				}
			}
		}
		turn = 1;
		if (free) {
			if (opbest.count > mybest.count) {
				playground[opbest.x][opbest.y] = 2;
				end = win(opbest.x, opbest.y);
			}
			else {
				playground[mybest.x][mybest.y] = 2;
				end = win(mybest.x,mybest.y);
			}
			if (end === true) {
				page = 'endgame';
			}
			drawPlayground();
		}
	}
	
	
	
	
	
	// canvas clik handling functions
	canvas.addEventListener("mousedown", getPosition, false);
	
	function getPosition(event) // get x and y of click
	{
		var x = event.clientX + window.pageXOffset;
		var y = event.clientY + window.pageYOffset;
		handleclick(x,y);
	}
	
	function handleclick(x,y) { // take action based on x,y and current page
		switch (page) {
			case 'main':
			case 'gametype': 
				var a = ((size + 200) / 2) - (textsize * 3 );
				var b = (size  / 2) - textsize;
				if (((x > (a  + (textsize * 1.5))) && (x < (a+(4*textsize)))) && ((y > (size - textsize)) && (y < size )) ) { 
					main();
				}
				
				if (((x > a) && (x < (a+(2.5*textsize)))) && ((y > b) && (y < (b+textsize))) ) { 
					if (page == 'main') {
						players = 1;
						gametype();
					}
					else if (page == 'gametype') {
						type = 1;
						game();
					}
				}
				
				a = a + (textsize * 3);
				if (((x > a) && (x < (a+(2.5*textsize)))) && ((y > b) && (y < (b+textsize))) ) {  
					if (page == 'main') {
						players = 2;
						gametype();
					}
					else if (page == 'gametype') {
						type = 2;
						game();
					}
				}
			break;
			case 'ingame':
				if ((turn == 2) && (players == 1)) {
				}
				else {
					place = canPlace(x,y)
					if (place) {
						playground[tilex][tiley] = turn;
						turn++;
						if (turn > 2) {
							turn = 1;
						}
						if (win(tilex,tiley) === true) {
							page = 'endgame';
						}
						drawPlayground();
					}
				}
			case 'endgame':
				textsize1 = 400 / 6;
				if (textsize < textsize1) {
					textsize1 = textsize;
				}
				var a = size;
				var b = size - textsize1;
				if (((x > a) && (x < (a + 200))) && ((y > b) && (y < (b + textsize1))) ) { 
					main();
				}
				if (((x > a) && (x < (a + 200))) && ((y > (b - textsize1)) && (y < b )) ) { 
					game();
				}	
			break;
		}
	}
	
	function canPlace(x,y) { // check if mark can be placed on tile
		a = (size - (( side - 1) * 5 )) / side;
		b = (size - (a * side)) / 2; 
		tilex =  Math.floor((x - b) /  a);
		tiley =  Math.floor((y - b) /  a);
		i = (x - b) - (tilex * a);
		j = (y - b) - (tiley * a);
		if (((i >= 0) &&  ((i + 5) <= a)) && ((j >= 0) &&  ((j + 5) <= a)) && ((tilex < side) && (tiley < side)) ) {
			if (playground[tilex][tiley] == 0) {
				return true;
			}
		}
		return false;
	}
	
	
}

