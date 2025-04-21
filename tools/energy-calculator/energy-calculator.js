// var hoursPerKwh = 1000 / wattage;
// var perHourCost = 1000 / wattage * energyRate

// The inputs that we're getting our data from
let energyRate = document.getElementById("energy-rate");
let wattage = document.getElementById("wattage");
let quantity = document.getElementById("quantity");

// Output that we can write to
let costOutput = document.getElementById("cost-output");

console.log("Energy rate: " + energyRate.value);
console.log("Wattage: " + wattage.value);

function hoursPerKwh(wattage) {
  return 1000 / wattage;
}

function wattsToKwh(wattage) {
  return wattage / 1000;
}

function costPerHour(energyRate, wattage) {
  let kwh = wattage / 1000;
  return (energyRate * kwh).toFixed(6);
}

// Instead of having to press a calculate button, let's just update the math in real time. Much more convenient that way.
//
let updateOutput = function() {
  let cost = "$" + (costPerHour(energyRate.value, wattage.value) * quantity.value) + "/hr";
  console.log("Test is this working?");
  costOutput.textContent = cost;
};

// energyRate.addEventListener("input", updateOutput);
energyRate.addEventListener("input", updateOutput);

wattage.addEventListener("input", updateOutput);

quantity.addEventListener("input", updateOutput);

// Run the function at the very end of the script. When the user refreshes the page on some browsers, they won't need to re-enter the input to see the output.
updateOutput();
