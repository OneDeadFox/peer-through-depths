const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model { }

Status.init({
    legalities: {
        type: DataTypes.STRING,
    },
    games: {
        type: DataTypes.STRING,
    },
    edhrecRank: {
        type: DataTypes.INTEGER,
    },
    edhrecUri: {
        type: DataTypes.STRING,
    },
    isToken: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize
});

module.exports = Status;