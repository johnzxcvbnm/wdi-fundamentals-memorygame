var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log(cardsInPlay.length);
console.log("User flipped a " + cardsInPlay[0]);
console.log("User flipped a " + cardsInPlay[1]);

if(cardsInPlay.length === 2)
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("Its a match!");
	}
	else
	{
		alert("It's not a match.");
	}
}