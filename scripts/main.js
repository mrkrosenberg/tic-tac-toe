$(document).ready( function () {
	$clickCounter = 0;
	$x = "X";
	$o = "O";

	console.log("works");

	$('.box').click( function () {
		$(this).html('X');
		if ($clickCounter % 2 == 0) {
			$(this).append($x);
		} else {
			
		}
	});











});


