//console.log('Cool name, but that card kind of sucks'); -Console log easter egg?

// Set up fetch to the magicthegathering.io api
    //1. report any error and potential roadblocks
        //a. potential roadblock is that the maximun array size is 100
    //2. review data that is retrieved from fetch
        //a. how is it structured?
            //i. we will be able to look up arrays of cards using the 'cards' GET and then query from a list of relevant keyword (e.g. name, type, color, set, text)
            //ii. we will need to create a function that continues to fetch for data, increasing the desired page number, until it returns an array with less than 100 entries or a blank array. - this is to solve the potential roadblock.
        //b. what does it contain?
            //i. appears to contain relevant data to compile for set destructuring and statistics generation.
        //c. what is it missing that is needed for app?
            //i. we will need to find another api for tournament data.
    //3. TODO: look into other needed apis to filling in gaps where needed
//TODO: set up gatherer like query bars where each potential query item is in its own search bar
    //1. maybe use a for loop to make the search bars in a form based on an array of potential query items.
    //2. have each search bar save the query with its associated search param into a variable that will be added to the fetch.
//TODO: switch fetch to scryfall


//Global Variables========================================================
//const fs = require('fs');

const searchBar = $('.search-bar');
let pageNum = 1;
let results = [];

//Event Listeners=========================================================
searchBar.on('keydown', (e) => {
    let key = e.which;
    if(key === 13){
        console.log('pressed enter')
        initialFetch(searchBar.val());
        console.log(searchBar.val());
        searchBar.val('');
    }
})

//Functions===============================================================
const initialFetch = (query) => {
    const baseUrl = 'https://api.magicthegathering.io/';
    const version = 'v1/';
    //ards?setName=dissension&page=2 - this query will pull the second page of data from the set 'dissension'
    const testQuery = `cards?setName=${query}&page=${pageNum}`;
    const fetchUrl = baseUrl + version + testQuery;

    fetch (fetchUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            results = results.concat(data.cards);
            if(data.cards.length === 100){
                pageNum++;
                initialFetch(query);
                return;
            } else {
                pageNum = 1;
                console.log(results);
                separateResults(results);
                results = [];
                return;
            }
        })
}

const separateResults = (arr) => {
    const intoSets = arr.map((card) => card.setName);
    const setNames = intoSets.filter((set, i) => intoSets.indexOf(set) === i);
    const numberOfSets = setNames.length

    for (let i = 0; i < numberOfSets; i++) {
        const set = {
            name: `${setNames[i]}`,
            cards: arr.filter((card) => card.setName === setNames[i]),
        }
        console.log(set);
        //localStorage.setItem(`set${i}`, JSON.stringify(set));
        filterResults(set);
    }
}

const filterResults = (obj) => {
    const {cards} = obj;
    let removalCount = 0;
    //make a function for findIndex
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        for (let ii = i + 1; ii < cards.length - 1; ii++) {
            const comparedCard = cards[ii];
            if(cards[i].name === cards[ii].name){
                removalCount++;
                cards.splice(ii,1);
            }
        }
    }
    console.log(`removal count: ` + removalCount);
    console.log(cards);
    //cards.filter((card, i) => card.indexOf(card.name) === i );
}

const set = JSON.parse(localStorage.getItem(`set0`));
filterResults(set);
//initialFetch();