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
        defaultValue: false,
    },
    textless: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    booster: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    storySpotlight: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
}, {
    sequelize
});

module.exports = Variation 