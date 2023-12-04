// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

console.log("Hello, " + getInput(1) + " " + getInput(2))
console.log("I'm capitalizing " + getInput(1).toUpperCase() + " " + getInput(2).toUpperCase() + "! Is it capital?")
console.log("These are your initials " + getInput(1)[0] + getInput(2)[0])
console.log("This is my Email: " + getInput(1)[0].toLowerCase() + getInput(2).toLowerCase() + ".prsvr@gmail.com.")