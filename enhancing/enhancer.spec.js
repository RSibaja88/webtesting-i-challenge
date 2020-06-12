const { repair, succeed, fail } = require('./enhancer.js');

const warHammer = {
    name: "War Hammer",
    durability: 75,
    enhancement: 5
}

const leatherShield = {
    name: "Leather Shield",
    durability: 35,
    enhancement: 17
}

const longSword = {
    name: "Long Sword",
    durability: 45,
    enhancement: 19
}

const mace = {
    name: "Mace",
    durability: 85,
    enhancement: 5
}



// test away!

// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100

describe('all enhance tests', () => {
    describe('test repair', () => {
        it('repair item to 100 durability', () => {
            expect(repair(mace)).toEqual({ ...mace, durability: 100 })
        })
    })
    describe("test success", () => {
        it("should return a successful enhancement",  () => {
            expect(succeed(warHammer)).toEqual({ ...warHammer, enhancement: 6})
            expect(succeed(longSword)).toEqual({...longSword, enhancement: 20})
        })
    })
    describe("test failure", () => {
        it("should -5 durability if enhancement is < 15", () => {
            expect(fail(warHammer)).toEqual({ ...warHammer, durability: 70 })
        })

        it("should -10 durability if enhancement is >= 15", () => {
            expect(fail(leatherShield)).toEqual({ ...leatherShield, durability: 25 })
        })
        it("should -1 enhancement level by 1 if enhancement is > 16", () => {
            expect(fail(leatherShield)).toEqual({ ...leatherShield, enhancement: 17, durability: 25 })
        })
    })
});


