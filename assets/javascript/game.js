var target = Math.floor(20 + Math.random() * 50);
var win = 0;
var loss = 0;
var score = 0;
var num1;
var num2;
var num3;
var num4;

$("#target").text(target);

$(".crystalImage").on("click", function(){
	
	if (score == 0) {
		num1 = Math.floor(1 + Math.random() * 12);
		num2 = Math.floor(1 + Math.random() * 12);
		num3 = Math.floor(1 + Math.random() * 12);
		num4 = Math.floor(1 + Math.random() * 12);
		$("#crystal1").attr("score", num1);
		$("#crystal2").attr("score", num2);
		$("#crystal3").attr("score", num3);
		$("#crystal4").attr("score", num4);
		score += parseInt($(this).attr("score"));
		$("#score1").text(score);
	}
	else if (score < target) {
		score += parseInt($(this).attr("score"));
		
		if (score == target) {
			win++;
			score = 0;
			$("#score1").text("You won!");	
			target = Math.floor(20 + Math.random() * 50);
		}
		else if (score > target){
			loss++;
			score = 0;
			$("#score1").text("You lost.");
			target = Math.floor(20 + Math.random() * 50);
		}
		else {
			$("#score1").text(score);
		}		
	}

	$("#wins").text(win);
	$("#losses").text(loss);
	$("#target").text(target);
	
});
