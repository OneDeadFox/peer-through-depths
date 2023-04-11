const {Language} = require('../models');

const languageData = [
    
]

const seedLanguage = () => Language.bulkCreate(languageData);

module.exports = seedLanguage;