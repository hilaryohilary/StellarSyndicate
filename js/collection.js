Moralis.initialize("zvmVYvSHoVfn1OnKnqidXLBh9EcuvpCjcbCkD2pO");
Moralis.serverURL = "https://amdykbspludj.moralishost.com:2053/server";

const urlParams = new URLSearchParams(window.location.search);
const collectionNameUrl = urlParams.get('collection_name');
console.log(collectionNameUrl)
collectionName = document.querySelector('#collection-name').innerHTML = collectionNameUrl;

getHomeCollections = async() => {
    const homeCollections = Moralis.Object.extend('homeCollections');
    const query  = new Moralis.Query(homeCollections);
    const collections = await query.find();
    return collections;
}

