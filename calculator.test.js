const { add, subtract, multiply, divide, clearAllfields, equals} = require("./calculator");
const { TestScheduler } = require("jest");

//Test for addition function
describe("valid additions", () => {
    //Add two numbers
    test("1 + 1 = 2.0000", () => {
        expect(add(1,1)).toEqual(2.0000);
    });
    //Add two numbers one ppositive integer and another neagtive integer
    test("1 + (-5)  = -4", () => {
        expect(add(1,-5)).toEqual(-4.0000);
    });
    //Add two number when passed as string
    test("10 + 20 = Throws error", () => {
        expect(() => {
            add("10","20");
          }).toThrow('Strings are not accepted');
    });
    //Add two numbers when passed as floating oint numbers
    test("3.21 + 2.78 = 5.9900", () => {
        expect(add(3.21,2.78)).toEqual(5.9900);
    });
});

//Test for subtraction function
describe("valid subtractions", () => {
    //Subtract two numbers
    test("1 - 1 = 0", () => {
        expect(subtract(1,1)).toBeCloseTo(0.0000);
    });
    //Subtract two neagtive integer
    test("1 - (-5)  = 6", () => {
        expect(subtract(1,-5)).toBeCloseTo(6.0000);
    });
    //Subtract two number when passed as string
    test("20 - 10 = Throws error", () => {
        expect(() => {
            subtract("20","10");
          }).toThrow('Strings are not accepted');
    });
    //Subtract two numbers when passed as floating point numbers
    test("3.21 - 2.73 = 0.43", () => {
        expect(subtract(3.21,2.78)).toBeCloseTo(0.4300);
    });
});

//Test for multiplication function
describe("valid multiplication", () => {
    //Multiply two numbers
    test("1 * 1 = 1", () => {
        expect(multiply(1,1)).toBeCloseTo(1.0000);
    });
    //Multiply two neagtive integer
    test("1 * (-5)  = -5", () => {
        expect(multiply(1,-5)).toBeCloseTo(-5.0000);
    });
    //Multiply two number when passed as string
    test("20 * 10 = Throws error", () => {
        expect(() => {
            multiply("20","10");
          }).toThrow('Strings are not accepted');
    });
    //Multiply two numbers when passed as floating point numbers
    test("3.21 * 2.73 = 0.43", () => {
        expect(multiply(3.21,2.78)).toBeCloseTo(8.9238);
    });
});

//Test for divide function
describe("valid division", () => {
    //Divide two numbers
    test("1 / 1 = 1", () => {
        expect(divide(1,1)).toBeCloseTo(1.0000);
    });
    //Divide two neagtive integer
    test("1 / (-5)  = -0.2000", () => {
        expect(divide(1,-5)).toBeCloseTo(-0.2000);
    });
    //Divide two number when passed as string
    test("20 / 10 = Throws error", () => {
        expect(() => {
            divide("20","10");
          }).toThrow('Strings are not accepted');
    });
    //Divide two numbers when passed as floating point numbers
    test("3.21 / 2.73 = 0.43", () => {
        expect(divide(3.21,2.78)).toBeCloseTo(1.1546);
    });
    //Divide by zero Error.
    test("20 / 0 = Throws error", () => {
        expect(() => {
            divide(20,0);
          }).toThrow('Divide by Zero Error');
    });
});

//Test for equals function
describe("valid equals", () => {
    //Do division when only two numbers and '/' is entered.
    test("8/2 = 4", () => {
        expect(equals(8,'/',2)).toBeCloseTo(4.0000);
    });
    //Do division when only one number and '/' is entered.
    test("16 / = 1", () => {
        expect(equals(16,'/')).toBeCloseTo(1.0000);
    });
});

//Test for clearAll function
describe("clear display area or display 0", () => {
    //Clear the numbers and display 0.
    test("8/2 AC", () => {
        expect(clearAllfields()).toBeCloseTo(0.0000);
    });   
});

