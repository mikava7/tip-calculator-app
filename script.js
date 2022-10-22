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

billInput.addEventListener("input", billInputValue);

function billInputValue() {
  bill = parseFloat(billInput.value);
  tipPerPerson = tipAmount / people;
  perPerson.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
  total.innerHTML = "$" + parseFloat(bill).toFixed(2);
}

numOfPeople.addEventListener("input", numOfPeopleValue);

function numOfPeopleValue() {
  people = parseInt(numOfPeople.value);
  if (people >= 1) {
    bill = parseFloat(billInput.value);
    tipPerPerson = tipAmount / people;
    perPerson.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
    total.innerHTML = "$" + parseFloat(bill).toFixed(2);
  }
  if (people < 1) {
    error.style.display = "inline";
    error.style.marginLeft = "1rem";
    numOfPeople.style.border = "2px solid red";
    numOfPeople.style.marginLeft = "-19rem";
  }
}

const handleClick = (event) => {
  tipValue = event.target.dataset.number;
  tipAmount = (tipValue * bill) / 100 + parseFloat(bill);
  tipPerPerson = tipAmount / people;
  perPerson.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
  total.innerHTML = "$" + parseFloat(tipAmount).toFixed(2);
};

tips.forEach((tip) => {
  tip.addEventListener("click", handleClick);
});

customTip.addEventListener("input", customTipValue);

function customTipValue() {
  tipAmount = (customTip.value * bill) / 100 + parseFloat(bill);
  tipPerPerson = tipAmount / people;
  perPerson.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
  total.innerHTML = "$" + parseFloat(tipAmount).toFixed(2);
}

reset.addEventListener("click", resetvalues);

function resetvalues() {
  billInput.value = "0";
  numOfPeople.value = "1";
  customTip.value = "";
  error.style.display = "none";
  numOfPeople.style.border = "none";
  billInputValue();
  perPerson.innerHTML = "$" + (0.0).toFixed(2);
  total.innerHTML = "$" + (0.0).toFixed(2);
}
