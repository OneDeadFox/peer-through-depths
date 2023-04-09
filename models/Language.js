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
    //I think we can just store the name in card
    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    // },
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
    sequalize
});

module.exports = Language