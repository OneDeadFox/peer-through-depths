//require all seed files
const seedCards = require('./cardSeeds');
const seedDecks = require('./deckSeeds');
const seedLanguages = require('./languageSeeds');
const seedSets = require('./setSeeds');
const seedStatuses = require('./statusSeeds');
const seedStyles = require('./styleSeeds');
const seedTagAssociations = require('./tagAssociationSeeds');
const seedTags = require('./tagSeeds');
const seedUserCards = require('./userCardSeeds');
const seedUsers = require('./userSeeds');
const seedVariations = require('./variationSeeds');


//bring in sequalize
const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    await seedTags();
    console.log("\n----- TAGS SEEDED -----\n");
    
    await seedSets();
    console.log("\n----- SETS SEEDED -----\n");
    
    await seedCards();
    console.log("\n----- CARDS SEEDED -----\n");

    await seedDecks();
    console.log("\n----- DECKS SEEDED -----\n");

    // await seedLanguages();
    // console.log("\n----- LANGUAGES SEEDED -----\n");
    
    await seedStatuses();
    console.log("\n----- STATUSES SEEDED -----\n");
    
    // await seedStyles();
    // console.log("\n----- STYLES SEEDED -----\n");
    
    // await seedVariations();
    // console.log("\n----- VARIATIONS SEEDED -----\n");
    
    // await seedUserCards();
    // console.log("\n----- USERCARDS SEEDED -----\n");
    
    // await seedTagAssociations();
    // console.log("\n----- TAGASSOCIATIONS SEEDED -----\n");

    process.exit(0);
}

seedAll();