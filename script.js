const billInput = document.getElementById("bill-input");
const tipSelected = document.getElementById("selected-tip");
const tips = document.querySelectorAll(".tip");
const customTip = document.getElementById("custom-tip");
const numOfPeople = document.getElementById("people-input");
const perPerson = document.getElementById("tip-amount");
const total = document.getElementById("total-amount");
const reset = document.getElementById("reset");
const error = document.getElementById("error");

let bill = "0.0";
let people = "1";
let tipValue = "0";
let tipAmount = "0";
let tipPerPerson = "1";
billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value);
  total.innerHTML = "$" + parseFloat(bill).toFixed(2);
  console.log(bill);
});
numOfPeople.addEventListener("input", () => {
  people = parseInt(numOfPeople.value);
  if (people >= 1) {
    tipPerPerson = tipAmount / people;
    perPerson.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
    console.log(people);
  }
  if (people < 1) {
    error.style.background = "red";
  }
});

const handleClick = (event) => {
  tipValue = event.target.dataset.number;
  tipAmount = (tipValue * bill) / 100 + parseFloat(bill);
  total.innerHTML = "$" + parseFloat(tipAmount).toFixed(2);
  console.log(tipValue);
};

tips.forEach((tip) => {
  tip.addEventListener("click", handleClick);
});

customTip.addEventListener("input", () => {
  tipAmount = (customTip.value * bill) / 100 + parseFloat(bill);
  total.innerHTML = "$" + parseFloat(tipAmount).toFixed(2);
});

reset.addEventListener("change", () => {
  bill = "0.0";
  people = "1";
  total.innerHTML = "$" + (0.0).toFixed(2);
  perPerson.innerHTML = "$" + (0.0).toFixed(2);
});
