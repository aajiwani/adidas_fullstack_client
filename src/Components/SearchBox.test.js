const SearchBox = require("./SearchBox")
// @ponicode
describe("handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new SearchBox.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleKeyPress", () => {
    let inst

    beforeEach(() => {
        inst = new SearchBox.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleKeyPress({ key: { key2: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleKeyPress({ key: { key2: "foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleKeyPress({ key: { key2: "This is a Text" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleKeyPress({ key: { key2: "Hello, world!" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleKeyPress(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clearTextField", () => {
    let inst

    beforeEach(() => {
        inst = new SearchBox.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.clearTextField(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.clearTextField(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.clearTextField(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.clearTextField(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.clearTextField(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.clearTextField(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
