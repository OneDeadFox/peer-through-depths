const {TagAssociation} = require('../models');

const tagAssociationData = [
    {
        associationScore: 0.6,
        AssociationId: 1,
        TagId: 2,
    },
    {
        associationScore: 0.2,
        AssociationId: 1,
        TagId: 3,
    },
    {
        associationScore: 0.32,
        AssociationId: 1,
        TagId: 4,
    },
    {
        associationScore: 0.4,
        AssociationId: 2,
        TagId: 4,
    },
    {
        associationScore: 0.51,
        AssociationId: 4,
        TagId: 3,
    },
    // {
    //     associationScore: 0.6,
    //     AssociationId: 1,
    //     TagId: 2,
    // },
]

const seedTagAssociation = () => TagAssociation.bulkCreate(tagAssociationData);

module.exports = seedTagAssociation;