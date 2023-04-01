import checkBank from "./modules/checkCardNumber.js";

const checkBtn = document.getElementById("checkButton");
const cardValue = document.getElementById("inputValue");
const convertedValue = document.getElementById("outputValue");

checkBtn.addEventListener("click", function () {
  convertedValue.value = checkBank(cardValue.value);
});
