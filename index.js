let cards = [];

// function writeCards(cards, event) {
//   for (let i = 0; i < [cards].length; i++){
//     cards[i] = (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`) ;
//     }
//     return cards;

// }

function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
  cards[i] = (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`) ;
  }
  return cards;
}

writeCards(["father time", "sister fate", "lady love",], "actualization");

function countDown(n) {
  while (n >= 0) {
    console.log(n--)
  }
};

countDown(10);