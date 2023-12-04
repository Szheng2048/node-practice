// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

console.log("Hello " + getInput(1)[0].toUpperCase() + getInput(1).slice(1).toLowerCase() + " " + getInput(2)[0].toUpperCase() + getInput(2).slice(1).toLowerCase())
console.log(getInput(1).toUpperCase() + " " + getInput(2).toUpperCase() + " is your name capitalized.")
console.log(getInput(1)[0].toUpperCase() + ". " + getInput(2)[0].toUpperCase() + ".")
console.log(getInput(1)[0].toLowerCase() + getInput(2).toLowerCase() + ".prsvr@gmail.com.")