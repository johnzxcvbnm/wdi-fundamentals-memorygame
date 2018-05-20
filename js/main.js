var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) { console.log("Its a match!"); }
		else { console.log("It's not a match."); }
	}
};

var flipCard = function(cardID) {
	cardsInPlay.push(cards[cardID]);
	console.log("User flipped a " + cards[cardID]);
	checkForMatch();
};

flipCard(0);
flipCard(2);




