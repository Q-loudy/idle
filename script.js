// script.js
let coins = 100;
let autoClickers = 0;
let autoClickerCost = 100;
 
let autoClickers2 = 0;
let autoClicker2Cost = 1000;

let autoClickers3 = 0;
let autoClicker3Cost = 10000;

let autoClickers4 = 0;
let autoClicker4Cost = 100000;

let autoClickers5 = 0;
let autoClicker5Cost = 1000000;

const coinDisplay = document.getElementById("coinCount");
const clickButton = document.getElementById("clickButton");

const buyAutoClickerButton = document.getElementById("buyAutoClicker");
const autoClickerCountDisplay = document.getElementById("autoClickerCount");
const autoClickerCostDisplay = document.getElementById("autoClickerCost");

const buyAutoClicker2Button = document.getElementById("buyAutoClicker2");
const autoClicker2CountDisplay = document.getElementById("autoClicker2Count");
const autoClicker2CostDisplay = document.getElementById("autoClicker2Cost");

const buyAutoClicker3Button = document.getElementById("buyAutoClicker3");
const autoClicker3CountDisplay = document.getElementById("autoClicker3Count");
const autoClicker3CostDisplay = document.getElementById("autoClicker3Cost");

const buyAutoClicker4Button = document.getElementById("buyAutoClicker4");
const autoClicker4CountDisplay = document.getElementById("autoClicker4Count");
const autoClicker4CostDisplay = document.getElementById("autoClicker4Cost");

const buyAutoClicker5Button = document.getElementById("buyAutoClicker5");
const autoClicker5CountDisplay = document.getElementById("autoClicker5Count");
const autoClicker5CostDisplay = document.getElementById("autoClicker5Cost");

clickButton.addEventListener("click", () => {
  coins++;
  updateDisplay();
});

buyAutoClickerButton.addEventListener("click", () => {
  if (coins >= autoClickerCost) {
    coins -= autoClickerCost;
    autoClickers++;
    autoClickerCost = Math.floor(autoClickerCost * 1.01);
    updateDisplay();
  }
});

buyAutoClicker2Button.addEventListener("click", () => {
  if (coins >= autoClicker2Cost) {
    coins -= autoClicker2Cost;
    autoClickers2++;
    autoClicker2Cost = Math.floor(autoClicker2Cost * 1.02);
    updateDisplay();
  }
});

buyAutoClicker3Button.addEventListener("click", () => {
  if (coins >= autoClicker3Cost) {
    coins -= autoClicker3Cost;
    autoClickers3++;
    autoClicker3Cost = Math.floor(autoClicker3Cost * 1.03);
    updateDisplay();
  }
});

buyAutoClicker4Button.addEventListener("click", () => {
  if (coins >= autoClicker4Cost) {
    coins -= autoClicker4Cost;
    autoClickers4++;
    autoClicker4Cost = Math.floor(autoClicker4Cost * 1.04);
    updateDisplay();
  }
});

buyAutoClicker5Button.addEventListener("click", () => {
  if (coins >= autoClicker5Cost) {
    coins -= autoClicker5Cost;
    autoClickers5++;
    autoClicker5Cost = Math.floor(autoClicker5Cost * 1.05);
    updateDisplay();
  }
});

function formatNumber(num) {
  if (num < 1000) return num.toString();

  const units = ["K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
  let unitIndex = -1;

  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  return num.toFixed(2) + units[unitIndex];
}

function updateDisplay() {
  coinDisplay.textContent = formatNumber(coins);
  autoClickerCountDisplay.textContent = formatNumber(autoClickers);
  autoClickerCostDisplay.textContent = formatNumber(autoClickerCost);
  
  autoClicker2CountDisplay.textContent = formatNumber(autoClickers2);
  autoClicker2CostDisplay.textContent = formatNumber(autoClicker2Cost);
  
  autoClicker3CountDisplay.textContent = formatNumber(autoClickers3);
  autoClicker3CostDisplay.textContent = formatNumber(autoClicker3Cost);
  
  autoClicker4CountDisplay.textContent = formatNumber(autoClickers4);
  autoClicker4CostDisplay.textContent = formatNumber(autoClicker4Cost);
  
  autoClicker5CountDisplay.textContent = formatNumber(autoClickers5);
  autoClicker5CostDisplay.textContent = formatNumber(autoClicker5Cost);
}

setInterval(() => {
  coins += autoClickers;
  autoClickers += autoClickers2;
  autoClickers2 += autoClickers3;  
  autoClickers3 += autoClickers4;  
  autoClickers4 += autoClickers5;  
  updateDisplay();
}, 100);
