const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Variation extends Model { }

Variation.init({
    multiverseId: {
        type: DataTypes.STRING,
    },
    tcgId: {
        type: DataTypes.STRING,
    },
    cardMarketId: {
        type: DataTypes.STRING,
    },
    variation: {
        type: DataTypes.STRING,
    },
    scryfallUri: {
        type: DataTypes.STRING,
    },
    imageUris: {
        type: DataTypes.STRING,
    },
    collectorNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    digital: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    rarity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reserved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    flavorText: {
        type: DataTypes.TEXT,
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    artistId: {
        type: DataTypes.STRING,
    },
    illustrationId: {
        type: DataTypes.STRING,
    },
    borderColor: {
        type: DataTypes.STRING,
    },
    frame: {
        type: DataTypes.STRING,
    },
    fullArt: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    textless: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    booster: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    storySpotlight: {
        type: DataTypes.BOOLEAN,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
}, {
    sequalize
});

module.exports = Variation 