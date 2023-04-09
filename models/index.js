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
Card.belongsToMany(Deck , {though: "CardDeck"});
Deck.belongsToMany(Card , {though: "CardDeck"});
Card.belongsToMany(Set , {though: "CardSet"});
Set.belongsToMany(Card , {though: "CardSet"});
Card.belongsToMany(Tag , {though: "CardTag"});
Tag.belongsToMany(Card , {though: "CardTag"});
Card.belongsToMany(User , {though: "UserCard"});
User.belongsToMany(Card , {though: "UserCard"});

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