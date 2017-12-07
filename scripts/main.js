$(document).ready( function () {
	$clickCounter = 0;
	$x = "X";
	$o = "O";

	console.log("works");

	$('.box').click( function () {
		if ($clickCounter % 2 == 0) {
			$(this).html($x);
			$clickCounter = $clickCounter + 1;
		} else  {
			$(this).html($o);
			$clickCounter = $clickCounter + 1;
		}
		

	});











});


