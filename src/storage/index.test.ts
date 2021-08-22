import rewire from "rewire"
const index = rewire("./index")
const save = index.__get__("save")
// @ponicode
describe("index.setupStore", () => {
    test("0", async () => {
        await index.setupStore()
    })
})

// @ponicode
describe("save", () => {
    test("0", async () => {
        await save("Elio", true)
    })

    test("1", async () => {
        await save("Dillenberg", "Dillenberg")
    })

    test("2", async () => {
        await save("elio@example.com", "Dillenberg")
    })

    test("3", async () => {
        await save("elio@example.com", false)
    })

    test("4", async () => {
        await save("Elio", "Elio")
    })

    test("5", async () => {
        await save("", NaN)
    })
})
