const memoize = require("./day9")

test("calling memoizefn only once with the same parameters and return the same values", () => {
    let callCount = 0;

    const memoizefn = memoize((a, b) => {
        callCount += 1;
        return a + b;
    });


    expect(memoizefn(2, 3)).toBe(5);
    expect(callCount).toBe(1);
    expect(memoizefn(2, 3)).toBe(5);
    expect(callCount).toBe(1);
})