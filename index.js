// Code your solutions in this file


function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function coinflip() {
  return Math.floor(Math.random() * 2) === 1
}

function tailsNeverFails() {
  let counter = 0;
  while (coinflip()) {
    counter++
  }
  return `You got ${counter} tails in a row!`
}
