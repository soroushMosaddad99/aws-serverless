const chai = require('chai')
const expect = chai.expect

const calculator = require('../calc')

describe('Calc', () => {
    describe('Addition', () => {
        it('1 + 1 should be equal to 2', () => {
            expect(calculator.add(1, 1)).to.equal(2)
        })
        it('different scenarios', () => {
            expect(calculator.add(2, 0)).to.equal(2)
            expect(calculator.add(78, 43)).to.equal(121)
            expect(calculator.add(-34, 65)).to.equal(31)
            expect(calculator.add(-10, +10)).to.equal(0)
        })
    })

    describe('Subtraction', () => {
        it('1 - 1 should be equal to 0', () => {
            expect(calculator.subtract(1, 1)).to.equal(0)
        })
        it('different scenarios', () => {
            expect(calculator.subtract(10, -10)).to.equal(20)
            expect(calculator.subtract(29, 100)).to.equal(-71)
            expect(calculator.subtract(0, 0)).to.equal(0)
            expect(calculator.subtract(-43, -44)).to.equal(1)
        })
    })

    describe('Multiplication', () => {
        it('1 * 1 should be equal to 1', () => {
            expect(calculator.multiply(1, 1)).to.equal(1)
        })
        it('different scenarios', () => {
            expect(calculator.multiply(2, 0)).to.equal(0)
            expect(calculator.multiply(576, 100)).to.equal(57600)
            expect(calculator.multiply(-10, -10)).to.equal(100)
            expect(calculator.multiply(56, -1)).to.equal(-56)
        })
    })

    describe('Division', () => {
        it('1 / 1 should be equal to 1', () => {
            expect(calculator.divide(1, 1)).to.equal(1)
        })
        it('different scnarios', () => {
            expect(calculator.divide(4, 2)).to.equal(2)
            expect(calculator.divide(50, 5)).to.equal(10)
            expect(calculator.divide(-15, 2)).to.equal(-7.5)
        })
        it('zero division', () => {
            expect(calculator.divide(100, 0)).to.equal(undefined)
            expect(calculator.divide(-24, 0)).to.equal(undefined)
            expect(calculator.divide(0, 0)).to.equal(undefined)
        })
    })
})