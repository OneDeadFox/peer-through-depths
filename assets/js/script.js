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

const initialFetch = () => {
    const baseUrl = 'https://api.magicthegathering.io/';
    const version = 'v1/';
    //ards?setName=dissension&page=2 - this query will pull the second page of data from the set 'dissension'
    const testQuery = 'cards?setName=dissension&page=2';
    const fetchUrl = baseUrl + version + testQuery;

    fetch (fetchUrl)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
        })
}

//initialFetch();