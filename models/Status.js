const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model { }

Status.init({
    legalities: {
        type: DataTypes.STRING,
    },
    isToken: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    game: {
        type: DataTypes.STRING,
    },
    edhrecRank: {
        type: DataTypes.INTEGER,
    },
    edhrecUri: {
        type: DataTypes.STRING,
    }
}, {
    sequelize
});

module.exports = Status;