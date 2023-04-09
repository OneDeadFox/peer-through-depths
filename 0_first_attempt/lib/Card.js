const Set = require(`./Set`)

class Card {
    //ids = array of different ids,
    //images = array of image uris
    //games = array of different game types (e.g. paper mtgo)
    //styles = array of different card printing styles (**see setSpecifics comment)
    //sets = array of all sets the card can be found in
    //setSpecifics = array of objects where sets are mached with thier collector number, rarity, styles, flavorText, artist, booster-bolean, prices per style, urls
    //producedMana = needs to be added to the object dynamically if exists in data

    //I don't think super is working

    constructor(name, ids, images, manaCost, cmc, colors, colorIdentity, typeLine, text, keywords, power, toughness, legal, games, reserved, sets, setSpecifics){
        //super()
        //this.setName = setName;
        this.name = name;
        this.ids = ids;
        this.images = images;
        this.manaCost = manaCost;
        this.cmc = cmc;
        this.colors = colors;
        this.colorIdentity = colorIdentity;
        this.typeLine = typeLine;
        this.text = text;
        this.keywords = keywords;
        this.power = power;
        this.toughness = toughness;
        this.legal = legal;
        this.games = games;
        this.reserved = reserved;
        this.sets = sets;
        this.setSpecifics = setSpecifics;
    }
}

module.exports = Card;

//TODO: add functions that would be useful such as fetching price data and deck usage/ratings