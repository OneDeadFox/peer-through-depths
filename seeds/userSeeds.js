const {User} = require('../models');

const userData = [
    {
        username: "JaceBlockeren",
        email: "allblue@wizard.mage",
        password: "Blu3i$B3st",
    },
    {
        username: "ChandraBlockar",
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

const seedUser = () => User.bulkCreate(userData, {
    validate: true,
    individualHooks: true
});

module.exports = seedUser;