function drawTree(h) {

	for (var i = 0 ; i < h ; i++) {

		var star = '';
		for (var j = 0; i >= j; j++) {

			star += '* ';
		}
		for (var k = h - i; k > 0; k--) {
			star = ' ' + star;
			}
		
		console.log(star);
	}
}

drawTree(5);