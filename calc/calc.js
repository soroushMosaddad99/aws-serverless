
const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => y !== 0 ? (x / y) : undefined

module.exports = {
    add,
    subtract,
    multiply,
    divide,
}