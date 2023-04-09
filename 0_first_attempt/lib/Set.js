class Set {
    constructor(setName) {
        this.setName = setName;
        this.types = [];
        this.cardObjs = [];
        this.cardNames = [];
    }

    addType(type){
        if(this.types.indexOf(type) === -1) {
            this.types.push(type);
        } else {
            console.log(`${type} has already been added.`);
        }
    }

    addCard(card){
        if(this.cardNames.indexOf(card.name) === -1) {
            this.cardObjs.push(card);
            this.cardNames.push(card.name);
        }
    }
}

module.exports = Set;
    //TODO: add functions that would be useful such as sorting by color and type and fetching pricing data for set products.
