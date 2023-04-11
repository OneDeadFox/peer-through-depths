const {User} = require('../models');

const userData = [
    {
        username: "Jace-Blockeren",
        email: "allblue@wizard.mage",
        password: "Blu3i$B3st",
    },
    {
        username: "Chandra-Blockar",
        email: "lightitup@wizard.mage",
        password: "F!r3F!r3",
        theme: "dark",
    },
    // {
    //     username: "",
    //     email: "",
    //     password: "",
    //     theme: "",
    //     profilePicture: "",
    // },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;