const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TagAssociation extends Model { }

TagAssociation.init({
    associationScore: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    sequelize
});

module.exports = TagAssociation