const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model { }

Language.init({
    tcgId: {
        type: DataTypes.STRING,
    },
    cardMarketId: {
        type: DataTypes.STRING,
    },
    language: {
        type: DataTypes.STRING,
    },
    releaseDate: {
        type: DataTypes.DATE,
    },
    imageUris: {
        type: DataTypes.STRING,
    },
    prices: {
        type: DataTypes.DECIMAL,
    },
}, {
    sequelize
});

module.exports = Language