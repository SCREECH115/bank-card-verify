import cards from "./cards.json" assert { type: "json" };
import luhnCheck from "./luhnCheck.js";

const checkBank = (number) => {
  number = number.toString().split("");
  const numberLen = number.length;

  for (let card in cards) {
    const cardLenths = cards[card].numberLength;
    const cardIndex = cards[card].startIndex;

    for (let i = 0; i < cardIndex.length; i++) {
      let start = number[0] + number[1];

      if (
        cardIndex[i] === parseInt(start) ||
        (cardIndex[i] === parseInt(number[0]) && luhnCheck(number.join("")))
      ) {
        if (cardLenths.includes(numberLen)) {
          return `${card}`;
        } else {
          return `Nieprawidłowy`;
        }
      }
    }
  }
  return `Nieprawidłowy`;
};

export default checkBank;
