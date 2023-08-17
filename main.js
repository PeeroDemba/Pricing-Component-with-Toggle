"use strict";

const annual = document.getElementById("annually");
const month = document.getElementById("monthly");
const basic = document.getElementById("basicprice");
const prof = document.getElementById("profprice");
const master = document.getElementById("masterprice");

annual.addEventListener("click", function () {
  basic.innerHTML = "19.99";
  prof.innerHTML = "24.99";
  master.innerHTML = "39.99";
  annual.style.display = "none";
  month.style.display = "block";
});

month.addEventListener("click", function () {
  basic.innerHTML = "199.99";
  prof.innerHTML = "249.99";
  master.innerHTML = "399.99";
  annual.style.display = "block";
  month.style.display = "none";
});
