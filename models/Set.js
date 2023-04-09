const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Set extends Model { }

Set.init({
    set: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    setName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    setType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequalize
});

module.exports = Set