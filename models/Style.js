const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Style extends Model { }

Style.init({
    // tcgId: {
    //     type: DataTypes.STRING,
    // },
    // cardMarketId: {
    //     type: DataTypes.STRING,
    // },
    finish: {
        type: DataTypes.STRING,
    },
    layout: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // price: {
    //     type: DataTypes.DECIMAL(10, 2),
    // }
}, {
    sequelize
});

module.exports = Style