const sum = (a, b) => a + b // implicit return
const subtract = (a, b) => a - b

/* This is NOT what you will do to write tests */

// STEP 1 - Write non-automated tests for our functions (units)

let result;
let expected;

const result = sum(3, 7);
const expected = 10;

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

// STEP 2 - use node's built-in `assert` object
// In testing our code, we are "asserting" that with the same conditions, our code returns the same results

/* This is how you will actually write tests */