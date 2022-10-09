// Template String
function print(firstName) {
    console.log("Hello " + firstName);

}

print("Isabelle");

function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thnanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
    `);
}

createEmail("Guy", 100)


// Searching strings - 4 different array methods

const planet = "Earth";
console.log(planet.startsWith("Ear")) //case sensitive
console.log(planet.endsWith("rth")) //case sensitive
console.log(planet.includes("s")) //case sensitive
console.log(planet.search("E")) //case sensitive
