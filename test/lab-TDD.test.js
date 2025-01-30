//import
const {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling, 
} = require("../lab-TDD-starter");
const{describe, test} = require("node:test")
const assert = require("node:assert")
// test
describe("lab-TDD test", () => {
    // Add function tests
    describe("add function tests", () => {
        test("should return 8 when adding 3 and 5", () => {
            assert.strictEqual(add(3, 5), 8);
        });

        test("should return 0 when adding -5 and 5", () => {
            assert.strictEqual(add(-5, 5), 0);
        });
    });
     // Subtract function tests
     describe("subtract function tests", () => {
        test("should return -4 when subtracting 5 from 9", () => {
            assert.strictEqual(subtract(5, 9), -4);
        });

        test("should return 3 when subtracting -2 from 1", () => {
            assert.strictEqual(subtract(1, -2), 3);
        });
    });

    // Multiply function tests
    describe("multiply function tests", () => {
        test("should return 108 when multiplying 12 and 9", () => {
            assert.strictEqual(multiply(12, 9), 108);
        });

        test("should return 0 when multiplying any number by 0", () => {
            assert.strictEqual(multiply(10, 0), 0);
        });
    });

    // Divide function tests
    describe("divide function tests", () => {
        test("should return 11 when dividing 55 by 5", () => {
            assert.strictEqual(divide(55, 5), 11);
        });

        test("should throw an error when dividing by zero", () => {
            assert.throws(() => divide(5, 0), /cannot divide by zero genius/);
        });
    });

    // Modulus function tests
    describe("modulas function tests", () => {
        test("should return 1 when finding modulus of 17 and 4", () => {
            assert.strictEqual(modulas(17, 4), 1);
        });

        test("should return 0 when a number is divisible by another", () => {
            assert.strictEqual(modulas(10, 5), 0);
        });
    });

    // Power function tests
    describe("power function tests", () => {
        test("should return 32 when raising 2 to the power of 5", () => {
            assert.strictEqual(power(2, 5), 32);
        });

        test("should return 1 when raising any number to power 0", () => {
            assert.strictEqual(power(7, 0), 1);
        });
    });

    // Square root function tests
    describe("squareRoot function tests", () => {
        test("should return 5 when finding square root of 25", () => {
            assert.strictEqual(squareRoot(25), 5);
        });

        test("should throw an error when finding square root of a negative number", () => {
            assert.throws(() => squareRoot(-9), /invalid/);
        });
    });

    // Floor function tests
    describe("floor function tests", () => {
        test("should return 15 when flooring 15.3", () => {
            assert.strictEqual(floor(15.3), 15);
        });

        test("should return -4 when flooring -3.2", () => {
            assert.strictEqual(floor(-3.2), -4);
        });
    });

    // Ceiling function tests
    describe("ceiling function tests", () => {
        test("should return 16 when ceiling 15.3", () => {
            assert.strictEqual(ceiling(15.3), 16);
        });

        test("should return -3 when ceiling -3.2", () => {
            assert.strictEqual(ceiling(-3.2), -3);
        });
    });

});