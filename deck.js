const suits = ['♠', '♣', '♥', '♦'];
const vals = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J'];
const spadeCards = vals.map(val => val + suits[0]);
const clubCards = vals.map(val => val + suits[1]);
const heartCards = vals.map(val => val + suits[2]);
const diamondCards = vals.map(val => val + suits[3]);

const deck = [...spadeCards, ...clubCards, ...heartCards, ...diamondCards]

function shuffleDeck(deck) {
  deck.forEach((card, index) => {
    let random = Math.floor(Math.random() * deck.length - 1);

    let temp = deck[random];
    deck[random] = card;
    deck[index] = card
  })
  return deck
}

console.log(shuffleDeck(deck))