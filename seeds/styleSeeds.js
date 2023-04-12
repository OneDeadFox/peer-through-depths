const {Style} = require('../models');

const styleData = [
    {
        tcgId: "45776",
        cardMarketId: "12789",
        finish: "standard",
        layout: "standard",
        price: 1.99,
        CardId: 1,
        LanguageId: 1,
    },
    {
        tcgId: "45876",
        cardMarketId: "56789",
        finish: "foil",
        layout: "standard",
        price: 2.99,
        CardId: 2,
        LanguageId: 2,
    },
    // {
    //     tcgId: "456",
    //     cardMarketId: "789",
    //     finish: "standard",
    //     layout: "standard",
    //     CardId: 1,
    // },
]

const seedStyle = () => Style.bulkCreate(styleData);

module.exports = seedStyle;