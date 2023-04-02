import cards from "./cards.json" assert { type: "json" };
import luhnCheck from "./luhnCheck.js";
import formatCreditCardNumber from "./format-input.js";

const outputdiv = document.getElementById("outputValue");
const buttons = document.querySelector(".buttons");

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
          formatCreditCardNumber();
          outputdiv.style.backgroundColor = "	#AAFF00";
          outputdiv.style.color = "black";
          outputdiv.style.opacity = "1";
          outputdiv.style.height = "100px";
          buttons.style.opacity = "1";
          return `Number is correct. Card issuer is ${card}.`;
        } else {
          formatCreditCardNumber();
          outputdiv.style.backgroundColor = "#FF4433";
          outputdiv.style.color = "black";
          outputdiv.style.opacity = "1";
          outputdiv.style.height = "100px";
          return `Invalid number`;
        }
      }
    }
  }
  outputdiv.style.backgroundColor = "#FF4433";
  outputdiv.style.color = "black";
  outputdiv.style.opacity = "1";
  outputdiv.style.height = "100px";
  return `Enter correct value please!`;
};

export default checkBank;
