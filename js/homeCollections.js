Moralis.initialize("zvmVYvSHoVfn1OnKnqidXLBh9EcuvpCjcbCkD2pO");
Moralis.serverURL = "https://amdykbspludj.moralishost.com:2053/server";

getHomeCollections = async() => {
    const homeCollections = Moralis.Object.extend('homeCollections');
    const query  = new Moralis.Query(homeCollections);
    const collections = await query.find();
    return collections;
}

loadCollections = async() => {
    let collectionSum = document.querySelector('#collection-sum');
    loading = document.querySelector('#loading');
    loading.innerHTML = `<img src='./svg/loading.gif' alt='loading collections' id='loading-animation'>`
    let card = '';
    const collections = await getHomeCollections();
    collections.forEach(collection => {
        let blockchainimg = '';
        if(collection.attributes.blockchain == 'Sol') {
            blockchainimg += '../svg/solana.png';
        }
        else if(collection.attributes.blockchain =='Bsc') {
            blockchainimg += '../svg/Binance-BNB-Icon-Logo.wine.svg';
        }
        else if(collection.attributes.blockchain == 'Eth') {
            blockchainimg += '../svg/Ethereum-Icon-Purple-Logo.wine.svg';
        }
        else if(collection.attributes.blockchain == 'Polygon') {
            blockchainimg += '../svg/polygon-matic-logo.png';
        }

        card += `

        <a href="collection.html?collection_name=${collection.attributes.collection_name}" id="collection-link">
            <div class="card bg-dark h-100" id = "collections" width="200px" height="400px" style="border-radius: 15px;">
            <img src="${collection.attributes.collection_img_url}" class="card-img-top" style= "margin-bottom: 20px; border-radius:10px; height: 250px" width="250px" alt="...">
            <h1 class="card-title" style="font-weight: 600" id="card-title">${collection.attributes.collection_name}</h1>
            <div class="card-body">
                <img src="${blockchainimg}" class="card-text" !important'" style="padding-bottom: 5px" width="30px" height="30px">
                <p class="card-text">${collection.attributes.collection_concept}</p>
            </div>
            </div>
        </a>

             `      
     
    });

    collectionSum.innerHTML = card;
}

saveEmail = async (email) => {
    let emailClass =  Moralis.Object.extend('Email');
    let newEmail = new emailClass();
    newEmail.set('email', email.value);
    await newEmail.save();
    return newEmail;
    

}
validateEmail = async()  => {
    const email = document.querySelector('.email');
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        saveEmail(email);
        modalTitle.style.color = 'green';
        modalTitle.innerHTML = "Email saved sucessfully";
        modalBody.style.color = 'green';
        modalBody.innerHTML = "Thank you for subscribing to our Newsletter";
    }
    else {
        modalTitle.style.color = 'red';
        modalTitle.innerHTML = "Invalid Email";
        modalBody.style.color = 'red';
        modalBody.innerHTML = "Please input a valid Email address";
    }
}

window.onload = loadCollections;

const subButton = document.querySelector('.sub-button');
subButton.addEventListener('click', validateEmail);