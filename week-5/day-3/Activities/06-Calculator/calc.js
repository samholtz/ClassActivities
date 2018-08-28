var a1 = process.argv[2]
var b1 = process.argv[3]
var operator = process.argv[4]

function sum(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return Number(a) - Number(b)
}
function multiply(a, b) {
    return Number(a) * Number(b)
}
function divide(a, b) {
    return Number(a) / Number(b)
}


if (operator === "add") {
    console.log(sum(a1, b1));
}
else if (operator === "subtract") {
    console.log(subtract(a1, b1));
}
else if (operator === "multiply") {
    console.log(multiply(a1, b1));
}
else if (operator === "divide") {
    console.log(divide(a1, b1));
}