const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCard extends Model { }

UserCard.init({
    //I think allowing the user to input thier own tags for their own cards should be a thing.
    // userTag: {
    //     type: DataTypes.TEXT
    // },
    // userTagDescription: {
    //     type: DataTypes.STRING
    // },
    stapleColor: {
        type: DataTypes.STRING,
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deckLocations: {
        type: DataTypes.STRING,
    }
}, {
    sequelize
});

module.exports = UserCard