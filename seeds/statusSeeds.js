const {Status} = require('../models');

const statusData = [
    {
        legalities: "Commander, Standard, Pauper",
        games: "paper, digital",
        edhrecRank: 1,
        edhrecUri: "www.test.com",
        CardId: 1,
    },
    {
        legalities: "Commander, Standard, Pauper",
        games: "digital",
        edhrecRank: 2,
        edhrecUri: "www.best.com",
        CardId: 2,
    }
]

const seedStatus = () => Status.bulkCreate(statusData);

module.exports = seedStatus;