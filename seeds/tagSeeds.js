const {Tag} = require('../models');

const tagData = [
    {
        tagName: "Discard",
        description: "You discard",
    },
    {
        tagName: "Control",
        description: "Counter stuff",
    },
    {
        tagName: "Ramp",
        description: "Get growing",
    },
    {
        tagName: "Removal",
        description: "Dies to...",
    },
    // {
    //     tagName: "",
    //     description: "",
    // },
]

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;