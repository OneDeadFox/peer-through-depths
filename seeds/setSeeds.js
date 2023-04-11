const {Set} = require('../models');

const setData = [
    {
        set: "R01",
        setName: "Ravnica",
        setType: "Main",
    },
    {
        set: "Z01",
        setName: "Zendikar",
        setType: "Main",
    },
    // {
    //     set: "",
    //     setName: "",
    //     setType: "",
    // },
]

const seedSet = () => Set.bulkCreate(setData);

module.exports = seedSet;