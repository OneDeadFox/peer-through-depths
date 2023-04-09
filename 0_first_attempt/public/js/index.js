//TODO: find out how many different keys are in each objectch
const Card = require(`../../lib/Card`);
const Set = require(`../../lib/Set`);
const { readFile, writeFile } = require("../../utils/promises");
let multiverse = [];

const multiverseMaker = () => {
    //../../../../dbs/mtg-bulk-data/test-db.json
    readFile(`../../db/short-test-db.json`).then(data => {
        const rawCards = JSON.parse(data); 
        let setIndex = 0;
        //this variable is used to determine the index number of sets within the following forEach method.

        //console.log(sets);
        rawCards.forEach(card => {
            //create a new set and add to relevant arrays, if one doesn't already exist
            console.log(card.name + ',' + card.set_name);

            const uniqueSet = () => {
                for (let i = 0; i < multiverse.length; i++) {
                    const element = multiverse[i].setName;
                    
                    setIndex = i + 1;

                    if(card.set_name === element){
                        console.log('falsey');
                        setIndex = i;
                        return false;
                    }

                    if(i === multiverse.length){
                        console.log('truthy');
                        return true;
                    }
                }
            }
            console.log(uniqueSet());
            
            if (uniqueSet()) {
                const newSet = new Set(card.set_name);
                multiverse.push(newSet);
            }

            //establish the index of this card's set within multiverse and setNames arrays
            // setIndex = setNames.indexOf(card.set_name);

            //console.log(multiverse[setIndex].cardNames.indexOf(card.name));
            let uniqueCard = true;

            if(multiverse[setIndex].cardObjs) {
                for (let i = 0; i < multiverse[setIndex].cardObjs.length; i++) {
                    const element = multiverse[setIndex].cardObjs[i].name;
                    if(card.name === element){
                        uniqueCard = false;
                        return;
                    }
                }
            }

            if (uniqueCard) {
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
                //console.log(newCard.name);
                multiverse[setIndex].cardObjs.push(newCard);
            } else {
                console.log(`Card already exists in this set`);
            }
        });
        console.log(multiverse);
    })
}

multiverseMaker();
//look into junction tables for mysql