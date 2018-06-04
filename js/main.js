
/*
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

var cards = [
	{
		rank: "queen", 
		suit: "hearts", 
		cardImage: "images/queen-of-hearts.png"}, 

	{
		rank: "queen", 
		suit: "diamonds", 
		cardImage: "images/queen-of-diamonds.png"}, 

	{
		rank: "king", 
		suit: "hearts", 
		cardImage: "images/king-of-hearts.png"}, 

	{
		rank: "king", 
		suit: "diamonds", 
		cardImage: "images/king-of-diamonds.png"}
	];

var cardsInPlay = [];

//check for match function with arrays (global scope)

function checkForMatch() 
	{
		if (cardsInPlay[0] === cardsInPlay[1]) 
	{
      		alert("You found a match!");
    } 	else 
    {
      		alert("Sorry, try again.");
    }
  	}

 //flip card function

function flipCard() 
	{
	var cardId = this.getAttribute("data-id");
	var card = cards[cardId];
	    this.setAttribute("src", card.cardImage);
	    this.setAttribute("class", "clicked");
	    console.log(this);
	    cardsInPlay.push(card.rank);
	        if (cardsInPlay.length === 2) 
	{
		        checkForMatch();
	}
  	}
 //create board function

  function createBoard() 
  	{
    for(var i = 0; i < cards.length; i++) 
    {
    var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
	var board = document.getElementById("game-board").appendChild(cardElement);
    }
  	}	
	createBoard();

//button function
function resetter(){
	inPlay.length = 0;
	var newBoard = document.getElementById("game-board").innerHTML = null;
	createBoard();
}

var button = document.getElementById("reset");

button.addEventListener('click', resetter);


