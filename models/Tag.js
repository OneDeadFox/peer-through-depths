const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model { }

Tag.init({
    tagName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    sequalize
});

module.exports = Tag