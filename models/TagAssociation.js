const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TagAssociation extends Model { }

TagAssociation.init({
    associationScore: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false,
    },
}, {
    sequelize
});

module.exports = TagAssociation