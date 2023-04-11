const {Status} = require('../models');

const statusData = [
    {
        legalities: "Commander, Standard, Pauper",
        game: "paper, digital",
        edhrecRank: 1,
        edhrecUri: "www.test.com",
    },
    {
        legalities: "Commander, Standard, Pauper",
        game: "digital",
        edhrecRank: 2,
        edhrecUri: "www.best.com",
    }
]

const seedStatus = () => Status.bulkCreate(statusData);

module.exports = seedStatus;