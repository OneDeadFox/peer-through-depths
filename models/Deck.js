const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deck extends Model { }

Deck.init({
    name: {
        type: DataTypes.STRING,
    },
    powerLevel: {
        type: DataTypes.INTEGER,
    },
    rating: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
    tags: {
        type: DataTypes.STRING,
    },
}, {
    sequelize
});

module.exports = Deck