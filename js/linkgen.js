Moralis.initialize("zvmVYvSHoVfn1OnKnqidXLBh9EcuvpCjcbCkD2pO");
Moralis.serverURL = "https://amdykbspludj.moralishost.com:2053/server";

getHomeCollections = async() => {
    const homeCollections = Moralis.Object.extend('homeCollections');
    const query  = new Moralis.Query(homeCollections);
    const collections = await query.find();
    return collections;
}


const collectionDropDown = async() => {
    let link = "";
    let dropdownMenu = document.querySelector('#dropdown-menu');
    // console.log(dropdownMenu);
    let collectionDropDownlink = await getHomeCollections();
    collectionDropDownlink.forEach(item => {
        link += `
        <li><a class="dropdown-item" href="collection.html?collection_name=${item.attributes.collection_name}">${item.attributes.collection_name}</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>

        `
    })

    dropdownMenu.innerHTML += link;
}


 collectionDropDown();