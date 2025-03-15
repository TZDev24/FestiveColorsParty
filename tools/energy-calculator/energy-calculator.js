// var hoursPerKwh = 1000 / wattage;
// var perHourCost = 1000 / wattage * quantity * energyRate

// The inputs that we're getting our data from
let energyRate = document.getElementById("energyRate");

let dev1Watts = document.getElementById("device1Wattage");
let dev2Watts = document.getElementById("device2Wattage");

let dev1Qty = document.getElementById("device1Quantity");
let dev2Qty = document.getElementById("device2Quantity");

// The outputs where we are displaying our data
let dev1kwhOutput = document.getElementById("dev1kWhOutput");
let dev2kwhOutput = document.getElementById("dev2kWhOutput");

let dev1costOutput = document.getElementById("dev1costOutput");
let dev2costOutput = document.getElementById("dev2costOutput");

function hoursPerKwh(wattage, quantity = 1) {
  return (1000 / wattage) / quantity;
}

function costPerHour(energyRate, wattage, quantity = 1) {
  let kwh = wattage / 1000 * quantity;
  return energyRate * kwh;
}


// Instead of having to press a calculate button, let's just update the math in real time. Much more convenient that way.
//
let updateOutput = function() {

  // Start doing the math and updating the text accordingly
  
  let dev1hrsPerKwh = 1000 / dev1Watts.value;
  let dev2hrsPerKwh = 1000 / dev2Watts.value;

  // Divide the hrs per kwh by quantity in a separate statement. It was acting strange
  // when doing all the math in a single statement.
  //
  // UPDATE: This didn't fix it either. What the hell, man?
  dev1hrsPerKwh = (dev1hrsPerKwh / dev1Qty.value).toFixed(2);
  dev2hrsPerKwh = (dev2hrsPerKwh / dev2Qty.value).toFixed(2);


  if (dev1hrsPerKwh > dev2hrsPerKwh) {
    dev1kwhOutput.style.color = "green";
    dev1kwhOutput.textContent = dev1hrsPerKwh + " hrs/kWh";

    dev2kwhOutput.style.color = "red";
    dev2kwhOutput.textContent = dev2hrsPerKwh + " hrs/kWh";
  }
  else {
    dev1kwhOutput.style.color = "red";
    dev1kwhOutput.textContent = dev1hrsPerKwh + " hrs/kWh";

    dev2kwhOutput.style.color = "green";
    dev2kwhOutput.textContent = dev2hrsPerKwh + " hrs/kWh";
  }


  let dev1costPerHour = costPerHour(energyRate.value, dev1Watts.value, dev1Qty.value).toFixed(5);
  let dev2costPerHour = costPerHour(energyRate.value, dev2Watts.value, dev2Qty.value).toFixed(5);

  if (dev1costPerHour > dev2costPerHour) {
    dev1costOutput.style.color = "red";
    dev2costOutput.style.color = "green";
  }
  else {
    dev1costOutput.style.color = "green";
    dev2costOutput.style.color = "red";
  }

  dev1costOutput.textContent = "$" + dev1costPerHour + "/hr";
  dev2costOutput.textContent = "$" + dev2costPerHour + "/hr";

  console.log("Device 1 cost per hour: " + dev1costPerHour);
  console.log("Device 2 cost per hour: " + dev2costPerHour);
};

energyRate.addEventListener("input", updateOutput);
dev1Watts.addEventListener("input", updateOutput);
dev2Watts.addEventListener("input", updateOutput);
dev1Qty.addEventListener("input", updateOutput);
dev2Qty.addEventListener("input", updateOutput);

// Run the function at the very end of the script. When the user refreshes the page on some browsers, they won't need to re-enter the input to see the output.
updateOutput();
