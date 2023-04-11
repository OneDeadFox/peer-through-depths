const {Deck} = require('../models');

const seedDeck =  async () => {
    const deckSeeds = await Deck.bulkCreate([
        {
            name: "March of Madness",
            powerLevel: 5,
            rating: 3,
            description: "Mid-range madness deck",
            tags: "Madness, Discard",
        },
        {
            name: "Hippity Hoppity",
            powerLevel: 8,
            rating: 4,
            description: "Competitive leaning blue control",
            tags: "TYS-Creature, Spell-Countering",
        },
        // {
        //     name: "",
        //     powerLevel: 1,
        //     rating: 1,
        //     description: "",
        //     tags: "",
        // },
    ]);

    await deckSeeds[0].addTag(1);
    await deckSeeds[1].addTag(2);
}

module.exports = seedDeck;