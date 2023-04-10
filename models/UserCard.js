const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCard extends Model { }

UserCard.init({
    userTag: {
        type: DataTypes.TEXT
    },
    userTagDescription: {
        type: DataTypes.STRING
    },
    stapleColor: {
        type: DataTypes.STRING,
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize
});

module.exports = UserCard