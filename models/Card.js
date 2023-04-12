const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model { }

Card.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    manaCost: {
        type: DataTypes.STRING,
    },
    cmc: {
        type: DataTypes.INTEGER,
    },
    colors: {
        type: DataTypes.STRING,
    },
    colorIdentity: {
        type: DataTypes.STRING,
    },
    types: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    castingSpeed: {
        type: DataTypes.STRING,
    },
    subtype: {
        type: DataTypes.STRING,
    },
    supertype: {
        type: DataTypes.STRING,
    },
    rulesText: {
        type: DataTypes.STRING,
    },
    power: {
        type: DataTypes.INTEGER,
    },
    toughness: {
        type: DataTypes.INTEGER,
    },
    rulingUri: {
        type: DataTypes.STRING,
    },
    tags: {
        type: DataTypes.STRING,
    },
    keywords: {
        type: DataTypes.STRING,
    },
    producedMana: {
        type: DataTypes.STRING,
    },
    target: {
        type: DataTypes.STRING,
    },
}, {
    sequelize
});

module.exports = Card