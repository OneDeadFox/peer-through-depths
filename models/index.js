const Card = require('./Card');
const Deck = require('./Deck');
const Language = require('./Language');
const Set = require('./Set');
const Status = require('./Status');
const Style  = require('./Style');
const Tag = require('./Tag');
const TagAssociation = require('./TagAssociation');
const User = require('./User');
const UserCard = require('./UserCard');
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
Card.hasMany(UserCard);
UserCard.belongsTo(Card)

//Card Many to Many Relationships
Card.belongsToMany(Set , {through: "CardSet"});
Set.belongsToMany(Card , {through: "CardSet"});
Card.belongsToMany(Tag , {through: "CardTag"});
Tag.belongsToMany(Card , {through: "CardTag"});

//User Relationships
User.hasMany(Deck);
Deck.belongsTo(User);
User.hasMany(UserCard);
UserCard.belongsTo(User)

//Deck and UserCard Relationship
Deck.belongsToMany(UserCard , {through: "DeckCard"});
UserCard.belongsToMany(Deck , {through: "DeckCard"});

//Tag Self Relationship
Tag.belongsToMany(Tag, { through: TagAssociation, as: 'Association', foreignKey: 'AssociationId', otherKey: 'TagId'});
Tag.belongsToMany(Tag, { through: TagAssociation, as: 'Tag', foreignKey: 'TagId', otherKey:'AssociationId'});

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