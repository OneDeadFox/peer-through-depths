const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model { }

Status.init({
    legalities: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('legalities').split(',')
        },
        set(val) {
            this.setDataValue('legalities',val.join(','));
        },
    },
    games: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('games').split(',')
        },
        set(val) {
            this.setDataValue('games',val.join(','));
        },
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