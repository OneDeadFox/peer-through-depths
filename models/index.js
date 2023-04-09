const Card = require('./Card');
const Deck = require('./Deck');
const Language = require('./Language');
const Set = require('./Set');
const Status = require('./Status');
const Style  = require('./Style');
const Tag = require('./Tag');
const TagAssociation = require('./TagAssociation');
const User = require('./User');
const Variation = require('./Variation');

//Card One to Many Relationship
Card.hasMany(Language);
Language.belongsTo(Card);
Card.hasMany(Style);
Style.belongsTo(Card);
Card.hasMany(Status);
Status.belongsTo(Card);
Card.hasMany(Variation);
Variation.belongsTo(Card);

//Card Many to Many Relationships
Card.belongsToMany(Deck , {through: "CardDeck"});
Deck.belongsToMany(Card , {through: "CardDeck"});
Card.belongsToMany(Set , {through: "CardSet"});
Set.belongsToMany(Card , {through: "CardSet"});
Card.belongsToMany(Tag , {through: "CardTag"});
Tag.belongsToMany(Card , {through: "CardTag"});
Card.belongsToMany(User , {through: "UserCard"});
User.belongsToMany(Card , {through: "UserCard"});

//User Relationship
User.hasMany(Deck);
Deck.belongsTo(User);

//Tag Self Relationship
Tag.belongsToMany(Tag, { through: TagAssociation, as: 'Tag', foreignKey: 'AssociationId', otherKey: 'TagId'});
Tag.belongsToMany(Tag, { through: TagAssociation, as: 'Association', foreignKey: 'TagId', otherKey:'AssociationId'});

module.exports = {
    Card,
    Deck,
    Language,
    Set,
    Status,
    Style,
    Tag,
    TagAssociation,
    User,
    Variation
}