const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TagAssociation extends Model { }

TagAssociation.init({
    association: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    sequalize
});

module.exports = TagAssociation