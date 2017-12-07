$(document).ready( function () {
	$clickCounter = 0;
	$x = "X";
	$o = "O";

	$finalScore = 0;

	$boardArray = [];
	// $('.box').map( function () {
	// 	$boardArray = 
	// });
	console.log($('.box'));
	console.log($boardArray);

	console.log("works");

	$('.box').click( function () {
		if ($clickCounter % 2 == 0) {
			$(this).html($x);

			if (
				($('#box1').html() == $x && $('#box2').html() == $x && $('#box3').html() == $x) ||
				($('#box4').html() == $x && $('#box5').html() == $x && $('#box6').html() == $x) ||
				($('#box7').html() == $x && $('#box8').html() == $x && $('#box9').html() == $x) ||

				($('#box1').html() == $x && $('#box4').html() == $x && $('#box7').html() == $x) ||
				($('#box2').html() == $x && $('#box5').html() == $x && $('#box8').html() == $x) ||
				($('#box3').html() == $x && $('#box6').html() == $x && $('#box6').html() == $x) ||

				($('#box1').html() == $x && $('#box5').html() == $x && $('#box9').html() == $x) ||
				($('#box3').html() == $x && $('#box5').html() == $x && $('#box7').html() == $x) 
				) {
					alert('Player 1 Wins!');	
				}

				if ($('#box1').html() !== "" && $('#box2').html() !== "" && $('#box3').html() !== "" &&
					$('#box4').html() !== "" && $('#box5').html() !== "" && $('#box6').html() !== "" &&
					$('#box7').html() !== "" && $('#box8').html() !== "" && $('#box9').html() !== "") 
					 {
					alert('Ya Both Win!');
				}
				

			$clickCounter = $clickCounter + 1;
			$('.playerTurn').html('Player 2 Go!');


		}  else {
			$(this).html($o);
			if (
				($('#box1').html() == $o && $('#box2').html() == $o && $('#box3').html() == $o) ||
				($('#box4').html() == $o && $('#box5').html() == $o && $('#box6').html() == $o) ||
				($('#box7').html() == $o && $('#box8').html() == $o && $('#box9').html() == $o) ||

				($('#box1').html() == $o && $('#box4').html() == $o && $('#box7').html() == $o) ||
				($('#box2').html() == $o && $('#box5').html() == $o && $('#box8').html() == $o) ||
				($('#box3').html() == $o && $('#box6').html() == $o && $('#box6').html() == $o) ||

				($('#box1').html() == $o && $('#box5').html() == $o && $('#box9').html() == $o) ||
				($('#box3').html() == $o && $('#box5').html() == $o && $('#box7').html() == $o) 
				) {
				alert('Player 2 Wins!');	
				}

				if ($('#box1').html() !== "" && $('#box2').html() !== "" && $('#box3').html() !== "" &&
					$('#box4').html() !== "" && $('#box5').html() !== "" && $('#box6').html() !== "" &&
					$('#box7').html() !== "" && $('#box8').html() !== "" && $('#box9').html() !== "") 
					 {
					alert('Ya Both Win!');
				} 

			$clickCounter = $clickCounter + 1;
			$('.playerTurn').html('Player 1 Go!');
		}

	
		});
		
	$(".reset").click( function() {
		$('.box').html('');
		$('.playerTurn').html('Player 1 Go!');
		$clickCounter = 0;
		


	});

});


