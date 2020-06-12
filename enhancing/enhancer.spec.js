const { repair, succeed, fail } = require('./enhancer.js');

const warHammer = {
    name: "War Hammer",
    durability: 75,
    enhancement: 15
}

const leatherShield = {
    name: "Leather Shield",
    durability: 35,
    enhancement: 10
}

const longSword = {
    name: "Long Sword",
    durability: 45,
    enhancement: 20
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

describe('enchance repair items', () => {
    describe('test repair', () => {
        it('repair item to 100 durability', () => {
            expect(repair(mace)).toEqual({ ...mace, durability: 100 })
        })
    })



});


