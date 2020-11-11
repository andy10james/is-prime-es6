import { isPrime } from "./index.js";


describe("When using isPrime", () => {

    test("it returns true for 7", () => {
        const result = isPrime(7);
        expect(result).toBe(true);
    });

    test("it returns true for 3", () => {
        const result = isPrime(3);
        expect(result).toBe(true);
    });

    test("it returns true for 41", () => {
        const result = isPrime(41);
        expect(result).toBe(true);
    });

    test("it returns true for 83", () => {
        const result = isPrime(83);
        expect(result).toBe(true);
    });

    test("it returns true for 101", () => {
        const result = isPrime(101);
        expect(result).toBe(true);
    });

    test("it returns false for 6", () => {
        const result = isPrime(6);
        expect(result).toBe(false);
    });

    test("it returns false for 9", () => {
        const result = isPrime(9);
        expect(result).toBe(false);
    });

    test("it returns false for 42", () => {
        const result = isPrime(9);
        expect(result).toBe(false);
    });

    test("it returns false for 90", () => {
        const result = isPrime(90);
        expect(result).toBe(false);
    });

    // we don't support negative numbers

});
