const {Deck} = require('../models');

const seedDeck =  async () => {
    const deckSeeds = await Deck.bulkCreate([
        {
            name: "March of Madness",
            powerLevel: 5,
            rating: 3,
            description: "Mid-range madness deck",
            tags: "Madness, Discard",
            UserId: "1"
        },
        {
            name: "Hippity Hoppity",
            powerLevel: 8,
            rating: 4,
            description: "Competitive leaning blue control",
            tags: "TYS-Creature, Spell-Countering",
            UserId: "2"
        },
        // {
        //     name: "",
        //     powerLevel: 1,
        //     rating: 1,
        //     description: "",
        //     tags: "",
        //     UserId: "",
        // },
    ]);

    await deckSeeds[0].addTag(1);
    await deckSeeds[1].addTag(2);
}

module.exports = seedDeck;