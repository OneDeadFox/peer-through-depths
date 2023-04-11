const {Language} = require('../models');

const languageData = [
    {
        tcgId: "4546",
        cardMarketId: "7489",
        language: "en",
        releaseDate: "02-22-2022",
        imageUris: "www.asite.com, www.here.com",
        price: 1.99,
        CardId: 1,
    },
    {
        tcgId: "4346",
        cardMarketId: "72289",
        language: "jp",
        releaseDate: "12-02-2002",
        imageUris: "www.asite.com, www.here.com",
        price: 1.99,
        CardId: 2,
    },
    // {
    //     tcgId: "4546",
    //     cardMarketId: "7489",
    //     language: "en",
    //     releaseDate: "02-22-2022",
    //     imageUris: "www.asite.com, www.here.com",
    //     price: 1.99,
    //     CardId: 1,
    // },
]

const seedLanguage = () => Language.bulkCreate(languageData);

module.exports = seedLanguage;