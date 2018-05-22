var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1]) { alert("Its a match!"); }
		else { alert("It's not a match."); }
};

var flipCard = function() {
	var cardId = this.getAttribute('id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
};

var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		var getBoard = document.getElementById("game-board");
		var cardElement = document.createElement('img');
		//cardElemnt.setAttribute('src', '/images/back.png');
		cardElement.src = "images/back.png";
		cardElement.setAttribute('id', i);
		cardElement.addEventListener('click', flipCard);
		getBoard.appendChild(cardElement);
	}
};

createBoard();


