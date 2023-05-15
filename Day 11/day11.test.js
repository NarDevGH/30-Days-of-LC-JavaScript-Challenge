const sleep = require("./day11")

test("sleep promise", async () => {
    let t = Date.now()
    let sleepT;
    await sleep(100).then(() => sleepT = Date.now() - t)
    expect(sleepT).toBeGreaterThanOrEqual(100)
})