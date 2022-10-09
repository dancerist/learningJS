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