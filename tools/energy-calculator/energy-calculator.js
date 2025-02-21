// You know, there's probably a better way to do all of this but for
// now this is the best I can come up with.

// The inputs, so we can gather data
let energyRateInput = document.getElementById("energy-rate");
let deviceWattageInput = document.getElementById("device-watts");
let hrsPerDayInput = document.getElementById("hrsperday");

// The text fields, so we can modify them
let kwhOutputText = document.getElementById("getKwhOutputText");
let hrsPerKwhText = document.getElementById("hrsPerKwhOutputText");
let costPerHourText = document.getElementById("costPerHourText");
let hrsPerDayText = document.getElementById("hrsPerDayText");

// The button, so we can run code when it's pressed
let calculateButton = document.getElementById("calculate-button");
// var hoursPerKwh = 1000 / wattage;

function getKilowattHours() {
  // If the input type is number, we don't need to parse it
  let wattage = deviceWattageInput.value;
  if (wattage === "") {
    return "Wattage not provided";
  }
  console.log(wattage / 1000);
  return wattage / 1000;
}

function getHoursPerKwh() {
  let wattage = deviceWattageInput.value;
  if (wattage === "") {
    // Tell the user they didn't provide any input
    return "Wattage wasn't provided";
  }
  console.log(1000 / wattage);
  return (1000 / wattage).toFixed(5);
}

function getEnergyCostPerHour() {
  let kwh = getKilowattHours();
  let energyCost = energyRateInput.value;
  if (energyCost === "") {
    console.log(kwh + " for one hour = No input provided");
    return "No input provided";
  }

  console.log(kwh + " for one hour = $" + (energyCost * kwh).toFixed(4) + " per hour");
  return (energyCost * kwh).toFixed(5);
}

function getHoursPerDayCost() {
  let kwh = getKilowattHours();
  let energyCost = getEnergyCostPerHour();
  let hrsPerDay = hrsPerDayInput.value;
  

  console.log(energyCost + " per hour * " + hrsPerDay + " = " + (energyCost * hrsPerDay));

  hrsPerDayText.textContent = hrsPerDay + " hours per day = " + (energyCost * hrsPerDay);
  
}

function calculateEnergy() {
  getKwhOutputText.textContent = "Kilowatt-Hours: " + getKilowattHours();
  hrsPerKwhText.textContent = "Hours per Kilowatt-Hour: " + getHoursPerKwh();
  costPerHourText.textContent = "Cost per hour: $" + getEnergyCostPerHour();
  getHoursPerDayCost();
}

// Call our functions when the button is clicked
calculateButton.addEventListener("click", calculateEnergy);
