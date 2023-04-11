const {X} = require('../models');

const yData = [
    
]

const seedX = () => X.bulkCreate(yData);

module.exports = seedX;