const {UserCard} = require('../models');

const seedUserCard = async () => {
    const userCardSeeds = await UserCard.bulkCreate([
        {
            stapleColor: "Blue",
            stapleType: "Control",
            favorite: "true",
            quantity: 1,
            UserId: 1,
            CardId: 1,
        },
        {
            stapleColor: "Green",
            stapleType: "Ramp",
            quantity: 4,
            UserId: 2,
            CardId: 2,
        },
        // {
        //     stapleColor: "",
        //     stapleType: "",
        //     favorite: "",
        //     quantity: 1,
        //     UserId: 1,
        //     CardId: 1,
        // },
    ]);

    await userCardSeeds[0].addTag(1)
    await userCardSeeds[1].addTag(2)
    await userCardSeeds[0].addDeck(1)
    await userCardSeeds[1].addDeck(2)
}

module.exports = seedUserCard;