
const createCounter = require("./day2")

test("counter returns 1 more than the previous call", () => {
    var counter = createCounter(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
    expect(counter()).toBe(13);

    counter = createCounter(-2);
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
})