let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	 return "Scissors";
	
}

function win(userChoice , computerChoice){
	const smallUserWord = "user".fontsize(3);
	const smallCompWord = "comp".fontsize(3);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	
	result_p.innerHTML = ` 👤 beats  💻 .You win!🔥`;
	/*document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},1000);*/
}

function loses(userChoice , computerChoice){
	const smallUserWord = "user".fontsize(3);
	const smallCompWord = "comp".fontsize(3);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore; 
	
	result_p.innerHTML = `👤 loses to  💻.You Lost....`;
	/*document.getElementById(userChoice).classList.add('green-glow');*/
}

function draw(userChoice , computerChoice){
	const smallUserWord = "user".fontsize(3);
	const smallCompWord = "comp".fontsize(3);
	result_p.innerHTML = ` Equals. It's a draw👤💻.`;

}

function playgame(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win();
			break;
		case "rp":
		case "ps":
		case "sr":
			loses();
			break;
		case "rr":
		case "pp":
		case "ss":
			draw();
			break;
	}
}

/* Click Events*/
function main(){
rock_div.addEventListener('click', function(){
	playgame("r");
})
paper_div.addEventListener('click', function(){
	playgame("p");
})

scissor_div.addEventListener('click', function(){
	playgame("s");
})

}

main();
