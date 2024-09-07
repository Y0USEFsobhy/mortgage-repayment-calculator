let amount = document.getElementById("amount");
let term = document.getElementById("term");
let rate = document.getElementById("rate");
let select = document.querySelectorAll('input[type="radio"]');
let form = document.getElementById("form");
let button = document.querySelector("button");
let monthly = document.getElementById("monthly");
let total = document.getElementById("total");
let noResult = document.getElementById("noResult");
let result = document.getElementById("result");
let clear = document.getElementById("clear");

let amountError = document.getElementById("amountError");
let termError = document.getElementById("termError");
let rateError = document.getElementById("rateError");
let radioError = document.getElementById("radioError");

clear.onclick = function () {
  amount.value = "";
  term.value = "";
  rate.value = "";
  select.forEach((opt) => {
    if (opt.checked) {
      opt.checked = false;
    }
  });
  result.style.display = "none";
  noResult.style.display = "flex";
};
function amountCheck() {
  if (amount.value === "") {
    amountError.classList.remove("hidden");
    amount.style.cssText = "border-width:1px; border-color:hsl(4, 69%, 50%);";
    document.getElementById("amountIcon").style.cssText =
      "background:hsl(4, 69%, 50%); color:white ;";
    return false;
  } else {
    amountError.classList.add("hidden");
    amount.style.cssText = "";
    document.getElementById("amountIcon").style.cssText = "";
    return true;
  }
}
function termCheck() {
  if (term.value === "") {
    termError.classList.remove("hidden");
    term.style.cssText = "border-width:1px; border-color:hsl(4, 69%, 50%);";
    document.getElementById("termIcon").style.cssText =
      "background:hsl(4, 69%, 50%); color:white ;";
    return false;
  } else {
    termError.classList.add("hidden");
    term.style.cssText = "";
    document.getElementById("termIcon").style.cssText = "";
    return true;
  }
}
function rateCheck() {
  if (rate.value === "") {
    rateError.classList.remove("hidden");
    rate.style.cssText = "border-width:1px; border-color:hsl(4, 69%, 50%);";
    document.getElementById("rateIcon").style.cssText =
      "background:hsl(4, 69%, 50%); color:white ";
    return false;
  } else {
    rateError.classList.add("hidden");
    rate.style.cssText = "";
    document.getElementById("rateIcon").style.cssText = "";
    return true;
  }
}
function radioSelect() {
  var selectOne = false;
  select.forEach((opt) => {
    if (opt.checked) {
      selectOne = true;
    }
  });
  if (!selectOne) {
    radioError.classList.remove("hidden");
    return false;
  } else {
    radioError.classList.add("hidden");
    return true;
  }
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  amountCheck();
  termCheck();
  rateCheck();
  radioSelect();
  if (
    amountCheck() === true &&
    termCheck() === true &&
    rateCheck() === true &&
    radioSelect() === true
  ) {
    noResult.style.display = "none";
    result.style.display = "block";
  } else {
    noResult.style.display = "flex";
    result.style.display = "none";
  }
  if (document.getElementById("option1").checked) {
    let monthlyPayment =
      (amount.value *
        (rate.value / 100 / 12) *
        Math.pow(1 + rate.value / 100 / 12, term.value * 12)) /
      (Math.pow(1 + rate.value / 100 / 12, term.value * 12) - 1);
    let totalRepaid = monthlyPayment * term.value * 12;
    monthly.textContent = `£${monthlyPayment.toFixed(2)}`;
    total.textContent = `£${totalRepaid.toFixed(2)}`;
  } else {
    let monthlyPayment = amount.value * (rate.value / 100 / 12);
    let totalRepaid =
      monthlyPayment * term.value * 12 + parseFloat(amount.value);

    monthly.textContent = `£${monthlyPayment.toFixed(2)}`;
    total.textContent = `£${totalRepaid.toFixed(2)}`;
  }
});

// --------------------update-----------------------------------------------
amount.onclick = function() {
  if (amountCheck() === false){
    amountError.classList.add("hidden");
    amount.style.cssText = "";
    document.getElementById("amountIcon").style.cssText = "";
  }
}
term.onclick = function() {
  if (termCheck() === false){
    termError.classList.add("hidden");
    term.style.cssText = "";
    document.getElementById("termIcon").style.cssText = "";
  }
}
rate.onclick = function() {
  if (rateCheck() === false){
    rateError.classList.add("hidden");
    rate.style.cssText = "";
    document.getElementById("rateIcon").style.cssText = "";
  }
}

select.forEach((opt) => {
  opt.onclick = function(){
    if (opt.checked){
      radioError.classList.add("hidden");
    }
  }
});

