$(document).ready( function () {
	var clickCounter = 0;
	var x = "X";
	var o = "O";

	var finalScore = 0;



	console.log("works");

	$('.box').click( function () {
		if (clickCounter % 2 == 0 && !$(this).hasClass('O')) {
			$(this).html(x);
			$(this).addClass('X');

			if (
				($('#box1').html() == x && $('#box2').html() == x && $('#box3').html() == x) ||
				($('#box4').html() == x && $('#box5').html() == x && $('#box6').html() == x) ||
				($('#box7').html() == x && $('#box8').html() == x && $('#box9').html() == x) ||

				($('#box1').html() == x && $('#box4').html() == x && $('#box7').html() == x) ||
				($('#box2').html() == x && $('#box5').html() == x && $('#box8').html() == x) ||
				($('#box3').html() == x && $('#box6').html() == x && $('#box6').html() == x) ||

				($('#box1').html() == x && $('#box5').html() == x && $('#box9').html() == x) ||
				($('#box3').html() == x && $('#box5').html() == x && $('#box7').html() == x) 
				) {
					alert('Player 1 Wins!');	
				}

				if ($('#box1').html() !== "" && $('#box2').html() !== "" && $('#box3').html() !== "" &&
					$('#box4').html() !== "" && $('#box5').html() !== "" && $('#box6').html() !== "" &&
					$('#box7').html() !== "" && $('#box8').html() !== "" && $('#box9').html() !== "") 
					 {
					alert('Ya Both Win!');
				}
				

			clickCounter = clickCounter + 1;
			$('.playerTurn').html('Player 2 Go!');


		}  else if (!$(this).hasClass('X')) {
			$(this).html(o);
			$(this).addClass('O');
			if (
				($('#box1').html() == o && $('#box2').html() == o && $('#box3').html() == o) ||
				($('#box4').html() == o && $('#box5').html() == o && $('#box6').html() == o) ||
				($('#box7').html() == o && $('#box8').html() == o && $('#box9').html() == o) ||

				($('#box1').html() == o && $('#box4').html() == o && $('#box7').html() == o) ||
				($('#box2').html() == o && $('#box5').html() == o && $('#box8').html() == o) ||
				($('#box3').html() == o && $('#box6').html() == o && $('#box6').html() == o) ||

				($('#box1').html() == o && $('#box5').html() == o && $('#box9').html() == o) ||
				($('#box3').html() == o && $('#box5').html() == o && $('#box7').html() == o) 
				) {
				alert('Player 2 Wins!');	
				}

				if ($('#box1').html() !== "" && $('#box2').html() !== "" && $('#box3').html() !== "" &&
					$('#box4').html() !== "" && $('#box5').html() !== "" && $('#box6').html() !== "" &&
					$('#box7').html() !== "" && $('#box8').html() !== "" && $('#box9').html() !== "") 
					 {
					alert('Ya Both Win!');
				} 

			clickCounter = clickCounter + 1;
			$('.playerTurn').html('Player 1 Go!');
		} else {

		}
		console.log(clickCounter);
	
		});
	
		
	$(".reset").click( function() {
		$('.box').removeClass('X O');
		$('.box').html('');
		$('.playerTurn').html('Player 1 Go!');
		clickCounter = 0;
		console.log(clickCounter);
		


	});

});


