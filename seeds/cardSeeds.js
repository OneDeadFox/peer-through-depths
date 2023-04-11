const {Card} = require('../models');

const seedCards = async () => {
    const cardseeds = await Card.bulkCreate([
        {
            name: "Kiki-Jiki, Mirror Breaker",
            manaCost: "1RR",
            cmc: 3,
            colors: "Red",
            colorIdentity: "Red",
            types: "Creature",
            castingSpeed: "Sorcery",
            subtype: "Goblin",
            supertype: "Legendary",
            rulesText: "Stuff and things with tokens",
            power: 2,
            toughness: 2,
            rulingUri: "www.aplace.com",
            tags: "tap activated ability, ",
            keywords: "",
            producedMana: "",
            target: "Creature you control",
        },
        {
            name: "Riku of Two Rreflections",
            manaCost: "2BRG",
            cmc: 5,
            colors: "Blue, Red, Green",
            colorIdentity: "Blue, Red, Green",
            types: "Creature",
            castingSpeed: "Sorcery",
            subtype: "Human, Wizard",
            supertype: "Legendary",
            rulesText: "Stuff about copying stuff",
            power: 2,
            toughness: 2,
            rulingUri: "www.thingsgohere.com",
            tags: "cast copying, creature etb copying",
            keywords: "",
            producedMana: "",
            target: "",
        },
        // {
        //     name: "",
        //     manaCost: "",
        //     cmc: 1,
        //     colors: "",
        //     colorIdentity: "",
        //     types: "",
        //     castingSpeed: "",
        //     subtype: "",
        //     supertype: "",
        //     rulesText: "",
        //     power: 1,
        //     toughness: 1,
        //     rulingUri: "",
        //     tags: "",
        //     keywords: "",
        //     producedMana: "",
        //     target: "",
        // },
    ]);

    await cardseeds[0].addTag(1);
    await cardseeds[1].addTag(2);
}

module.exports = seedCards;