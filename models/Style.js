const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Style extends Model { }

Style.init({
    tcgId: {
        type: DataTypes.STRING,
    },
    cardMarketId: {
        type: DataTypes.STRING,
    },
    finish: {
        type: DataTypes.STRING,
    },
    latout: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize
});

module.exports = Style