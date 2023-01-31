//TODO: find out how many different keys are in each objectch

const Card = require(`../../lib/Card`);
const Set = require(`../../lib/Set`);
const { readFile, writeFile } = require("../../utils/promises");
let multiverse = [];
let setNames = [];

readFile(`../../db/short-test-db.json`).then(data => {
    //console.log(JSON.parse(data))
    const rawCards = JSON.parse(data); 
    let setIndex = -1;

    // //create an array of all sets based on incoming card set name
    // let sets = rawCards.map(card => card.set_name);
    // sets = sets.filter((set, i) => sets.indexOf
    // (set) === i);


    //console.log(sets);
    rawCards.forEach(card => {
        //create a new set and add to relevant arrays, if one doesn't already exist
        if (setNames.indexOf(card.set_name) === -1) {
            const newSet = new Set(card.set_name);
            multiverse.push(newSet);
            setNames.push(card.set_name);
        }

        //establish the index of this card's set within multiverse and setNames arrays
        setIndex = setNames.indexOf(card.set_name);

        //console.log(multiverse[setIndex].cardNames.indexOf(card.name));

        if (multiverse[setIndex].cardNames.indexOf(card.name) === -1) {
            const setDetails = {
                set: card.set_name,
                setType: card.set_type,
                rarity: card.rarity,
                flavorText: card.flavor_text,
                artist: card.artist,
                booster: card.booster,
                prices: card.prices,
                style: [card.nonfoil, card.foil, card.finishes, card.oversized, card.promo, card.reprint, card.variation, card.frame, card.full_art, card.layout]
            }

            const newCard = new Card(card.name, [card.id, card.oracle_id, card.multiverse_ids, card.mtgo_id, card.mtgo_foil_id, card.tcgplayer_id, card.cardmarket_id], card.image_uris, card.mana_cost, card.cmc, card.colors, card.color_identity, card.type_line, card.oracle_text, card.keywords, card.power, card.toughness, card.legalities, card.games, card.reserved, [card.set_id, card.set_name, card.set_type], setDetails);

            multiverse[setIndex].cardNames.push(card.name);
            multiverse[setIndex].cardObjs.push(newCard);
        } else {
            console.log(`Card already exists in this set`);
        }
    });
    console.log(multiverse);
    //console.log(setNames);
})
