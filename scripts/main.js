$(document).ready( function () {
	$clickCounter = 0;
	$x = "X";
	$o = "O";

	$finalScore = 0;

	console.log("works");

	$('.box').click( function () {
		if ($clickCounter % 2 == 0) {
			$(this).html($x);
			$finalScore = $finalScore + 1;
			console.log($finalScore);
			$clickCounter = $clickCounter + 1;
			$('.playerTurn').html('Player 2 Go!');
		} else  {
			$(this).html($o);
			$clickCounter = $clickCounter + 1;
			$finalScore = $finalScore - 1;
			console.log($finalScore);
			$('.playerTurn').html('Player 1 Go!');
		}

		if ($finalScore = 0) {
			alert('Player 2 Wins MothaFucka!');
		} else {
			alert('Player 1 Wins... Owned!');
		};
		
	$(".reset").click( function() {
		$('.box').html('');
		$('.playerTurn').html('Player 1 Go!');
	});

	});











});


