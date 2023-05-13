const createCounter = require("./day3")

test("createCounter return obj with 3 functions (increment,decrement,reset)", () => {
    const counter = createCounter(10);
    expect(counter.increment()).toBe(11);
    expect(counter.increment()).toBe(12);
    expect(counter.increment()).toBe(13);
    expect(counter.increment()).toBe(14);
    expect(counter.decrement()).toBe(13);
    expect(counter.decrement()).toBe(12);
    expect(counter.decrement()).toBe(11);
    expect(counter.decrement()).toBe(10);
    expect(counter.decrement()).toBe(9);
    expect(counter.decrement()).toBe(8);
    expect(counter.reset()).toBe(10);
    expect(counter.increment()).toBe(11);
    expect(counter.increment()).toBe(12);
})