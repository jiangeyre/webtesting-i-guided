const sum = (a, b) => a + b // implicit return
const subtract = (a, b) => a - b

/* This is NOT what you will do to write tests */

// STEP 1 - Write non-automated tests for our functions (units)

const result = sum(3, 7);
const expected = 10;

if (result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

/* This is how you will actually write tests */