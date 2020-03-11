const suits = ['♠', '♣', '♥', '♦'];
const vals = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J'];
const spadeCards = vals.map(val => val + suits[0]);
const clubCards = vals.map(val => val + suits[1]);
const heartCards = vals.map(val => val + suits[2]);
const diamondCards = vals.map(val => val + suits[3]);

const deck = [...spadeCards, ...clubCards, ...heartCards, ...diamondCards]

function drawForRandomCard(deck) {
  console.log(Math.floor(Math.random()*51))
  const first = deck[Math.floor(Math.random()*51)]
  const second = deck[Math.floor(Math.random()*51)]
  const third = deck[Math.floor(Math.random()*51)]
  const four = deck[Math.floor(Math.random()*51)]

  return [first, second, third, four];
}

console.log(drawForRandomCard(deck))